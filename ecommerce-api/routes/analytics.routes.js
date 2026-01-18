const express = require("express");
const readDB = require("../utils/readDB");

const router = express.Router();

/* ALL ORDERS */
router.get("/allorders", (req, res) => {
  const { orders } = readDB();
  res.json({ count: orders.length, orders });
});

/* CANCELLED ORDERS */
router.get("/cancelled-orders", (req, res) => {
  const { orders } = readDB();
  const cancelled = orders.filter(o => o.status === "cancelled");
  res.json({ count: cancelled.length, cancelled });
});

/* SHIPPED ORDERS */
router.get("/shipped", (req, res) => {
  const { orders } = readDB();
  const shipped = orders.filter(o => o.status === "shipped");
  res.json({ count: shipped.length, shipped });
});

/* TOTAL REVENUE BY PRODUCT */
router.get("/total-revenue/:productId", (req, res) => {
  const { orders, products } = readDB();
  const product = products.find(p => p.id === Number(req.params.productId));

  if (!product) return res.status(404).json({ message: "Product not found" });

  const totalRevenue = orders
    .filter(o => o.productId === product.id && o.status !== "cancelled")
    .reduce((sum, o) => sum + o.quantity * product.price, 0);

  res.json({ productId: product.id, totalRevenue });
});

/* OVERALL REVENUE */
router.get("/alltotalrevenue", (req, res) => {
  const { orders, products } = readDB();

  const totalRevenue = orders
    .filter(o => o.status !== "cancelled")
    .reduce((sum, o) => {
      const product = products.find(p => p.id === o.productId);
      return sum + o.quantity * product.price;
    }, 0);

  res.json({ totalRevenue });
});

module.exports = router;
