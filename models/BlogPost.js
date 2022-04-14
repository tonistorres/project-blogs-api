  /** Bem na camada model iremos fazer o mapeamento das nossas entidades no 
 * Banco de Dados bem como elas se realacionam, uma curiosidade muito importante
 * aqui no model é que se nas migrations referenciamos nossas entidades no plural 
 * e aí elas foram criadas no plural aqui no modem referenciamos nossas entidades 
 * no singular. Outra propriedade importante aqui no model é a tableName, pois, ela
 * representa realmente como está descrito sua tabela no banco de Dados e faz 
 * o mapeamento a partir dessa referência
 *    hasOne (tem um)
      belongsTo (pertence a)
      hasMany (tem muitos)
      belongsToMany (pertence a muitos)
 */
      module.exports = (sequelize, DataTypes) => {
        const BlogPost = sequelize.define('BlogPost', {
            // id: { type: DataTypes.INTEGER, primaryKey: true },
            title: DataTypes.STRING,
            content: DataTypes.STRING,
            published: { type: DataTypes.DATE, field: 'published' },
            updated: { type: DataTypes.DATE, field: 'updated' },  
            userId: { type: DataTypes.INTEGER },
          },
          { timestamps: false, tableName: 'BlogPosts' });
    
        // 1 (UM) [Usuário] POSSUI muitos POSTS, porém
        // 1 (UM) [POST ]   PERTENCE à 1(UM) USUÁRIO
        BlogPost.associate = (models) => {
          BlogPost.belongsTo(models.User, {
            foreignKey: 'userId',
            as: 'user',
          });
        };  
        return BlogPost;  
      };