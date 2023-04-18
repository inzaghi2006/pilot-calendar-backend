const Subscriptions = require('../models/subscription.models');


const SubscriptionsController = {};

SubscriptionsController.search = (req, res, next) => {
  Subscriptions.find(req.query)
    .then(data => res.json(data))
    .catch(error => res.json(error));
}

SubscriptionsController.detail = (req, res, next) => {
  Subscriptions.findOne(req.query)
    .then(data => res.json(data))
    .catch(error => res.json(error));
}

SubscriptionsController.create = (req, res, next) => {
  Subscriptions.create(req.body)
    .then(data => res.json(data))
    .catch(error => res.json(error));
}

SubscriptionsController.delete = (req, res, next) => {
  Subscriptions.findOneAndDelete({ "_id": req.params.id })
    .then(data => res.json({ ...data, 'status': 'ok' }))
    .catch(error => res.json(error));
}

SubscriptionsController.update = (req, res, next) => {
  Subscriptions.findByIdAndUpdate(req.params.id, req.body)
    .then(data => res.json(data))
    .catch(error => res.json(error));
}

SubscriptionsController.deleteAll = (req, res, next) => {
  Subscriptions.deleteMany({})
    .then(data => res.json({ ...data, 'status': 'ok' }))
    .catch(error => res.json(error));
}


module.exports = SubscriptionsController;



