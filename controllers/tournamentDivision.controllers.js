const TournamentDivision = require('../models/tournamentDivision.models');

const TournamentDivisionController = {};

TournamentDivisionController.search = (req, res, next) => {
  TournamentDivision.find(req.query)
    .then(data => res.json(data))
    .catch(error => res.json(error));
}

TournamentDivisionController.create = (req, res, next) => {
  TournamentDivision.create(req.body)
    .then(data => res.json(data))
    .catch(error => res.json(error));
}

TournamentDivisionController.delete = (req, res, next) => {
  TournamentDivision.findOneAndDelete({ "_id": req.params.id })
    .then(data => res.json(data))
    .catch(error => res.json(error));
}

TournamentDivisionController.update = (req, res, next) => {
  TournamentDivision.findByIdAndUpdate(req.params.id, req.body)
    .then(data => res.json(data))
    .catch(data => res.json({ "error": "something went wrong" }))
}

module.exports = TournamentDivisionController;



