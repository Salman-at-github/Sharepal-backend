const { fetchAllOrders } = require("../services/ordersService");

// Controller function to get all orders with pagination
const getAllOrders = async (req, res) => {
    try {
        const { page = 1, limit = 6 } = req.query;
        const orders = await fetchAllOrders(parseInt(page), parseInt(limit));
        res.status(200).json(orders);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

module.exports = { getAllOrders };
