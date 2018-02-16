module.exports = (req, res, next) => {
    const { recipients } = req.body;
    const emailsCount = recipients.split(',').length;
    if (req.user.credits < emailsCount) {
        return res.status(403).send({ error: 'Not enough credits' })
    }
    next();
}