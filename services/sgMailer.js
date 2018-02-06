const sgMail = require('@sendgrid/mail');
const { SENDGRIDAPI_KEY } = require('../config/keys');
sgMail.setApiKey(SENDGRIDAPI_KEY);
module.exports = (subject, body, recipients) => {
    const msg = {
        to: recipients,
        from: 'noreply@tailmail.com',
        subject: subject,
        html: `<p>${body}</p>`,
    };
    sgMail.sendMultiple(msg, (error, result) => {
        if (error) {
            console.log('sendgrid error', error);
        }
        else {
            console.log('sendgrid success result', result);
        }
    });
}

