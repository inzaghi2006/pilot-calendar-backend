const Tournament = require('../models/tournament.models');

const TournamentController = {};

TournamentController.search = (req, res, next) => {
  Tournament.find(req.query)
    .then(data => res.json(data))
    .catch(error => res.json(error));
}

TournamentController.create = (req, res, next) => {
  Tournament.create(req.body)
    .then(data => res.json(data))
    .catch(error => res.json(error));
}

TournamentController.delete = (req, res, next) => {
  Tournament.findOneAndDelete({ "_id": req.params.id })
    .then(data => res.json(data))
    .catch(error => res.json(error));
}

TournamentController.update = (req, res, next) => {
  Tournament.findByIdAndUpdate(req.params.id, req.body)
    .then(data => res.json(data))
    .catch(data => res.json({ "error": "something went wrong" }))
}

module.exports = TournamentController;



