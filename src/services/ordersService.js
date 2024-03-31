const OrderModel = require("../models/OrderModel");

// Service function to get all orders with pagination
const fetchAllOrders = async (page = 1, limit = 1) => {
    try {
        // Count total number of orders
        const totalOrders = await OrderModel.countDocuments();

        // Calculate total number of pages
        const totalPages = Math.ceil(totalOrders / limit);

        // Validate page parameter
        if (page < 1 || page > totalPages) {
            throw new Error('Invalid page number');
        }

        // Calculate skip value based on page and limit
        const skip = (page - 1) * limit;

        // Fetch orders with pagination
        const orders = await OrderModel.find().sort({ order_date: -1 }).skip(skip).limit(limit);

        return {
            data: orders,
            pagination: {
                totalOrders,
                totalPages,
                currentPage: page
            }
        };
    } catch (error) {
        throw new Error('Error fetching orders');
    }
};

module.exports = { fetchAllOrders };
