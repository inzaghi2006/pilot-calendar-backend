const DivisionPlayer = require('../models/divisionPlayer.models');

const DivisionPlayerController = {};

DivisionPlayerController.search = (req, res, next) => {
  DivisionPlayer.find(req.query)
    .then(data => res.json(data))
    .catch(error => res.json(error));
}

DivisionPlayerController.create = (req, res, next) => {
  DivisionPlayer.create(req.body)
    .then(data => res.json(data))
    .catch(error => res.json(error));
}

DivisionPlayerController.delete = (req, res, next) => {
  DivisionPlayer.findOneAndDelete({ "_id": req.params.id })
    .then(data => res.json(data))
    .catch(error => res.json(error));
}

DivisionPlayerController.update = (req, res, next) => {
  DivisionPlayer.findByIdAndUpdate(req.params.id, req.body)
    .then(data => res.json(data))
    .catch(data => res.json({ "error": "something went wrong" }))
}

module.exports = DivisionPlayerController;



