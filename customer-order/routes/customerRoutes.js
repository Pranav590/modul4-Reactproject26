const express = require('express');
const router = express.Router();
const controller = require('../controllers/customerController');

router.post('/register', controller.registerCustomer);
router.delete('/delete-customer/:customerId', controller.deleteCustomer);

module.exports = router;
