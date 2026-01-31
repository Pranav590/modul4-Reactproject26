const express = require('express');
const router = express.Router();
const controller = require('../controllers/orderController');

router.post('/add-order', controller.createOrder);
router.get('/get-my-orders/:customerId', controller.getCustomerOrders);
router.put('/update-order/:orderId', controller.updateOrder);
router.delete('/delete-order/:orderId', controller.deleteOrder);

module.exports = router;
