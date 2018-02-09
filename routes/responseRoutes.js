const mongoose = require('mongoose');
const sgMail = require('@sendgrid/mail');
const checkLogin = require('../middlewares/checkLogin');
const checkCredit = require('../middlewares/checkCredit');
const { SENDGRIDAPI_KEY } = require('../config/keys');
const Email = mongoose.model('email');
sgMail.setApiKey(SENDGRIDAPI_KEY);
module.exports = (app) => {
    app.post('/api/response', checkLogin, checkCredit, async (req, res) => {
        const { title, subject, body, recipients } = req.body;
        const newEmail = new Email({
            title, subject, body, recipients: recipients.split(',').map(email => ({ email: email.trim() })),
            dateSent: Date.now(),
            _user: req.user.id
        });
        const formattedRecipients = recipients.split(',').map(recipient => recipient.trim());
        const msg = {
            to: formattedRecipients,
            from: 'noreply@tailmail.com',
            subject: subject,
            html: `<p>${body}</p>`,
        };
        try {
            await sgMail.sendMultiple(msg);
            await newEmail.save();
            req.user.credits -= 1;
            const user = await req.user.save();
            res.send(user);
        } catch (error) {
            res.status(422).send(err);
        }


    })
    app.post('/api/response/webhooks', (req, res) => {
        console.log(req.body);
    })

}
