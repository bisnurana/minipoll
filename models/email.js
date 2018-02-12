const mongoose = require('mongoose');
const { Schema } = mongoose;
const recipient = require('./recepient');

const emailSchema = new Schema({
    title: { type: String },
    subject: { type: String },
    body: { type: String, required: true },
    draft: { type: Boolean, default: false },
    dateSent: { type: Date, default: Date.now },
    recipients: [recipient],
    recipientsCount: { type: Number, default: 0 },
    open: { type: Number, default: 0 },
    click: { type: Number, default: 0 },
    _user: { type: Schema.Types.ObjectId, ref: 'user' }
});
module.exports = mongoose.model('email', emailSchema);