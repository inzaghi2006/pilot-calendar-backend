const SportRate = require('../models/sportRate.models');

const SportRateController = {};

SportRateController.search = (req, res, next) => {
  SportRate.find(req.query)
    .then(data => res.json(data))
    .catch(error => res.json(error));
}

SportRateController.create = (req, res, next) => {
  SportRate.create(req.body)
    .then(data => res.json(data))
    .catch(error => res.json(error));
}

SportRateController.delete = (req, res, next) => {
  SportRate.findOneAndDelete({ "_id": req.params.id })
    .then(data => res.json(data))
    .catch(error => res.json(error));
}

SportRateController.update = (req, res, next) => {
  SportRate.findByIdAndUpdate(req.params.id, req.body)
    .then(data => res.json(data))
    .catch(data => res.json({ "error": "something went wrong" }))
}

module.exports = SportRateController;



