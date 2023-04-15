const express = require('express');
const router = express.Router();
const MemberController = require('../controllers/member.controllers');

router.route('/')
  .get(MemberController.search)
  .post(MemberController.create);

router.route('/:id')
  .get(MemberController.detail)
  .delete(MemberController.delete)
  .put(MemberController.update);

module.exports = router;
