/* vale apenas ressaltar que ao trabalhar com o Sequelize nas migrations 
é boa prática nomearmos as tabelas com letra maiúscula inicialmente
e sempre trabalhar com as entidades no Plural. Nesse Projeto em especial
ficou explícito no readme a nomenclatura das tabelas.
Comentando a enteidade:
id -> que é do tipo Sequelize INTEGER(inteiro), que é uma chave primaria e auto incrementável
title -> que é do tip Sequelize STRING, que não permite valor nulo.
content -> que é do tip Sequelize STRING, que não permite valor nulo.
*/
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(
      'BlogPosts',
      {
        id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
        title: { type: Sequelize.STRING, allowNull: false },
        content: { type: Sequelize.STRING, allowNull: false },
        published: { allowNull: false, type: Sequelize.DATE, defaultValue: new Date() },
        updated: { allowNull: false, type: Sequelize.DATE, defaultValue: new Date() },
/** Essa entidade possui um userID que é uma chave estrangeira que ser relaciona com 
 *  o campo id da tabela Useres ela é do tipo Sequelize Integer, não ceita valor nulo 
 *  e faz referecia a entidade Users mais especificamente com o campo id
 */
     userId: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: { model: 'User', key: 'id' },
        },
      },
      {
        timestamps: true,
        createdAt: 'published',
        updatedAt: 'updated',
      }
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('BlogPosts');
  },
};