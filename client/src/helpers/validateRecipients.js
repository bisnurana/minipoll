const emailRegex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
export default (recipients) => {
    const invalidrecipients = recipients.split(',').map(email => email.trim()).filter(email => emailRegex.test(email) === false)
    if (invalidrecipients.length) {
        return `Some problem with email ${invalidrecipients}`;
    }
    return;
}