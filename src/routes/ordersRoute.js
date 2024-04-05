const express = require('express');
const { getAllOrders, getSingleOrder } = require('../controllers/ordersController');

const router = express.Router();

router.get('/all', getAllOrders);

router.get('/:order_id', getSingleOrder);

module.exports = router;