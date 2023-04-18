const express = require('express');
const rootRouter = express.Router();

const memberRouter = require('./member.routes');
const courtRouter = require('./court.routes');
const reservationRouter = require('./reservation.routes');
const schedulerRouter = require('./scheduler.routes');
const reservationTypeRouter = require('./reservation-type.routes');
const subscriptionRouter = require('./subscriptions.routes');

rootRouter.use('/members', memberRouter);
rootRouter.use('/players', memberRouter);
rootRouter.use('/courts', courtRouter);
rootRouter.use('/reservations', reservationRouter);
rootRouter.use('/scheduler', schedulerRouter);
rootRouter.use('/reservation-types', reservationTypeRouter);
rootRouter.use('/subscriptions', subscriptionRouter);


module.exports = rootRouter;