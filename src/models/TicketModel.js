const mongoose = require('mongoose');

const ticketSchema = new mongoose.Schema({
    // Define fields for the Ticket model
    // For example: description, status, etc.
    description: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ['Open', 'In Progress', 'Resolved'],
        default: 'Open'
    },
    // Any other fields relevant to your ticket
});

const TicketModel = mongoose.model('Ticket', ticketSchema);

module.exports = TicketModel;
