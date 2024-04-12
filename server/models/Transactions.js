const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const transactionSchema = new Schema({
  transaction: {
    type: Image,
    required: true,
    id: true,
  },
  quantitySold: {
    type: int,
    required: true,
   
  },
  transactionTotal: {
    type: float,
    required: true,
    _id: true,
  },
  
  paymentType: {
    type: String,
    required: true,
    trim: true,
    _id: true,
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
     
    },
  ],
});

const Transactions = model('Transactions', transactionSchema);

module.exports = Transactions;
