const emailRegex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
export default (recipients, recipientsCount, credits) => {
    const invalidrecipients = recipients.split(',').map(email => email.trim()).filter(email => emailRegex.test(email) === false)
    if (invalidrecipients.length) {
        return `Some problem with email ${invalidrecipients}`;
    }
    if (recipientsCount > credits) {
        return `Not enough credits for ${recipientsCount} recipient/s`;
    }
    return;
}