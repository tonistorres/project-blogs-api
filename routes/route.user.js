const express = require('express');
const UserController = require('../controller/user.controller');
const { checkEmail } = require('../middleware/middlEmailExist');
const { validateDisplayName } = require('../middleware/middlDisplayName');
const { checkPassWord } = require('../middleware/middlPassWord');
const Authorization = require('../middleware/middlAuthorization');

const router = express.Router();

router

.get('/', Authorization, UserController.getAllUserController)
.get('/:id', Authorization, UserController.getByIdUserController)

.post('/',
 checkEmail,
 checkPassWord,
 validateDisplayName,
 UserController.createUserController);

module.exports = router;