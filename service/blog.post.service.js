const { BlogPost, User, Category } = require('../models');

const getAllServiceBlogPost = async () => {
    const posts = await BlogPost.findAll({
      include: [{
        model: User,
        as: 'user',
        attributes: { exclude: ['password'] },
      },

      {
        model: Category,
        as: 'categories',
        // me omita os dados de PostCategory
         through: { attributes: [] }, 
      },   
    
    ],
    });        
    return posts;
  };

  module.exports = {
    getAllServiceBlogPost,
  };