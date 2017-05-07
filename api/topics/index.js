/*jshint esversion:6*/
const express = require('express');
const Topics = express.Router();
const { Topic, User } = require('../../models');

Topics.get('/', (req, res) => {
  Topic.all({
    include: [
      {
        model: User,
        as: 'Creator'
      }
    ]
  })
  .then( (topics) => {
    res.json(topics);
  });
});

Topics.get('/:id', (req, res) => {
  Topic.find({
    where: {
      id: req.params.id,
    },
    include: [
      {
        model: User,
        as: 'Creator'
      }
    ]
  })
  .then( (topic) => {
    res.json(topic);
  });
});

Topics.post('/', (req, res) => {
  Topic.create({
    created_by: req.body.created_by,
    name: req.body.name,
  })
  .then( (topic) => {
    res.json(topic);
  })
  .catch( (err) => {
    res.json(err);
  });
});

Topics.put('/:id', (req, res) => {
  Topic.update({
    name: req.body.name
  }, {
    where: {
      id: req.params.id,
    }
  })
  .then( (topic) => {
    return Topic.find( {
      where: {
        id: req.params.id
      }
    });
  })
  .then( (topic) => {
    res.json(topic);
  })
  .catch( (err) => {
    res.json(err);
  });
});

module.exports = Topics;