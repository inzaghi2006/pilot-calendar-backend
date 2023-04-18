const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create schema for a post
const SubscriptionTypeSchema = new Schema({
  subscription_type_name: {
    type: String,
    required: [true, 'Subscription Type Name is required']
  },


}, {
  timeStamps: true
})

//create model for todo
const SubscriptionType = mongoose.model('subscription-types', SubscriptionTypeSchema);

module.exports = SubscriptionType;
