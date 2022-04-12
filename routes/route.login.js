const express = require('express');
const UserController = require('../controller/user.controller');
const MiddlewareCheck = require('../middleware/middlValidLogin');

const router = express.Router();

router
 .post('/',
  MiddlewareCheck.checkEmailLogin,
  MiddlewareCheck.checkPassWordlLogin,
  UserController.getUserLoginController);

module.exports = router;