/*jshint esversion:6*/
const express = require('express');
const db = require('../../models');
const Messages = express.Router();
const { Message } = require('../../models');

Messages.get('/latest', (req, res) => {
  Message.all({
    include: [{
      model: db.Topic,
      attributes: ['name']
    }],
    limit: 10,
    order: '"createdAt" DESC',
  })
  .then( (messages) => {
    res.json(messages);
  });
});

Messages.get('/by-topic/:topic_id', (req, res) => {
  Message.all({
    include: [{
      model: db.Topic,
      attributes: ['name']
    }, {
      model: db.User,
      as: 'Author',
      attributes: ['name'],
    }],
    order: '"createdAt" ASC',
    where: {
      topic_id: req.params.topic_id
    }
  })
  .then( (messages) => {
    res.json(messages);
  });
});

Messages.post('/', (req, res) => {
  Message.create({
    author_id: req.body.author_id,
    body: req.body.body,
    topic_id: req.body.topic_id
  })
  .then( (message) => {
    res.json(message);
  })
  .catch( (err) => {
    res.json(err);
  });
});


module.exports = Messages;