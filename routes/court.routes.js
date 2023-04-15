const express = require('express');
const router = express.Router();
const CourtController = require('../controllers/court.controllers');

router.route('/')
  .get(CourtController.search)
  .post(CourtController.create);

router.route('/:id')
  .delete(CourtController.delete)
  .put(CourtController.update);

module.exports = router;
