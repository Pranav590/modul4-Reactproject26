const fs = require("fs");

const readDB = () => {
  return JSON.parse(fs.readFileSync("db.json", "utf-8"));
};

const writeDB = (data) => {
  fs.writeFileSync("db.json", JSON.stringify(data, null, 2));
};

module.exports = { readDB, writeDB };
