require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
// uncomment when you have set-up your own routes
// const setupRoutes = require('./routes');

const app = express();

const { SERVER_PORT } = process.env;

app.use(express.json());
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.set('x-powered-by', false);

// uncomment when you have set-up your own routes
// setupRoutes(app)

// dont forget to complete your own env file https://www.twilio.com/blog/working-with-environment-variables-in-node-js-html

const server = app.listen(SERVER_PORT || 3000, () => {
  SERVER_PORT
    ? console.log(`Server running on the port ${SERVER_PORT}`)
    : console.log(`Server running on the port ${3000}`);
});

module.exports = server;
