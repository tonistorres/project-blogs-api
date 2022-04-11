const express = require('express');
const UserController = require('../controller/user.controller');
const { checkEmail } = require('../middleware/middlEmailExist');
const { validateDisplayName } = require('../middleware/middlDisplayName');
const { checkPassWord } = require('../middleware/middlPassWord');

const router = express.Router();

router
.post('/',
 checkEmail,
 checkPassWord,
 validateDisplayName,
 UserController.createUserController);

module.exports = router;