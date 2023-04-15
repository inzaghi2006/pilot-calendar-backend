const express = require('express');
const router = express.Router();
const SchedulerController = require('../controllers/scheduler.controllers');

router.route('/loadData')
  .get(SchedulerController.loadData);

module.exports = router;
