const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create schema for a post
const TournamentDivisionSchema = new Schema({
  tournament_division_name: {
    type: String,
    required: [true, 'Tournament Division Name is required']
  },


}, {
  timeStamps: true
})

//create model for todo
const TournamentDivision = mongoose.model('tournament-division', TournamentDivisionSchema);

module.exports = TournamentDivision;
