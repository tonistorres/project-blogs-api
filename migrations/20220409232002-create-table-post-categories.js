/* vale apenas ressaltar que ao trabalhar com o Sequelize nas migrations 
é boa prática nomearmos as tabelas com letra maiúscula inicialmente
e sempre trabalhar com as entidades no Plural. Nesse Projeto em especial
ficou explícito no readme a nomenclatura das tabelas.
Essa entidade nasceu a partir de um relacionamento de N:N daí ela tem 
embebida na sua estrutura duas chaves estrangeiras que fazer referência
a duas tabelas distintas (BlogPosts e Categories)
*/
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('PostsCategories', {
      postId: {
         type: Sequelize.INTEGER,
        references: {
          model: 'User',
          key: 'id',
        },
        onDelete: 'CASCADE',
        primaryKey:true,
      },
      categoryId: { 
        type: Sequelize.INTEGER,
        references: {
          model: 'Category',
          key: 'id',
        },
        onDelete: 'CASCADE',
        primaryKey:true,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('PostsCategories');
  },
};