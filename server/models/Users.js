const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const userSchema = new Schema({
  Name: {
    type: String,
    required: true,
    trim: true,
    ID: true,
  },
 
    email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, 'Must match an email address!'],

  },
 password: {
    type: String,
    required: true,
    minlength: 8,
    superSecure: true,

  },
  
 documents: [
    {
      documentText: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 280,
      },
     
    },
  ],
  
    
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
  },

});

const Users = model('Users', userSchema);



module.exports = Users;
