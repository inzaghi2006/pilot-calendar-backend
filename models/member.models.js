const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create schema for a post
const MemberSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Player Name is required']
  },
  cell: {
    type: String,
    required: [true, 'Player cell is required']
  },
  pin: {
    type: String,
    required: [true, 'Player pin is required']
  },
  email: {
    type: String,
    required: [true, 'Player Email is required']
  },
  dob: {
    type: String,
    required: [true, 'Player dob is required']
  },
  billingName: {
    type: String,
    required: [true, 'Player billingName is required']
  },
  billingZip: {
    type: String,
    required: [true, 'Player billingZip is required']
  },
  billingCCNumber: {
    type: String,
    required: [true, 'Player billingCCNumber is required']
  },
  billingExpDate: {
    type: String,
    required: [true, 'Player billingexpdate is required']
  },
  billingCode: {
    type: String,
    required: [true, 'Player billingcode is required']
  },
  emergencyContactName: {
    type: String,
    required: false
  },
  emergencyContactCell: {
    type: String,
    required: false
  }


}, {
  timeStamps: true
})

//create model for todo
const Member = mongoose.model('member', MemberSchema);

module.exports = Member;
