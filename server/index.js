const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');
const router = require('./routes/router');
const keys = require('./config/keys');

const app = express();

mongoose.connect(keys.mongoURI);

app.use(morgan('combined'));
app.use(bodyParser.json({ type: '*/*' }));

router(app);

const port = process.env.PORT || 3090;
const server = http.createServer(app);
server.listen(port);
