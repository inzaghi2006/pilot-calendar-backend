const ReservationType = require('../models/reservationType.models');
const { successResponse, errorResponse } = require('../services/response');

const ReservationTypeController = {};

ReservationTypeController.search = (req, res, next) => {
  ReservationType.find(req.query)
    .then(data => res.json(successResponse(data)))
    .catch(error => res.json(errorResponse(error)));
}

ReservationTypeController.create = (req, res, next) => {
  ReservationType.create(req.body)
    .then(data => res.json(successResponse(data)))
    .catch(error => res.json(errorResponse(error)));
}

ReservationTypeController.delete = (req, res, next) => {
  ReservationType.findOneAndDelete({ "_id": req.params.id })
    .then(data => res.json(successResponse(data)))
    .catch(error => res.json(errorResponse(error)));
}

ReservationTypeController.update = (req, res, next) => {
  ReservationType.findByIdAndUpdate(req.params.id, req.body)
    .then(data => res.json(successResponse(data)))
    .catch(data => res.json({ "error": "something went wrong" }))
}

module.exports = ReservationTypeController;



