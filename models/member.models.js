const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create schema for a post
const MemberSchema = new Schema({
  player_name: {
    type: String,
    required: [true, 'Player Name is required']
  },


}, {
  timeStamps: true
})

//create model for todo
const Member = mongoose.model('member', MemberSchema);

module.exports = Member;
