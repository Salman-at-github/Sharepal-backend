const express = require('express');
const { getAllOrders } = require('../controllers/ordersController');

const router = express.Router();

router.get('/all', getAllOrders);

module.exports = router;