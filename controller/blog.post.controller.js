const BlogPostService = require('../service/blog.post.service');

const ERRO_SERVIDOR = 'Erro no Servidor';

const getAllBlogPostController = async (_req, res) => {
  try {
    const blogPosts = await BlogPostService.getAllServiceBlogPost();
    return res.status(200).send(blogPosts);
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ message: ERRO_SERVIDOR });
  }
};

module.exports = {
    getAllBlogPostController,
};