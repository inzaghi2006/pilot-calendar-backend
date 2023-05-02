const mongoose = require('mongoose');
const Tournament = require('./tournament.models');
const Division = require('./division.models');
const Event = require('./event.models');
const BallType = require('./ballType.models');
const Schema = mongoose.Schema;

//create schema for a post
const TournamentDivisionSchema = new Schema({

  name: {
    type: String,
    required: [true, 'Name is required']
  },

  tournament: {
    type: Schema.Types.ObjectId,
    ref: Tournament,
    required: [true, 'Tournament is required']
  },
  division: {
    type: Schema.Types.ObjectId,
    ref: Division,
    required: [true, 'Divsion is required']
  },

  eventType: {
    type: Schema.Types.ObjectId,
    ref: Event,
    required: [true, 'Event type is required']
  },

  ballType: {
    type: Schema.Types.ObjectId,
    ref: BallType,
    required: [true, 'Ball type is required']
  },

  maxEntries: {
    type: Number,
    required: [true, 'Tournament max entries is required']
  },

  postedEntryFee: {
    type: Number,
    required: [true, 'Tournament postedEntryFee is required']
  },


}, {
  timeStamps: true
})

//create model for todo
const TournamentDivision = mongoose.model('tournament-division', TournamentDivisionSchema);

module.exports = TournamentDivision;
