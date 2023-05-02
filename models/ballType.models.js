const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create schema for a post
const BallTypeSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Name is required']
  },


}, {
  timeStamps: true
})

//create model for todo
const BallType = mongoose.model('ball-type', BallTypeSchema);

module.exports = BallType;
