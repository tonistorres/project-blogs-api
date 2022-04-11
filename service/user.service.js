const { User } = require('../models');

const createServiceUser = async (user) => {
       try {
       const created = await User.create(user);    
       return created;      
    } catch (error) {
      return { error: 500, message: 'Erro no Servidor' };
    }
  };

  module.exports = { 
    createServiceUser,
};