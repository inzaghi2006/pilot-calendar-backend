const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create schema for a post
const SportSchema = new Schema({
  sport_name: {
    type: String,
    required: [true, 'Sport Name is required']
  },


}, {
  timeStamps: true
})

//create model for todo
const Sport = mongoose.model('sport', SportSchema);

module.exports = Sport;
