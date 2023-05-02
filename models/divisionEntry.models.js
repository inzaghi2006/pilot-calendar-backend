const mongoose = require('mongoose');
const TournamentDivision = require('./tournamentDivision.models');
const Member = require('./member.models');
const Schema = mongoose.Schema;

//create schema for a post
const DivisionEntrySchema = new Schema({

  name: {
    type: String,
    required: [true, 'Name is required']
  },

  tournamentDivision: {
    type: Schema.Types.ObjectId,
    ref: TournamentDivision,
    required: [true, ' Tournament Division is required']
  },

  player: {
    type: Schema.Types.ObjectId,
    ref: Member,
    required: [true, ' Player is required']
  },

  seed: {
    type: String,
    required: [true, 'Seed is required']
  },

  entryFee: {
    type: Number,
    required: [true, 'entryFee is required']
  },

  entryFeePaid: {
    type: Number,
    required: [true, 'entryFeePaid is required']
  },

  datePaid: {
    type: Date,
    required: [true, 'datePaid is required']
  },

  reference: {
    type: String,
    required: [true, 'Reference is required']
  },

}, {
  timeStamps: true
})

//create model for todo
const DivisionEntry = mongoose.model('division-entry', DivisionEntrySchema);

module.exports = DivisionEntry;
