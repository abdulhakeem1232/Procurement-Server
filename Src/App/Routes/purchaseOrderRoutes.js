const express = require('express');
const orderController = require('../Controller/purchaseOrderController');

const router = express.Router();

router.get('/getorders', orderController.getAllOrders);
router.post('/create', orderController.createOrder);

module.exports = router;
