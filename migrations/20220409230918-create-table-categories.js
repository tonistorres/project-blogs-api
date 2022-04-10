/* vale apenas ressaltar que ao trabalhar com o Sequelize nas migrations 
é boa prática nomearmos as tabelas com letra maiúscula inicialmente
e sempre trabalhar com as entidades no Plural. Nesse Projeto em especial
ficou explícito no readme a nomenclatura das tabelas. Uma outra curiosidade
sobre as migrations é que elas criam as tabelas em nosso banco de dados de 
forma automagica depois de estruturadas conforme abaixo demonstrado.
Para esse caso temos uma tabela que nomeamos por Categories contendo os seguintes
campos:
id -> que é do tipo Sequelize INTEGER(inteiro), que é uma chave primaria e auto incrementável
name -> que é do tip Sequelize STRING, que não permite valor nulo.
temos o método up -> para criar a tabela e o undo para reverter o processo 
*/
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Categories', {
      id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
      name: { type: Sequelize.STRING, allowNull: false },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Categories');
  },
};