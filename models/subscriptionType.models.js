const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const typeSchema = new Schema({
  id: {
    type: String,
    required: true
  },
  label: {
    type: String,
    required: true
  },

});

const cycleSchema = new Schema({
  id: {
    type: String,
    required: true
  },
  label: {
    type: String,
    required: true
  },



});

//create schema for a post
const SubscriptionTypeSchema = new Schema({
  name: {
    type: typeSchema,
    required: [true, 'Name is required']
  },

  cycle: {
    type: cycleSchema,
    required: [true, 'Cycle is required']
  },

  rate: {
    type: Number,
    required: [true, 'Rate is required']
  }


}, {
  timeStamps: true
})

//create model for todo
const SubscriptionType = mongoose.model('subscription-type', SubscriptionTypeSchema);

module.exports = SubscriptionType;
