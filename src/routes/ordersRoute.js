const express = require('express');
const { getAllOrders, getSingleOrder, getVal } = require('../controllers/ordersController');

const router = express.Router();

router.get('/all', getAllOrders);

router.get('/:order_id', getSingleOrder);
router.get('/stages/get', getVal);

module.exports = router;