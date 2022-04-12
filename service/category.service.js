const { Category } = require('../models');

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
};