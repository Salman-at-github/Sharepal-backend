const mongoose = require('mongoose');
const TicketModel = require('./TicketModel');

const orderSchema = new mongoose.Schema({
    order_id: {
        type: String,
        required: true
    },
    order_date: {
        type: Date,
        required: true
    },
    delivery_date: {
        type: Date,
        required: true
    },
    pickup_date: {
        type: Date,
        required: true
    },
    total_order_amount: {
        type: Number,
        required: true
    },
    stage: {
        type: String,
        required: true
    },
    customer_details: {
        name: {
            type: String,
            required: true
        },
        contact_number: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        delivery_address: {
            type: String,
            required: true
        }
    },
    items: [{
        name: {
            type: String,
            required: true
        },
        size: String,
        quantity: {
            type: Number,
            required: true
        },
        rental_amount: {
            type: Number,
            required: true
        },
        image: String
    }],
    tickets: [TicketModel.schema]
});

const OrderModel = mongoose.model('Order', orderSchema);

module.exports = OrderModel;
