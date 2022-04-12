const express = require('express');
const CategoryController = require('../controller/category.controller');
const Authorization = require('../middleware/middlAuthorization');
const MiddlewareCheck = require('../middleware/category/middlCaategoryValidate');

const router = express.Router();

router
 .post('/', Authorization,
 MiddlewareCheck.checkCategory,
 CategoryController.createCategoryController);

module.exports = router;