const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  description: {
    type: String,
    required: true
  },
  done: {
    type: Boolean,
    default: false
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = schema;
