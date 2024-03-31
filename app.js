const express = require('express');
const app = express();
const expressConfig = require('./src/config/expressConfig');
const errorHandler = require('./src/middleware/errorHandler');
const connectToDatabase = require('./src/config/db');
const ordersRoute = require('./src/routes/ordersRoute')

// Apply middleware configurations
expressConfig(app);

// Connect to the database
connectToDatabase('main');


// Define routes
app.use('/api/v1/orders', ordersRoute);

// Global error handling middleware
app.use(errorHandler);

module.exports = app;
