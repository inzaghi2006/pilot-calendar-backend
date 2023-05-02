const Event = require('../models/event.models');
const { successResponse, errorResponse } = require('../services/response');

const EventController = {};

EventController.search = (req, res, next) => {
  Event.find(req.query)
    .then(data => res.json(successResponse(data)))
    .catch(error => res.json(errorResponse(error)));
}

EventController.create = (req, res, next) => {
  Event.create(req.body)
    .then(data => res.json(successResponse(data)))
    .catch(error => res.json(errorResponse(error)));
}

EventController.delete = (req, res, next) => {
  Event.findOneAndDelete({ "_id": req.params.id })
    .then(data => res.json(successResponse(data)))
    .catch(error => res.json(errorResponse(error)));
}

EventController.update = (req, res, next) => {
  Event.findByIdAndUpdate(req.params.id, req.body)
    .then(data => res.json(successResponse(data)))
    .catch(data => res.json({ "error": "something went wrong" }))
}

module.exports = EventController;



