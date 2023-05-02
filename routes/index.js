const express = require('express');
const rootRouter = express.Router();

const memberRouter = require('./member.routes');
const courtRouter = require('./court.routes');
const reservationRouter = require('./reservation.routes');
const schedulerRouter = require('./scheduler.routes');
const reservationTypeRouter = require('./reservationType.routes');
const subscriptionRouter = require('./subscription.routes');
const subscriptionTypeRouter = require('./subscriptionType.routes');
const sportRouter = require('./sport.routes');
const sportRateRouter = require('./sportRate.routes');
const tournamentRouter = require('./tournament.routes');
const tournamentDivisionRouter = require('./tournamentDivision.routes');
const divisionEntryRouter = require('./divisionEntry.routes');

const eventRouter = require('./event.routes');
const divisionRouter = require('./division.routes');
const ballTypeRouter = require('./ballType.routes');
const entryScoreRouter = require('./entryScore.routes');

rootRouter.use('/members', memberRouter);
rootRouter.use('/players', memberRouter);
rootRouter.use('/courts', courtRouter);
rootRouter.use('/reservations', reservationRouter);
rootRouter.use('/scheduler', schedulerRouter);
rootRouter.use('/reservation-types', reservationTypeRouter);
rootRouter.use('/subscriptions', subscriptionRouter);
rootRouter.use('/subscription-types', subscriptionTypeRouter);
rootRouter.use('/sports', sportRouter);
rootRouter.use('/sport-rates', sportRateRouter);
rootRouter.use('/tournaments', tournamentRouter);
rootRouter.use('/tournament-divisions', tournamentDivisionRouter);
rootRouter.use('/division-entries', divisionEntryRouter);
rootRouter.use('/events', eventRouter);
rootRouter.use('/divisions', divisionRouter);
rootRouter.use('/ball-types', ballTypeRouter);
rootRouter.use('/entry-scores', entryScoreRouter);


module.exports = rootRouter;