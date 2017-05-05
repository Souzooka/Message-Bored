const express = require('express');
const Messages = express.Router();
const { Message } = require('../../models');

Messages.get('/', (req, res) => {
  Message.all().then( (messages) => {
    res.json(messages);
  });
});

module.exports = Messages;