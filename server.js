const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const passport = require('passport');
const cookieSession = require('cookie-session');
const { COOKIE_KEYS } = require('./config/keys');
require('./models/user');
require('./services/passport');
const { MONGODB_URL } = require('./config/keys');

const app = express();
app.use(cookieSession({
  maxAge: 30 * 24 * 60 * 60 * 1000,
  keys: [COOKIE_KEYS],
}));
app.use(passport.initialize());
app.use(passport.session());
// connect to mongo database
mongoose.connect(MONGODB_URL);
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

// routes
require('./routes/authRoutes')(app);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running at port ${PORT}`));
