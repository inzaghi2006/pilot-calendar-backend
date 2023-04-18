const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create schema for a post
const SubscriptionSchema = new Schema({
  subscription_name: {
    type: String,
    required: [true, 'Subscription Name is required']
  },


}, {
  timeStamps: true
})

//create model for todo
const Subscription = mongoose.model('subscriptions', SubscriptionSchema);

module.exports = Subscription;
