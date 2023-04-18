const SubscriptionType = require('../models/subscriptionType.models');


const SubscriptionTypeController = {};

SubscriptionTypeController.search = (req, res, next) => {
  SubscriptionType.find(req.query)
    .then(data => res.json(data))
    .catch(error => res.json(error));
}

SubscriptionTypeController.detail = (req, res, next) => {
  SubscriptionType.findOne(req.query)
    .then(data => res.json(data))
    .catch(error => res.json(error));
}

SubscriptionTypeController.create = (req, res, next) => {
  SubscriptionType.create(req.body)
    .then(data => res.json(data))
    .catch(error => res.json(error));
}

SubscriptionTypeController.delete = (req, res, next) => {
  SubscriptionType.findOneAndDelete({ "_id": req.params.id })
    .then(data => res.json({ ...data, 'status': 'ok' }))
    .catch(error => res.json(error));
}

SubscriptionTypeController.update = (req, res, next) => {
  SubscriptionType.findByIdAndUpdate(req.params.id, req.body)
    .then(data => res.json(data))
    .catch(error => res.json(error));
}

SubscriptionTypeController.deleteAll = (req, res, next) => {
  SubscriptionType.deleteMany({})
    .then(data => res.json({ ...data, 'status': 'ok' }))
    .catch(error => res.json(error));
}


module.exports = SubscriptionTypeController;



