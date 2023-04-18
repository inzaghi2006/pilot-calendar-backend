const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create schema for a post
const TournamentEventEventSchema = new Schema({
  tournament_event_name: {
    type: String,
    required: [true, 'Tournament Event Name is required']
  },


}, {
  timeStamps: true
})

//create model for todo
const TournamentEvent = mongoose.model('tournament-event', TournamentEventEventSchema);

module.exports = TournamentEvent;
