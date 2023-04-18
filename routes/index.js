const express = require('express');
const rootRouter = express.Router();

const memberRouter = require('./member.routes');
const courtRouter = require('./court.routes');
const reservationRouter = require('./reservation.routes');
const schedulerRouter = require('./scheduler.routes');
const reservationTypeRouter = require('./reservationType.routes');
const subscriptionRouter = require('./subscription.routes');
const subscriptionTypeRouter = require('./subscriptionType.routes');

rootRouter.use('/members', memberRouter);
rootRouter.use('/players', memberRouter);
rootRouter.use('/courts', courtRouter);
rootRouter.use('/reservations', reservationRouter);
rootRouter.use('/scheduler', schedulerRouter);
rootRouter.use('/reservation-types', reservationTypeRouter);
rootRouter.use('/subscriptions', subscriptionRouter);
rootRouter.use('/subscription-types', subscriptionTypeRouter);


module.exports = rootRouter;