const cors = require('cors');
const express = require('express');

const expressConfig = (app) => {
  const frontendDomains = process.env.ALLOWED_HOSTS
    ? process.env.ALLOWED_HOSTS.split(',')
    : ['http://localhost:3000'];

  const corsOptions = {
    origin: (origin, callback) => {
      if (!origin || frontendDomains.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
  };

  app.use(cors(corsOptions));
  app.use(express.json()); // Parse JSON bodies
  app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies
};

module.exports = expressConfig;
