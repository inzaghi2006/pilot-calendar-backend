const Reservation = require('../models/reservation.models');

const ReservationController = {};

ReservationController.search = (req, res, next) => {
  Reservation.find(req.query)
    .then(data => res.json(data))
    .catch(next);
}

ReservationController.create = (req, res, next) => {
  Reservation.create(req.body)
    .then(data => res.json(data))
    .catch(error => res.json(error));
}

ReservationController.delete = (req, res, next) => {
  Reservation.findOneAndDelete({ "_id": req.params.id })
    .then(data => res.json(data))
    .catch(error => res.json(error));
}

ReservationController.update = (req, res, next) => {
  Reservation.findByIdAndUpdate(req.params.id, req.body)
    .then(data => res.json(data))
    .catch(data => res.json({ "error": "something went wrong" }))
}

module.exports = ReservationController;



