const checkCategory = (req, res, next) => {
    try {
        const { name } = req.body;
    if (name === undefined) {
    return res.status(400).json({ message: '"name" is required' });
    }
     next();
    } catch (erro) {
        console.log(erro.message);
    }
    };
    
    module.exports = {
        checkCategory,
    };