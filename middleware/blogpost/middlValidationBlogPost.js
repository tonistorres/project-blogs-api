const checkBlogPost = (req, res, next) => {
    try {
        const { title, content, categoryIds } = req.body;
    if (title === undefined) {
    return res.status(400).json({ message: '"title" is required' });
    }
    if (content === undefined) {
    return res.status(400).json({ message: '"content" is required' });
    }
    if (categoryIds === undefined) {
    return res.status(400).json({ message: '"categoryIds" is required' });
    }
     next();
    } catch (erro) {
    console.log(erro.message);
    }
    };
    
    module.exports = {
        checkBlogPost,
    };