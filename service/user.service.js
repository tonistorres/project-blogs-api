const jwt = require('jsonwebtoken');
require('dotenv').config();
const { User } = require('../models');

const getAllServiceUser = async () => {
  const users = await User.findAll();        
  return users;
};

const getByIdUserService = async (requisicao) => {
  const { id } = requisicao;
  const idreq = +id;
  const user = await User.findOne({ where: { id: idreq } });
  return user; 
};

const createServiceUser = async (user) => {
       try {
       const created = await User.create(user);    
       return created;      
    } catch (error) {
      return { error: 500, message: 'Erro no Servidor' };
    }
  };

const getUserLoginService = async (user) => {
   try {     
    const SECRET = process.env.JWT_SECRET; 
    const jwtConfig = { expiresIn: '2h', algorithm: 'HS256' };
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
  getAllServiceUser,
  getByIdUserService,
};