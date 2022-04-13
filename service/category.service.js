const { Category } = require('../models');

const getAllServiceCategory = async () => {
  const categories = await Category.findAll();        
  return categories;
};

const createServiceCategory = async (category) => {
    try {
    const created = await Category.create(category);    
    return created;      
 } catch (error) {
   return { error: 500, message: 'Erro no Servidor' };
 }
};

module.exports = {
createServiceCategory,
getAllServiceCategory,

};