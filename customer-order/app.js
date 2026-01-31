const express = require('express');
const app = express();

app.use(express.json());

app.use('/customers', require('./routes/customerRoutes'));
app.use('/orders', require('./routes/orderRoutes'));

module.exports = app;
