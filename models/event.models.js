const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create schema for a post
const EventSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Event Name is required']
  },


}, {
  timeStamps: true
})

//create model for todo
const Event = mongoose.model('event', EventSchema);

module.exports = Event;
