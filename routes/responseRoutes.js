const mongoose = require('mongoose');
const checkLogin = require('../middlewares/checkLogin');
const checkCredit = require('../middlewares/checkCredit');
const Email = mongoose.model('email');
const Mailer = require('../services/sgMailer');
module.exports = (app) => {
    app.post('/api/response', checkLogin, checkCredit, (req, res) => {
        const { title, subject, body, recipients } = req.body;

        const newEmail = new Email({
            title, subject, body, recipients: recipients.map(email => ({ email: email.trim() })),
            dateSent: Date.now(),
            _user: req.user.id
        });
        Mailer(subject, body, recipients);
    })

}
