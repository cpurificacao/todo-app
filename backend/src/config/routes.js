const express = require('express');

function routes(app) {
  const router = express.Router();

  app.use('/api', router);

  const todoService = require('../api/todo/service');
  todoService.register(router, '/todos');
}

module.exports = routes;
