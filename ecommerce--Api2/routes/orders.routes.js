const express = require("express");
const fs = require("fs");

const router = express.Router();

const readDB = () => JSON.parse(fs.readFileSync("db.json"));
const writeDB = (data) => fs.writeFileSync("db.json", JSON.stringify(data, null, 2));

/* 1️⃣ Create Order */
router.post("/", (req, res) => {
  const { productId, quantity } = req.body;
  const db = readDB();

  const product = db.products.find(p => p.id === productId);
  if (!product) return res.status(404).json({ message: "Product not found" });

  if (product.stock === 0 || quantity > product.stock) {
    return res.status(400).json({ message: "Insufficient stock" });
  }

  const newOrder = {
    id: db.orders.length + 1,
    productId,
    quantity,
    totalAmount: product.price * quantity,
    status: "placed",
    createdAt: new Date().toISOString().split("T")[0]
  };

  product.stock -= quantity;
  db.orders.push(newOrder);
  writeDB(db);

  res.status(201).json(newOrder);
});

/* 2️⃣ Get All Orders */
router.get("/", (req, res) => {
  const db = readDB();
  res.json(db.orders);
});

/* 3️⃣ Cancel Order */
router.delete("/:orderId", (req, res) => {
  const db = readDB();
  const order = db.orders.find(o => o.id == req.params.orderId);

  if (!order) return res.status(404).json({ message: "Order not found" });
  if (order.status === "cancelled")
    return res.status(400).json({ message: "Order already cancelled" });

  const today = new Date().toISOString().split("T")[0];
  if (order.createdAt !== today)
    return res.status(400).json({ message: "Cancellation not allowed" });

  order.status = "cancelled";

  const product = db.products.find(p => p.id === order.productId);
  product.stock += order.quantity;

  writeDB(db);
  res.json({ message: "Order cancelled successfully" });
});

/* 4️⃣ Change Order Status */
router.patch("/change-status/:orderId", (req, res) => {
  const { status } = req.body;
  const db = readDB();

  const order = db.orders.find(o => o.id == req.params.orderId);
  if (!order) return res.status(404).json({ message: "Order not found" });

  if (["cancelled", "delivered"].includes(order.status)) {
    return res.status(400).json({ message: "Status change not allowed" });
  }

  const flow = ["placed", "shipped", "delivered"];
  const currentIndex = flow.indexOf(order.status);
  if (flow[currentIndex + 1] !== status) {
    return res.status(400).json({ message: "Invalid status flow" });
  }

  order.status = status;
  writeDB(db);
  res.json(order);
});

module.exports = router;
