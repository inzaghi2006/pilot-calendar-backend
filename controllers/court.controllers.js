const Court = require('../models/court.models');

const CourtController = {};

CourtController.search = (req, res, next) => {
  Court.find(req.query)
    .then(data => res.json(data))
    .catch(error => res.json(error));
}

CourtController.create = (req, res, next) => {
  Court.create(req.body)
    .then(data => res.json(data))
    .catch(error => res.json(error));
}

CourtController.delete = (req, res, next) => {
  Court.findOneAndDelete({ "_id": req.params.id })
    .then(data => res.json(data))
    .catch(error => res.json(error));
}

CourtController.update = (req, res, next) => {
  Court.findByIdAndUpdate(req.params.id, req.body)
    .then(data => res.json(data))
    .catch(data => res.json({ "error": "something went wrong" }))
}

module.exports = CourtController;



