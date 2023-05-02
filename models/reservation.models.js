const mongoose = require('mongoose');
const ReservationType = require('./reservationType.models');
const Member = require('./member.models');
const Court = require('./court.models');
const Subscription = require('./subscription.models');
const Sport = require('./sport.models');

const Schema = mongoose.Schema;

//create schema for a post
const ReservationSchema = new Schema({

  title: {
    type: String
  },

  startDate: {
    type: Date,
    required: [true, 'Start Date is required']
  },
  endDate: {
    type: Date,
    required: [true, 'End Date is required']
  },
  court: {
    type: Schema.Types.ObjectId,
    ref: Court,
    required: [true, 'Court is required']
  },
  player: {
    type: Schema.Types.ObjectId,
    ref: Member,
    required: [true, 'Member is required']
  },

  reservationType: {
    type: Schema.Types.ObjectId,
    ref: ReservationType,
    required: [true, 'Reservation Type is required']
  },

  sport: {
    type: Schema.Types.ObjectId,
    ref: Sport,
    required: [true, 'Sport Type is required']
  },

  // subscription: {
  //   type: Schema.Types.ObjectId,
  //   ref: Subscription,
  //   required: [true, 'Subscription is required']
  // },

  allDay: {
    type: Boolean
  },

}, {
  timeStamps: true
})

//create model for todo
const Reservation = mongoose.model('reservation', ReservationSchema);

module.exports = Reservation;
