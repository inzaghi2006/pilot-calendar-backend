const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create schema for a post
const SportRateSchema = new Schema({
  sport_rate_name: {
    type: String,
    required: [true, 'Sport Rate Name is required']
  },


}, {
  timeStamps: true
})

//create model for todo
const SportRate = mongoose.model('sport-rate', SportRateSchema);

module.exports = SportRate;
