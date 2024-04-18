const { Payments, Pickups, Transactions } = require('../models');

const resolvers = {
  Query: {
    payments: async () => {
      return Payments.find();
    },
    payment: async (parent, { paymentId }) => {
      return Payments.findOne({ _id: paymentId });
    },
    pickUpDates: async () => {
      return Pickups.find();
    },
    pickUpDate: async (parent, { pickUpDateId }) => {
      return Pickups.findOne({ _id: pickUpDateId });
    },
    transactions: async () => {
      return Transactions.find();
    },
    transaction: async (parent, { transactionId }) => {
      return Transactions.findOne({_id: transactionId });
    },
  },
  Mutation: {
    addPayment: async (parent, { paymentText, paymentAuthor }) => {
      return Payments.create({ paymentText, paymentAuthor });
    },
    addPickUpDate: async (parent, { Date, Time, Location, Notes }) => {
      return Pickups.create({Date, Time, Location, Notes });
    },
    // addPickUpDate: async (parent, { pickUpDateText, pickUpDateAuthor }) => {
    //   return Pickups.create({ pickUpDateText, pickUpDateAuthor });
    // },
    addTransaction: async (parent, { transactionText, transactionAuthor }) => {
      return Transactions.create({ transactionText, transactionAuthor });
    },
    addComment: async (parent, {paymentId, commentText }) => {
      return Payments.findOneAndUpdate(
        {_id: paymentId },
        {
          $addToSet: { comments: { commentText } },
        },
        {
          new: true,
          runValidators: true,
        }
      );
    },
    removePayment: async (parent, { paymentId }) => {
      return Payments.findOneAndDelete({ _id: paymentId });
    },
    removePickUpDate: async (parent, { pickUpDateId }) => {
      return Pickups.findOneAndDelete({ _id: pickUpDateId });
    },
    removeTransaction: async (parent, { transactionId }) => {
      return Transactions.findOneAndDelete({ _id: transactionId });
    },
    removeComment: async (parent, { paymentId, commentId }) => {
      return Payments.findOneAndUpdate(
        { _id: paymentId },
        { $pull: { comments: { _id: commentId }}},
      )
    }
  },
};

module.exports = resolvers;
