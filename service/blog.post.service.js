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

/** Comentándo Linha a linha: Essa funcão tem por funcionalidade buscar 
 * todos os posts cadastrados no Db (blogs_api), por meio de mapeamento 
 * prévio feito na camada model da aplicação por meio do ORM Sequelize
 * Ela é uma função de execução assincrona, pois, irá buscar dados do 
 * banco (MYSQL) onde neste caso irá esperar uma promessa. a função 
 * findAll irá buscar todos os registros contidos na base de dados neste
 * caso na tabela BlogPosts e irá fazer um inner join com a tabela User
 * e Category por meio do atributo model que referencia a tabela e o alias
 * que referencia a associação da tabela.
 */
const getAllServiceBlogPost = async () => {
    const posts = await BlogPost.findAll({
      include: [{
        model: User,
        as: 'user',
        // dentro da tabela User exclua a propriedade password
        attributes: { exclude: ['password'] },
      },

      {
        model: Category,
        as: 'categories',
        // me omita os dados de PostCategory tabela intermediaria 
         through: { attributes: [] }, 
      },   
    
    ],
    });        
    return posts;
  };

/** Comentándo Linha a linha: Essa funcão tem por funcionalidade buscar 
 * 01(UM) post cadastrados no Db (blogs_api), por meio de mapeamento 
 * prévio feito na camada model da aplicação por meio do ORM Sequelize
 * Ela é uma função de execução assincrona, pois, irá buscar dados do 
 * banco (MYSQL) onde neste caso irá esperar uma promessa. a função 
 * findOne irá buscar 01(UM) registro contido na base de dados neste
 * caso na tabela BlogPosts e irá fazer um inner join com a tabela User
 * e Category por meio do atributo model que referencia a tabela e o alias
 * que referencia a associação da tabela. A função ainda recebe uma id por
 * meio de requisição o qual é passado como valor condicional para where para
 * ser feito o filtro do Post a ser buscado.s
 */

  const getByIdBlogPostService = async (requisicao) => {
    const { id } = requisicao;
    const idreq = +id;
    const post = await BlogPost.findOne({ 
      where: { id: idreq },
      
      include: [{
        model: User,
        as: 'user',
        // dentro da tabela User exclua a propriedade password
        attributes: { exclude: ['password'] },
      },

      {
        model: Category,
        as: 'categories',
        // me omita os dados de PostCategory tabela intermediaria 
         through: { attributes: [] }, 
      },   
    
    ],    
    });
    return post; 
  };
  
  module.exports = {
    getAllServiceBlogPost,
    createServiceBlogPost,
    getByIdBlogPostService,
  };