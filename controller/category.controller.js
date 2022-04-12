const CategoryService = require('../service/category.service');

const ERRO_SERVIDOR = 'Erro no Servidor';

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
  };