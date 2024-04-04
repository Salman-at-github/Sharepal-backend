const OrderModel = require("../models/OrderModel");
const { fetchAllOrders, fetchSingleOrder } = require("../services/ordersService");

// Controller function to get all orders with pagination
const getAllOrders = async (req, res) => {
    try {
        const { page = 1, limit = 6 } = req.query;
        const orders = await fetchAllOrders(parseInt(page), parseInt(limit));
        res.status(200).json(orders);
    } catch (error) {
        return res.status(500).json({ error: 'Internal server error' });
    }
};

const getSingleOrder = async(req, res)=>{
    try {
        const {order_id} = req.params;
        const order = await fetchSingleOrder(order_id);
        res.status(200).json(order);
    } catch (error) {
        return res.status(500).json(error.message);
    }
}

const getVal = async(req, res)=>{
    const orders = await OrderModel.find()
    const stages = orders.map((order)=> order.stage)
    res.status(200).json(stages)

}

module.exports = { getAllOrders, getSingleOrder, getVal };
