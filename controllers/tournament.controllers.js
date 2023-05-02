const Tournament = require('../models/tournament.models');
const Sport = require('../models/sport.models');
const { successResponse, errorResponse } = require('../services/response');

const TournamentController = {};

TournamentController.search = (req, res, next) => {
  Tournament.find(req.query).populate('sport')
    .then(data => res.json(successResponse(data)))
    .catch(error => { throw new Error(error) });
}

TournamentController.create = (req, res, next) => {
  Tournament.create(req.body)
    .then(data => res.json(successResponse(data)))
    .catch(error => res.json(errorResponse(error)));
}

TournamentController.delete = (req, res, next) => {
  Tournament.findOneAndDelete({ "_id": req.params.id })
    .then(data => res.json(successResponse(data)))
    .catch(error => res.json(errorResponse(error)));
}

TournamentController.update = (req, res, next) => {
  Tournament.findByIdAndUpdate(req.params.id, req.body)
    .then(data => res.json(successResponse(data)))
    .catch(data => res.json({ "error": "something went wrong" }))
}

module.exports = TournamentController;



