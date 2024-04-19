const mongoose = require('mongoose');

mongoose.connect(
  process.env.MONGODB_URI || 'mongodb+srv://liebg08:T.fB5qD$6Y4c3q2@demodatabase.bkfmvfg.mongodb.net/?retryWrites=true&w=majority&appName=demoDatabase'
);

module.exports = mongoose.connection;
