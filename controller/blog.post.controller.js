const BlogPostService = require('../service/blog.post.service');

const ERRO_SERVIDOR = 'Erro no Servidor';

const getAllBlogPostController = async (req, res) => {
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

const getByIdBlogPostController = async (req, res) => {
  try {
    const user = await BlogPostService.getByIdBlogPostService(req.params);
    if (!user) {
    return res.status(404).json({ message: 'Post does not exist' });
    }
    return res.status(200).json(user);
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ message: ERRO_SERVIDOR });
  }
};

const createBlogPostController = async (req, res) => {
  try {
    const postInfo = await BlogPostService.createServiceBlogPost(req.body, req.user.idUser);
    if (postInfo.erro) {
     return res.status(postInfo.code).json({ message: postInfo.message });
    }
    return res.status(201).json(postInfo);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: ERRO_SERVIDOR });
  }
};

module.exports = {
    getAllBlogPostController,
    createBlogPostController,
    getByIdBlogPostController,
};