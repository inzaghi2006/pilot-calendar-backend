const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create schema for a post
const DivisionSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Name is required']
  },


}, {
  timeStamps: true
})

//create model for todo
const Division = mongoose.model('division', DivisionSchema);

module.exports = Division;
