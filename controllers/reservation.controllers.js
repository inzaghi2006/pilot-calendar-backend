const Reservation = require('../models/reservation.models');
const Court = require('../models/court.models');
const Member = require('../models/member.models');
const { successResponse, errorResponse } = require('../services/response');
const ReservationType = require('../models/reservationType.models');
const Subscription = require('../models/subscription.models');
const Sport = require('../models/sport.models');

const ReservationController = {};

ReservationController.search = (req, res, next) => {

  const resourceFileds = (resource) => {
    return { text: resource.name, id: resource._id };
  }

  const sportFileds = (resource) => {
    return { text: resource.name, id: resource._id, color: resource.color };
  }

  Reservation.find(req.query)
    .then(async (reservations) => {
      let courts = await Court.find();//
      courts = courts.map(resourceFileds);
      let players = await Member.find();//
      players = players.map(resourceFileds);
      let reservationTypes = await ReservationType.find();
      reservationTypes = reservationTypes.map(resourceFileds);
      let sports = await Sport.find();
      sports = sports.map(sportFileds);
      let subscriptions = await Subscription.find();
      subscriptions = subscriptions.map(resourceFileds);

      res.json(successResponse({ courts, players, sports, reservationTypes, subscriptions, reservations }))
    });
  //.catch(error => res.json(errorResponse(error)));
}

ReservationController.create = (req, res, next) => {
  Reservation.create(req.body)
    .then(data => res.json(successResponse(data)))
    .catch(error => res.json(errorResponse(error)));
}

ReservationController.delete = (req, res, next) => {
  Reservation.findOneAndDelete({ "_id": req.params.id })
    .then(data => res.json(successResponse(data)))
    .catch(error => res.json(errorResponse(error)));
}

ReservationController.update = (req, res, next) => {
  Reservation.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(data => res.json(successResponse(data)))
    .catch(error => res.json(error))
}

module.exports = ReservationController;



