const express = require('express');
const router = express.Router();
const Controller = require('../controllers/member.controllers');

router.route('/')
  .get(Controller.search)
  .post(Controller.create);

router.route('/:id')
  .get(Controller.detail)
  .delete(Controller.delete)
  .put(Controller.update);

module.exports = router;
