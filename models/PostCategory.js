  /** Bem na camada model iremos fazer o mapeamento das nossas entidades no 
 * Banco de Dados bem como elas se realacionam, uma curiosidade muito importante
 * aqui no model é que se nas migrations referenciamos nossas entidades no plural 
 * e aí elas foram criadas no plural aqui no modem referenciamos nossas entidades 
 * no singular. Outra propriedade importante aqui no model é a tableName, pois, ela
 * representa realmente como está descrito sua tabela no banco de Dados e faz 
 * o mapeamento a partir dessa referência
 *  hasOne (tem um)
      belongsTo (pertence a)
      hasMany (tem muitos)
      belongsToMany (pertence a muitos) 
 */
module.exports = (sequelize, _DataTypes) => {
  const PostCategory = sequelize.define('PostCategory', {},
    { timestamps: false, tableName: 'PostsCategories' });

    PostCategory.associate = (models) => {
      // 1(UM) Category PERTENCE A MUITOS PostCategory
      models.Category.belongsToMany(models.BlogPost, {
        as: 'BlogPosts',
        through: PostCategory,
        foreignKey: 'categoryId',
        otherKey: 'postId',
      });
      // 1(UM) BlogPost PERTENCE A MUITOS PostCategory
      models.BlogPost.belongsToMany(models.Category, {
        as: 'categories',
        through: PostCategory,
        foreignKey: 'postId',
        otherKey: 'categoryId',
      });
    };
    return PostCategory;
};