const mongoose = require('mongoose');

const ticketSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ['Open', 'In Progress', 'Resolved'],
        default: 'Open'
    },
    // Add a reference to the OrderModel
    order: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Order' // Reference to the OrderModel
    }
});

const TicketModel = mongoose.model('Ticket', ticketSchema);

module.exports = TicketModel;
