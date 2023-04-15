const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create schema for a post
const CourtSchema = new Schema({
  court_name: {
    type: String,
    required: [true, 'Court Name is required']
  },


}, {
  timeStamps: true
})

//create model for todo
const Court = mongoose.model('court', CourtSchema);

module.exports = Court;
