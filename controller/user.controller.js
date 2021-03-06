const UserService = require('../service/user.service');

const ERRO_SERVIDOR = 'Erro no Servidor';

const getAllUserController = async (_req, res) => {
  try {
    const users = await UserService.getAllServiceUser();
    return res.status(200).send(users);
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ message: ERRO_SERVIDOR });
  }
};

const getByIdUserController = async (req, res) => {
  try {
    const user = await UserService.getByIdUserService(req.params);
    if (!user) {
    return res.status(404).json({ message: 'User does not exist' });
    }
    return res.status(200).json(user);
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ message: ERRO_SERVIDOR });
  }
};

const createUserController = async (req, res) => {
    try {
      const user = await UserService.createServiceUser(req.body);
      if (user.erro) {
        return res.status(user.status).json({ message: user.message });  
      }
      return res.status(201).json(user);
    } catch (error) {
      return res.status(500).json({ message: ERRO_SERVIDOR });
    }
  };

const getUserLoginController = async (req, res) => {
  try {
    const user = await UserService.getUserLoginService(req.body);
    if (user.erro) {
      return res
      .status(user.codeNumber)
      .json({ menssagem: user.msg });  
    }
    return res.status(200).json(user);
      } catch (error) {
    return res.status(500).json({ message: ERRO_SERVIDOR });
  }
};

  module.exports = {
    createUserController,
    getUserLoginController,
    getAllUserController,
    getByIdUserController,
  };