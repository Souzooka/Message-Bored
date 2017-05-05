const express = require('express');
const Topics = express.Router();
const { Topic } = require('../../models');

Topics.get('/', (req, res) => {
  Topic.all().then( (topics) => {
    res.json(topics);
  });
});

module.exports = Topics;