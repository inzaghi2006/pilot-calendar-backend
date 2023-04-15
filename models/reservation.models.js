const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create schema for a post
const ReservationSchema = new Schema({
  id: {
    type: Number
  },
  startDate: {
    type: String,
    required: [true, 'Start Date is required']
  },
  endDate: {
    type: String,
    required: [true, 'End Date is required']
  },
  courtId: {
    type: String
  },
  playerId: {
    type: String
  },
  allDay: {
    type: Boolean
  },
  player_name: {
    type: String
  },



}, {
  timeStamps: true
})

//create model for todo
const Reservation = mongoose.model('reservation', ReservationSchema);

module.exports = Reservation;
