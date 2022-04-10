/* vale apenas ressaltar que ao trabalhar com o Sequelize nas migrations 
é boa prática nomearmos as tabelas com letra maiúscula inicialmente
e sempre trabalhar com as entidades no Plural. Nesse Projeto em especial
ficou explícito no readme a nomenclatura das tabelas.
Comentando a enteidade:
id -> que é do tipo Sequelize INTEGER(inteiro), que é uma chave primaria e auto incrementável
displayName -> que é do tip Sequelize STRING, que não permite valor nulo.
email -> que é do tip Sequelize STRING, que não permite valor nulo, e não aceita duplicidade.
password -> que é do tip Sequelize STRING, que não permite valor nulo.
image -> que é do tip Sequelize STRING, que não permite valor nulo.
*/
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Users', {
      id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
      displayName: { type: Sequelize.STRING, allowNull: false },
      email: { type: Sequelize.STRING, allowNull: false, unique: true },
      password: { type: Sequelize.STRING, allowNull: false },
      image: { type: Sequelize.STRING, allowNull: false },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Users');
  },
};