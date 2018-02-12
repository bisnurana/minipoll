const mongoose = require('mongoose');
const { Schema } = mongoose;
const recipientSchema = new Schema({
    email: { type: String },
    open: { type: Boolean, default: false },
    click: { type: Boolean, default: false },
    urls: [],
    dateActive: { type: Date, default: Date.now }
});
module.exports = recipientSchema;