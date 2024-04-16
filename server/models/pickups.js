const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const pickupsSchema = new Schema({
    Date: {
        type: Date,
        required: true,
        default: Date.now,
        get: (timestamp) => dateFormat(timestamp),
    },
    Time: {
        type: String,
        required: true,
        trim: true,
    },
    Location: {
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
     
    },
  ],
});

const Pickups = model('Pickups', picukpsSchema);

module.exports = Pickups;
