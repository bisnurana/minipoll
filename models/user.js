const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const userSchema = new Schema({
  googleID: { type: String, required: true, unique: true },

});
module.exports = mongoose.model('user', userSchema);

