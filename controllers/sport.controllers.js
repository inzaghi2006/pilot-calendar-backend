const Sport = require('../models/sport.models');
const { successResponse, errorResponse } = require('../services/response');

const SportController = {};

SportController.search = (req, res, next) => {
  Sport.find(req.query)
    .then(data => res.json(successResponse(data)))
    .catch(error => res.json(errorResponse(error)));
}

SportController.create = (req, res, next) => {
  Sport.create(req.body)
    .then(data => res.json(successResponse(data)))
    .catch(error => res.json(errorResponse(error)));
}

SportController.delete = (req, res, next) => {
  Sport.findOneAndDelete({ "_id": req.params.id })
    .then(data => res.json(successResponse(data)))
    .catch(error => res.json(errorResponse(error)));
}

SportController.update = (req, res, next) => {
  Sport.findByIdAndUpdate(req.params.id, req.body)
    .then(data => res.json(successResponse(data)))
    .catch(data => res.json({ "error": "something went wrong" }))
}

module.exports = SportController;



