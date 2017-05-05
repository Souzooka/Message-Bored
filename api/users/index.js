/*jshint esversion:6*/
const express = require('express');
const Users = express.Router();
const { User } = require('../../models');

Users.get('/', (req, res) => {
  User.all().then( (users) => {
    res.json(users);
  });
});

Users.get('/:id', (req, res) => {
  User.findOne({
    where: {
      id: req.params.id
    }
  }).then( (user) => {
    res.json(user);
  });
});

Users.post('/', (req, res) => {
  User.create({
    name: req.body.name
  })
  .then( (user) => {
    res.json(user);
  })
  .catch( (err) => {
    res.json(err);
  });
});

module.exports = Users;