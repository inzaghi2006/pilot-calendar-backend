const Division = require('../models/division.models');
const { successResponse, errorResponse } = require('../services/response');

const DivisionController = {};

DivisionController.search = (req, res, next) => {
  Division.find(req.query)
    .then(data => res.json(successResponse(data)))
    .catch(error => res.json(errorResponse(error)));
}

DivisionController.create = (req, res, next) => {
  Division.create(req.body)
    .then(data => res.json(successResponse(data)))
    .catch(error => res.json(errorResponse(error)));
}

DivisionController.delete = (req, res, next) => {
  Division.findOneAndDelete({ "_id": req.params.id })
    .then(data => res.json(successResponse(data)))
    .catch(error => res.json(errorResponse(error)));
}

DivisionController.update = (req, res, next) => {
  Division.findByIdAndUpdate(req.params.id, req.body)
    .then(data => res.json(successResponse(data)))
    .catch(data => res.json({ "error": "something went wrong" }))
}

module.exports = DivisionController;



