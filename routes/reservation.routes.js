const express = require('express');
const router = express.Router();
const ReservationController = require('../controllers/reservation.controllers');

router.route('/')
  .get(ReservationController.search)
  .post(ReservationController.create);

router.route('/:id')
  .delete(ReservationController.delete)
  .put(ReservationController.update);

module.exports = router;
