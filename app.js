const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const bodyParser = require('body-parser');
const loggerFile = require('./middlewares/logger');
const dotenv = requiere('dotenv')
const morgan = requiere('morgan')
const cors = required ('cors')

var moviesRouter = require('./routes/movies');4

dotenv

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(loggerFile);
app.use(morgan'')


app.use('/api/movies', moviesRouter);


module.exports = app;