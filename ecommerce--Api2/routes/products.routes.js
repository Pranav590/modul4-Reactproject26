const express = require("express");
const fs = require("fs");

const router = express.Router();

router.get("/", (req, res) => {
  const db = JSON.parse(fs.readFileSync("db.json"));
  res.json(db.products);
});

module.exports = router;
