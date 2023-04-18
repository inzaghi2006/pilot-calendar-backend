const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create schema for a post
const ReservationTypeSchema = new Schema({
  reservation_type_name: {
    type: String,
    required: [true, 'Resevation Type Name is required']
  },


}, {
  timeStamps: true
})

//create model for todo
const ReservationType = mongoose.model('reservation-type', ReservationTypeSchema);

module.exports = ReservationType;
