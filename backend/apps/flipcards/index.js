const express = require('express');
const router = require('./routes/flipcardRoutes');

const app = express();
app.use(express.json());
app.use('/', router);

module.exports = app;
