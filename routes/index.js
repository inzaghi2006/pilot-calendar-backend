var express = require('express');
var rootRouter = express.Router();

var memberRouter = require('./member.routes');
var courtRouter = require('./court.routes');
var reservationRouter = require('./reservation.routes');
var schedulerRouter = require('./scheduler.routes');

rootRouter.use('/members', memberRouter);
rootRouter.use('/courts', courtRouter);
rootRouter.use('/reservations', reservationRouter);
rootRouter.use('/scheduler', schedulerRouter);

module.exports = rootRouter;