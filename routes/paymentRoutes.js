const keys = require('../config/keys');
const stripe = require('stripe')(keys.STRIPE_SK);
const checkLogin = require('../middlewares/checkLogin');

module.exports = (app) => {
  app.post('/api/stripe', checkLogin, async (req, res) => {
    const charge = await stripe.charges.create({
      amount: 500,
      currency: 'usd',
      source: req.body.id,
      description: 'Charge for 5 credits',
    });
    req.user.credits += 5;
    const user = await req.user.save();
    res.send(user);
  });
};
