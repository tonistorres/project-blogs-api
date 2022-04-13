/** Bem na camada model iremos fazer o mapeamento das nossas entidades no 
 * Banco de Dados bem como elas se realacionam, uma curiosidade muito importante
 * aqui no model é que se nas migrations referenciamos nossas entidades no plural 
 * e aí elas foram criadas no plural aqui no modem referenciamos nossas entidades 
 * no singular. Outra propriedade importante aqui no model é a tableName, pois, ela
 * representa realmente como está descrito sua tabela no banco de Dados e faz 
 * o mapeamento a partir dessa referência
 */

module.exports = (sequelize, DataTypes) => {
const Category = sequelize.define(
      'Category',
      {
        name: DataTypes.STRING,
      },
      {
        timestamps: false,
        tableName: 'Categories',
      },
);
       // 1 (UM) [Usuário] POSSUI muitos POSTS, porém
    // 1 (UM) [POST ]   PERTENCE à 1(UM) USUÁRIO
  Category.associate = (models) => {
    Category.hasMany(models.PostCategory,
      { foreignKey: 'categoryId', as: 'categories' });
    };

    return Category;
  };