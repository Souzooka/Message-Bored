/*jshint esversion:6*/
const express = require('express');
const Messages = express.Router();
const { Message, User, Topic } = require('../../models');
const LATEST_LIMIT = 10;

Messages.get('/latest', (req, res) => {
  Message.all({
     include: [
      {
        model: User,
        as: 'Author'
      },
      {
        model: Topic,
        as: 'Topic'
      }
    ],
    limit: LATEST_LIMIT,
    order: [
      ['updatedAt', 'DESC']
    ]
  })
  .then( (messages) => {
    res.json(messages);
  });
});

Messages.get('/by-topic/:topic_id', (req, res) => {
  Message.all({
    include: [
      {
        model: Topic,
        as: 'Topic'
      }, {
        model: User,
        as: 'Author',
      }
    ],
    order: [
      ['createdAt', 'ASC']
    ],
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