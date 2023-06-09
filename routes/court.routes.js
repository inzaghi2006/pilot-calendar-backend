const express = require('express');
const router = express.Router();
const Controller = require('../controllers/court.controllers');

router.route('/')
  .get(Controller.search)
  .post(Controller.create);

router.route('/:id')
  .delete(Controller.delete)
  .put(Controller.update);

module.exports = router;
