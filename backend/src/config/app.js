const {
  HOST,
  PORT
} = process.env;

const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const cors = require('./cors');

app.use(cors);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(PORT, HOST, () => console.log(`BACK-END is running on port ${PORT}...`));

module.exports = app;
