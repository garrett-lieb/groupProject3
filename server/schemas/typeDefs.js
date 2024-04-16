const typeDefs = `
  type Query {
    payments: [Payment]
    payment(paymentId: ID!): Payment
    pickUpDates: [PickUpDate]
    pickUpDate(pickUpDateId: ID!): PickUpDate
    transactions: [Transaction]
    transaction(transactionId: ID!): Transaction
  }
  type Mutation {
    addPayment(paymentAmount: Float!, paymentType: String!): Payment
    addPickUpDate(pickUpDate: String!): PickUpDate
    addTransaction(transaction: String!, quantitySold: Int!, transactionTotal: Float!, paymentType: String!): Transaction
    addpayment(paymentId: ID!, paymentText: String!): Payment
    removePayment(paymentId: ID!): Payment
    removePickUpDate(pickUpDateId: ID!): PickUpDate
    removeTransaction(transactionId: ID!): Transaction
    addComment(paymentId: ID!, commentText: String!): Payment
    removeComment(paymentId: ID!, commentId: ID!): Payment
  }
  type Payment {
    _id: ID
    paymentAmount: Float
    paymentType: String
    createdAt: String
    payments: [Payment]
  }
  type PickUpDate {
    _id: ID
    pickUpDate: String
  }
  type Transaction {
    _id: ID
    transaction: String
    quantitySold: Int
    transactionTotal: Float
    paymentType: String
    createdAt: String
    payments: [Payment]
  }
`;

module.exports = typeDefs;
