const express = require("express");
const router = express.Router();
const { readDB, writeDB } = require("../utils/fileHandler");

/* 1️⃣ Create Order */
router.post("/", (req, res) => {
  const { productId, quantity } = req.body;
  const db = readDB();

  const product = db.products.find(p => p.id === productId);
  if (!product) return res.status(404).json({ message: "Product not found" });

  if (product.stock === 0 || quantity > product.stock)
    return res.status(400).json({ message: "Insufficient stock" });

  const order = {
    id: Date.now(),
    productId,
    quantity,
    totalAmount: product.price * quantity,
    status: "placed",
    createdAt: new Date().toISOString().split("T")[0]
  };

  product.stock -= quantity;
  db.orders.push(order);

  writeDB(db);
  res.status(201).json(order);
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
    return res.status(400).json({ message: "Cancellation allowed only on same day" });

  order.status = "cancelled";

  const product = db.products.find(p => p.id === order.productId);
  product.stock += order.quantity;

  writeDB(db);
  res.json({ message: "Order cancelled successfully" });
});
