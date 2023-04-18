const TournamentEvent = require('../models/tournamentEvent.models');

const TournamentEventController = {};

TournamentEventController.search = (req, res, next) => {
  TournamentEvent.find(req.query)
    .then(data => res.json(data))
    .catch(error => res.json(error));
}

TournamentEventController.create = (req, res, next) => {
  TournamentEvent.create(req.body)
    .then(data => res.json(data))
    .catch(error => res.json(error));
}

TournamentEventController.delete = (req, res, next) => {
  TournamentEvent.findOneAndDelete({ "_id": req.params.id })
    .then(data => res.json(data))
    .catch(error => res.json(error));
}

TournamentEventController.update = (req, res, next) => {
  TournamentEvent.findByIdAndUpdate(req.params.id, req.body)
    .then(data => res.json(data))
    .catch(data => res.json({ "error": "something went wrong" }))
}

module.exports = TournamentEventController;



