const { getAll, create, getOne, remove, update } = require('../controllers/degree.controllers');
const express = require('express');

const routerDegree = express.Router();

routerDegree.route('/')
    .get(getAll)
    .post(create);

routerDegree.route('/:id')
    .get(getOne)
    .delete(remove)
    .put(update);

module.exports = routerDegree;