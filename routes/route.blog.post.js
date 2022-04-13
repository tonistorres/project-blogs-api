const express = require('express');
const Authorization = require('../middleware/middlAuthorization');
const BlogPost = require('../controller/blog.post.controller');

const router = express.Router();

router
 .get('/', Authorization,
  BlogPost.getAllBlogPostController);
 
module.exports = router;