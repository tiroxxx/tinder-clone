const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  name: String,
  img: String,
});

module.exports = mongoose.model('users', userSchema);
