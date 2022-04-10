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
      postId: { type: Sequelize.INTEGER, primaryKey: true,
        references: {
          model: 'BlogPosts',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      categoryId: { type: Sequelize.INTEGER, primaryKey: true,
        references: {
          model: 'Categories',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('PostsCategories');
  },
};