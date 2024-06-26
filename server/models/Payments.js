const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const paymentSchema = new Schema({
  paymentAmount: {
    type: Number,
    float: true,
    required: true,
    id: true,
  },
  paymentType: {
    type: String,
    required: true,
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
  },
  comments: [
    {
      commentText: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 280,
      },
      createdAt: {
        type: Date,
        default: Date.now,
        get: (timestamp) => dateFormat(timestamp),
      },
    },
  ],
});

const Payments = model('Payments', paymentSchema);

module.exports = Payments;
