const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create schema for a post
const DivisionPlayerSchema = new Schema({
  division_player_name: {
    type: String,
    required: [true, ' Division Player Name is required']
  },


}, {
  timeStamps: true
})

//create model for todo
const DivisionPlayer = mongoose.model('division-player', DivisionPlayerSchema);

module.exports = DivisionPlayer;
