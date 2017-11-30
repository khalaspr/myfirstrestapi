'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var UserSchema = new Schema({
    fname: {
      type: String,
      required: 'Kindly enter the name of the task'
    },
    lname: {
      type: String,
      required: 'Kindly enter the name of the task'
    },
    email: {
      type: String,
      required: 'Kindly enter the name of the task'
    },
    mobile: {
      type: String,
      required: 'Kindly enter the name of the task'
    },
    password: {
      type: String,
      required: 'Kindly enter the name of the task'
    },
    Created_date: {
      type: Date,
      default: Date.now
    },
    gender: {
      type: [{
        type: String,
        enum: ['Male', 'Female']
      }]
    }
  });

module.exports = mongoose.model('Users', UserSchema);