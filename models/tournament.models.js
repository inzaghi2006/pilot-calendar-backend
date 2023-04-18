const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create schema for a post
const SportSchema = new Schema({
  tournament_name: {
    type: String,
    required: [true, 'Tournament Name is required']
  },


}, {
  timeStamps: true
})

//create model for todo
const Tournament = mongoose.model('tournament', SportSchema);

module.exports = Tournament;
