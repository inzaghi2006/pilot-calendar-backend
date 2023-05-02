const TournamentDivision = require('../models/tournamentDivision.models');
const { successResponse, errorResponse } = require('../services/response');

const TournamentDivisionController = {};

TournamentDivisionController.search = (req, res, next) => {
  TournamentDivision.find(req.query)
    .populate('tournament')
    .populate('division')
    .populate('eventType')
    .populate('ballType')
    .then(data => res.json(successResponse(data)))
    .catch(error => res.json(errorResponse(error)));
}

TournamentDivisionController.create = (req, res, next) => {

  TournamentDivision.create(req.body)
    .then(data => res.json(successResponse(data)))
    .catch(error => res.json(errorResponse(error)));
}

TournamentDivisionController.delete = (req, res, next) => {
  TournamentDivision.findOneAndDelete({ "_id": req.params.id })
    .then(data => res.json(successResponse(data)))
    .catch(error => res.json(errorResponse(error)));
}

TournamentDivisionController.update = (req, res, next) => {
  TournamentDivision.findByIdAndUpdate(req.params.id, req.body)
    .then(data => res.json(successResponse(data)))
    .catch(data => res.json({ "error": "something went wrong" }))
}

module.exports = TournamentDivisionController;



