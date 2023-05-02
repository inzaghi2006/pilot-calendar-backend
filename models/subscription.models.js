const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create schema for a post
const SubscriptionSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Subscription Name is required']
  },


}, {
  timeStamps: true
})

//create model for todo
const Subscription = mongoose.model('subscription', SubscriptionSchema);

module.exports = Subscription;
