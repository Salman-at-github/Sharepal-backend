const express = require('express');
const { validateTicket } = require('../middleware/validation');
const { createNewTicket, getTickets } = require('../controllers/ticketsController');

const router = express.Router();

router.post("/add", validateTicket, createNewTicket);
router.get('/:id', getTickets);


module.exports = router;