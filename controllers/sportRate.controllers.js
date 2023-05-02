const SportRate = require('../models/sportRate.models');
const { successResponse, errorResponse } = require('../services/response');

const SportRateController = {};

SportRateController.search = (req, res, next) => {
  SportRate.find(req.query)
    .then(data => res.json(successResponse(data)))
    .catch(error => res.json(errorResponse(error)));
}

SportRateController.create = (req, res, next) => {
  SportRate.create(req.body)
    .then(data => res.json(successResponse(data)))
    .catch(error => res.json(errorResponse(error)));
}

SportRateController.delete = (req, res, next) => {
  SportRate.findOneAndDelete({ "_id": req.params.id })
    .then(data => res.json(successResponse(data)))
    .catch(error => res.json(errorResponse(error)));
}

SportRateController.update = (req, res, next) => {
  SportRate.findByIdAndUpdate(req.params.id, req.body)
    .then(data => res.json(successResponse(data)))
    .catch(data => res.json({ "error": "something went wrong" }))
}

module.exports = SportRateController;



