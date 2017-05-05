/*jshint esversion:6*/
// Express init
const express = require('express');
const app = express();

// Middleware
const bodyParser = require('body-parser');

// Environment variables
const db = require('./models');
const PORT = process.env.PORT || 3000;

// Routes
const apiRoutes = require('./api');

// Serve static files from /public
app.use(express.static('/public'));

// parse application/x-www-form-urlencoded
// attach to req.body
app.use(bodyParser.json());

// Use defined routes
app.use('/api', apiRoutes);

// Initialize server
const server = app.listen(PORT, () => {
  db.sequelize.sync({force:true});
});

// For testing
module.exports = server;