const BallType = require('../models/ballType.models');
const { successResponse, errorResponse } = require('../services/response');

const BallTypeController = {};

BallTypeController.search = (req, res, next) => {
  BallType.find(req.query)
    .then(data => res.json(successResponse(data)))
    .catch(error => res.json(errorResponse(error)));
}

BallTypeController.create = (req, res, next) => {
  BallType.create(req.body)
    .then(data => res.json(successResponse(data)))
    .catch(error => res.json(errorResponse(error)));
}

BallTypeController.delete = (req, res, next) => {
  BallType.findOneAndDelete({ "_id": req.params.id })
    .then(data => res.json(successResponse(data)))
    .catch(error => res.json(errorResponse(error)));
}

BallTypeController.update = (req, res, next) => {
  BallType.findByIdAndUpdate(req.params.id, req.body)
    .then(data => res.json(successResponse(data)))
    .catch(data => res.json({ "error": "something went wrong" }))
}

module.exports = BallTypeController;



