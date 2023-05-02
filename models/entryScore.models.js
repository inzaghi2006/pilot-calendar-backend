const mongoose = require('mongoose');
const DivisionEntry = require('./divisionEntry.models');
const Schema = mongoose.Schema;

//create schema for a post
const EntryScoreSchema = new Schema({


  divisionEntry: {
    type: Schema.Types.ObjectId,
    ref: DivisionEntry,
    required: [true, ' Division Entry is required']
  },


  round: {
    type: Number,
    required: [true, 'Round is required']
  },

  position: {
    type: Number,
    required: [true, 'Position is required']
  },

  set1: {
    type: Number,
    required: [true, 'set1 is required']
  },

  tb1: {
    type: Number,
    required: [true, 'tb1 is required']
  },

  set2: {
    type: Number,
    required: [true, 'set2 is required']
  },

  tb2: {
    type: Number,
    required: [true, 'tb2 is required']
  },

  set3: {
    type: Number,
    required: [true, 'set3 is required']
  },

  tb3: {
    type: Number,
    required: [true, 'tb3 is required']
  },



}, {
  timeStamps: true
})

//create model for todo
const EntryScore = mongoose.model('entry-score', EntryScoreSchema);

module.exports = EntryScore;
