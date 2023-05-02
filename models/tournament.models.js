const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Sport = require('./sport.models');

//create schema for a post
const TournamentSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Tournament Name is required']
  },
  description: {
    type: String,
    required: [true, 'Tournament description is required']
  },
  director: {
    type: String,
    required: [true, 'Tournament director is required']
  },
  cell: {
    type: String,
    required: [true, 'Tournament cell is required']
  },
  email: {
    type: String,
    required: [true, 'Tournament email is required']
  },
  startDate: {
    type: Date,
    required: [true, 'Tournament start date is required']
  },
  endDate: {
    type: Date,
    required: [true, 'Tournament end date is required']
  },

  sport: {
    type: Schema.Types.ObjectId,
    ref: Sport,
    required: [true, 'Sport is required']
  },

  broadcastDate: {
    type: Date,
    required: [true, 'Tournament broadcastDate  is required']
  },
  openRegDate: {
    type: Date,
    required: [true, 'Tournament openRegDate is required']
  },
  closeRegDate: {
    type: Date,
    required: [true, 'Tournament closeRegDate is required']
  },



}, {
  timeStamps: true
})

//create model for todo
const Tournament = mongoose.model('tournament', TournamentSchema);

module.exports = Tournament;
