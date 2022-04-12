const jwt = require('jsonwebtoken');
require('dotenv').config();
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

const getUserLoginService = async (user) => {
   try {     
    const SECRET = process.env.JWT_SECRET; 
    const jwtConfig = { expiresIn: '15m', algorithm: 'HS256' };
    const autthorization = await User
    .findOne({ where: { email: user.email, password: user.password } });
    if (!autthorization) {
      return { erro: true, codeNumber: 404, msg: 'User not authorization !!' };
    }
    const { id, email } = autthorization;
    const token = jwt.sign({ idUser: id, emailPrincipal: email }, SECRET, jwtConfig);
    return { token };  
  } catch (error) {
    return { error: 500, message: 'Erro no Servidor' };
  }
};

module.exports = {
  createServiceUser,
  getUserLoginService,
};