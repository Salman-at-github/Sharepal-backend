// TicketService.js
const TicketModel = require("../models/TicketModel");

const createTicket = async (orderId, description) => {
    try {
        const newTicket = new TicketModel({
            order: orderId,
            description: description
        });
        await newTicket.save();
    } catch (error) {
        throw error;
    }
};

const fetchTickets = async (id) => {
    try {
        const tickets = await TicketModel.find({ order: id });
        return tickets;
    } catch (error) {
        throw error;
    }
}

module.exports = { createTicket, fetchTickets };
