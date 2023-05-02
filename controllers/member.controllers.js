const Member = require('../models/member.models');
const { successResponse, errorResponse } = require('../services/response');

const MemberController = {};

MemberController.search = (req, res, next) => {
  Member.find(req.query)
    .then(data => res.json(successResponse(data)))
    .catch(error => res.json(errorResponse(error)));
}

MemberController.detail = (req, res, next) => {
  Member.findOne(req.query)
    .then(data => res.json(successResponse(data)))
    .catch(error => res.json(errorResponse(error)));
}

MemberController.create = (req, res, next) => {
  Member.create(req.body)
    .then(data => res.json(successResponse(data)))
    .catch(error => res.json(errorResponse(error)));
}

MemberController.delete = (req, res, next) => {
  Member.findOneAndDelete({ "_id": req.params.id })
    .then(data => res.json({ ...data, 'status': 'ok' }))
    .catch(error => res.json(errorResponse(error)));
}

MemberController.update = (req, res, next) => {
  Member.findByIdAndUpdate(req.params.id, req.body)
    .then(data => res.json(successResponse(data)))
    .catch(error => res.json(errorResponse(error)));
}

MemberController.deleteAll = (req, res, next) => {
  Member.deleteMany({})
    .then(data => res.json({ ...data, 'status': 'ok' }))
    .catch(error => res.json(errorResponse(error)));
}


module.exports = MemberController;



