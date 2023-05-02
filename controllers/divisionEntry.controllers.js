const DivisionEntry = require('../models/divisionEntry.models');
const { successResponse, errorResponse } = require('../services/response');

const DivisionEntryController = {};

DivisionEntryController.search = (req, res, next) => {
  DivisionEntry.find(req.query)
    .populate('tournamentDivision')
    .populate('player')
    .then(data => res.json(successResponse(data)))
    .catch(error => res.json(errorResponse(error)));
}

DivisionEntryController.create = (req, res, next) => {
  DivisionEntry.create(req.body)
    .then(data => res.json(successResponse(data)))
    .catch(error => res.json(errorResponse(error)));
}

DivisionEntryController.delete = (req, res, next) => {
  DivisionEntry.findOneAndDelete({ "_id": req.params.id })
    .then(data => res.json(successResponse(data)))
    .catch(error => res.json(errorResponse(error)));
}

DivisionEntryController.update = (req, res, next) => {
  DivisionEntry.findByIdAndUpdate(req.params.id, req.body)
    .then(data => res.json(successResponse(data)))
    .catch(data => res.json({ "error": "something went wrong" }))
}

module.exports = DivisionEntryController;



