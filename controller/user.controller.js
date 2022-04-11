const UserService = require('../service/user.service');

const ERRO_SERVIDOR = 'Erro no Servidor';

const createUserController = async (req, res) => {
    try {
      const user = await UserService.createServiceUser(req.body);

      console.log(user);
      
      if (user.erro) {
        return res.status(user.status).json({ message: user.message });  
      }
      return res.status(201).json(user);
    } catch (error) {
      return res.status(500).json({ message: ERRO_SERVIDOR });
    }
  };

  module.exports = {
    createUserController,
  };