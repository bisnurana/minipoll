const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const userSchema = new Schema({
  googleID: { type: String, required: true },
  credits: { type: Number, default: 5 },

});
module.exports = mongoose.model('user', userSchema);

