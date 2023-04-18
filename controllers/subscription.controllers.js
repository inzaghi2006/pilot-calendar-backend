const MemberSubscription = require('../models/subscription.models');


const MemberSubscriptionController = {};

MemberSubscriptionController.search = (req, res, next) => {
  MemberSubscription.find(req.query)
    .then(data => res.json(data))
    .catch(next);
}

MemberSubscriptionController.detail = (req, res, next) => {
  MemberSubscription.findOne(req.query)
    .then(data => res.json(data))
    .catch(error => res.json(error));
}

MemberSubscriptionController.create = (req, res, next) => {
  MemberSubscription.create(req.body)
    .then(data => res.json(data))
    .catch(error => res.json(error));
}

MemberSubscriptionController.delete = (req, res, next) => {
  MemberSubscription.findOneAndDelete({ "_id": req.params.id })
    .then(data => res.json({ ...data, 'status': 'ok' }))
    .catch(error => res.json(error));
}

MemberSubscriptionController.update = (req, res, next) => {
  MemberSubscription.findByIdAndUpdate(req.params.id, req.body)
    .then(data => res.json(data))
    .catch(error => res.json(error));
}

MemberSubscriptionController.deleteAll = (req, res, next) => {
  MemberSubscription.deleteMany({})
    .then(data => res.json({ ...data, 'status': 'ok' }))
    .catch(error => res.json(error));
}


module.exports = MemberSubscriptionController;



