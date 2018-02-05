const mongoose = require('mongoose');
const { Schema } = mongoose;
const recipientSchema = new Schema({
    email: { type: String },
    open: { type: Boolean, default: false },
    clicked: { type: Boolean, default: false }
});
module.exports = recipientSchema;