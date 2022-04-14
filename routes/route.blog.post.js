const express = require('express');
const Authorization = require('../middleware/middlAuthorization');
const MiddleCheck = require('../middleware/blogpost/middlValidationBlogPost');
const BlogPost = require('../controller/blog.post.controller');

const router = express.Router();

router

.post('/',
Authorization,
MiddleCheck.checkBlogPost,
BlogPost.createBlogPostController)

.get('/', Authorization,
BlogPost.getAllBlogPostController)

.get('/:id', Authorization,
BlogPost.getByIdBlogPostController);
 
module.exports = router;