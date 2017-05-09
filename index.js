/*jshint esversion:6*/
// Express init
const express = require('express');
const app = express();
const fs = require('fs');

// Middleware
const bodyParser = require('body-parser');

// Environment variables
const db = require('./models');
const PORT = process.env.PORT || 3000;

// Routes
const apiRoutes = require('./api');

// Serve static files from /public
app.use(express.static('./public'));

// parse req
// attach to req.body
app.use(bodyParser.urlencoded({extended: false}));

// Use defined routes
app.use('/api', apiRoutes);

// Catch any undefined routes and send to angular
app.get('/*', (req, res) => {
  const rs = fs.createReadStream('./public/index.html');
  rs.on('open', () => {
    rs.pipe(res);
  });
  rs.on('error', (err) => {
    res.end(err);
  });
});

// Initialize server
const server = app.listen(PORT, () => {
  db.sequelize.sync();
});

// For testing
module.exports = server;