const SubscriptionType = require('../models/subscriptionType.models');
const { availableNames, availableCycles } = require('./../common-resources/subscriptionType');
const { successResponse, errorResponse } = require('../services/response');

const SubscriptionTypeController = {};

SubscriptionTypeController.search = (req, res, next) => {
  SubscriptionType.find(req.query)
    .then(data => res.json(successResponse(data)))
    .catch(error => res.json(errorResponse(error)));
}

SubscriptionTypeController.detail = (req, res, next) => {
  SubscriptionType.findOne(req.query)
    .then(data => res.json(successResponse(data)))
    .catch(error => res.json(errorResponse(error)));
}

SubscriptionTypeController.create = (req, res, next) => {

  req.body.name = availableNames.find((el) => el.id === req.body.name);
  req.body.cycle = availableCycles.find((el) => el.id === req.body.cycle);

  SubscriptionType.create(req.body)
    .then(data => res.json(successResponse(data)))
    .catch(error => res.json(errorResponse(error)));
}

SubscriptionTypeController.delete = (req, res, next) => {
  SubscriptionType.findOneAndDelete({ "_id": req.params.id })
    .then(data => res.json({ ...data, 'status': 'ok' }))
    .catch(error => res.json(errorResponse(error)));
}

SubscriptionTypeController.update = (req, res, next) => {

  req.body.name = availableNames.find((el) => el.id === req.body.name);
  req.body.cycle = availableCycles.find((el) => el.id === req.body.cycle);

  SubscriptionType.findByIdAndUpdate(req.params.id, req.body)
    .then(data => res.json(successResponse(data)))
    .catch(error => res.json(errorResponse(error)));
}

SubscriptionTypeController.deleteAll = (req, res, next) => {
  SubscriptionType.deleteMany({})
    .then(data => res.json({ ...data, 'status': 'ok' }))
    .catch(error => res.json(errorResponse(error)));
}


module.exports = SubscriptionTypeController;



