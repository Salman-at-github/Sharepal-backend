const mongoose = require('mongoose');

// Define the order types and associated stages
const orderTypeStages = {
    normal: ["Received", "Confirmed", "Shipped", "Delivered"],
    cancelled: ["Received", "Confirmed", "Cancelled"],
    return: ["Pickup Due", "Pickup Scheduled", "Quality Checked", "Order Completed"]
};

const stageSchema = new mongoose.Schema({
    stage: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    }
});

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
    order_type: {
        type: String,
        enum: ['normal', 'cancelled', 'return'], // Define possible order types
        required: true
    },
    stages: {
        type: [stageSchema], // Array of stage objects
        default: []
    },
    current_stage: {
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
    }]
});

// Pre-save hook to set default stages based on order type
orderSchema.pre('save', function(next) {
    if (this.isNew) {
        this.stages = orderTypeStages[this.order_type].map(stage => ({ stage, date: this.order_date })) || [];
        this.current_stage = this.stages[0].stage || '';
    }
    next();
});

const OrderModel = mongoose.model('Order', orderSchema);

module.exports = OrderModel;
