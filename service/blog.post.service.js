const { BlogPost, User, Category } = require('../models');

const createServiceBlogPost = async (posts, idUser) => {
const { title, content, categoryIds } = posts;
const results = await Category.findAll({
  where: { id: [...categoryIds] },
});
const filter = results.map((item) => item.dataValues.id);
// https://stackoverflow.com/questions/7837456/how-to-compare-arrays-in-javascript
if (JSON.stringify(categoryIds) === JSON.stringify(filter)) {
  const post = await BlogPost.create({ userId: idUser, title, content });
  return post.dataValues;
}
return { erro: true, code: 400, message: '"categoryIds" not found' };
};

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
    createServiceBlogPost,
  };