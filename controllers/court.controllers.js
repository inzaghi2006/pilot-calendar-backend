const Court = require('../models/court.models');
const { successResponse, errorResponse } = require('../services/response');

const CourtController = {};

CourtController.search = (req, res, next) => {
  Court.find(req.query)
    .then(data => res.json(successResponse(data)))
    .catch(error => res.json(errorResponse(error)));
}

CourtController.create = (req, res, next) => {
  Court.create(req.body)
    .then(data => res.json(successResponse(data)))
    .catch(error => res.json(errorResponse(error)));
}

CourtController.delete = (req, res, next) => {
  Court.findOneAndDelete({ "_id": req.params.id })
    .then(data => res.json(successResponse(data)))
    .catch(error => res.json(errorResponse(error)));
}

CourtController.update = (req, res, next) => {
  Court.findByIdAndUpdate(req.params.id, req.body)
    .then(data => res.json(successResponse(data)))
    .catch(data => res.json({ "error": "something went wrong" }))
}

module.exports = CourtController;



