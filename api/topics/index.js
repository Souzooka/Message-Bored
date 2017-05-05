const express = require('express');
const Topics = express.Router();
const { Topic } = require('../../models');

Topics.get('/', (req, res) => {
  Topic.all().then( (topics) => {
    res.json(topics);
  });
});

Topics.post('/', (req, res) => {
  Topic.create({
    name: req.body.name,
    created_by: req.body.created_by
  })
  .then( (topic) => {
    res.json(topic);
  })
  .catch( (err) => {
    res.json(err);
  });
});

Topics.put('/:name', (req, res) => {
  Topic.update({
    name: req.params.name
  }, {
    where: {
      name: req.body.name,
    }
  })
  .then( (topic) => {
    res.json(topic);
  })
  .catch( (err) => {
    res.json(err);
  });
});

module.exports = Topics;