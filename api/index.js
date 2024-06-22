const express = require('express');
const serverless = require('serverless-http');
const app = express();

// Import your routes
const authRoutes = require('../server/routes/User');
const courseRoutes = require('../server/routes/Course');
// Add other routes as needed

// Middleware
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/courses', courseRoutes);
// Add other routes as needed

module.exports = app;
module.exports.handler = serverless(app);
