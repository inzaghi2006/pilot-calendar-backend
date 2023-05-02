const EntryScore = require('../models/entryScore.models');
const { successResponse, errorResponse } = require('../services/response');

const EntryScoreController = {};

EntryScoreController.search = (req, res, next) => {
  EntryScore.find(req.query)
    .populate('divisionEntry')
    .then(data => res.json(successResponse(data)))
    .catch(error => res.json(errorResponse(error)));
}

EntryScoreController.create = (req, res, next) => {
  EntryScore.create(req.body)
    .then(data => res.json(successResponse(data)))
    .catch(error => res.json(errorResponse(error)));
}

EntryScoreController.delete = (req, res, next) => {
  EntryScore.findOneAndDelete({ "_id": req.params.id })
    .then(data => res.json(successResponse(data)))
    .catch(error => res.json(errorResponse(error)));
}

EntryScoreController.update = (req, res, next) => {
  EntryScore.findByIdAndUpdate(req.params.id, req.body)
    .then(data => res.json(successResponse(data)))
    .catch(data => res.json({ "error": "something went wrong" }))
}

module.exports = EntryScoreController;



