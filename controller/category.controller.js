const CategoryService = require('../service/category.service');

const ERRO_SERVIDOR = 'Erro no Servidor';

const getAllCategoryController = async (_req, res) => {
  try {
    const categories = await CategoryService.getAllServiceCategory();
    return res.status(200).send(categories);
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ message: ERRO_SERVIDOR });
  }
};

const createCategoryController = async (req, res) => {
    try {
      const category = await CategoryService.createServiceCategory(req.body);
      return res.status(201).json(category);
    } catch (error) {
      return res.status(500).json({ message: ERRO_SERVIDOR });
    }
  };

  module.exports = {
  createCategoryController,
  getAllCategoryController,
  };