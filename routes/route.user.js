const express = require('express');
const UserController = require('../controller/user.controller');
const { checkEmail } = require('../middleware/middlEmailExist');
const { validateDisplayName } = require('../middleware/middlDisplayName');

const router = express.Router();

router
.post('/',
 checkEmail,
 validateDisplayName,
 UserController.createUserController);

module.exports = router;