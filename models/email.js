const mongoose = require('mongoose');
const { Schema } = mongoose;
const recipient = require('./recepient')

const emailSchema = new Schema({
    title: { type: String },
    subject: { type: String },
    body: { type: String, required: true },
    dateSent: Date,
    recipients: [recipient],
    _user: { type: Schema.Types.ObjectId, ref: 'user' }
});
module.exports = mongoose.model('email', emailSchema);