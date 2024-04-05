// TicketController.js
const { createTicket, fetchTickets } = require("../services/ticketService");

const createNewTicket = async (req, res) => {
    try {
        const { order, description } = req.body;
        await createTicket(order, description);
        res.status(201).json({ message: "Ticket raised successfully" });
    } catch (error) {
        console.error('Error creating ticket:', error);
        return res.status(500).json({ error: 'Internal server error' });
    }
}

const getTickets = async (req, res) => {
    const { id } = req.params;
    try {
        const tickets = await fetchTickets(id);
        return res.status(200).json({ data: tickets });
    } catch (error) {
        console.error('Error fetching tickets:', error);
        return res.status(500).json({ error: 'Internal server error' });
    }
}

module.exports = { createNewTicket, getTickets };
