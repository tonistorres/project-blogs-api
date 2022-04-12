const checkPassWord = (req, res, next) => {
try {
    const { password } = req.body;
if (password === undefined) {
return res.status(400).json({ message: '"password" is required' });
}
    
if (password.length < 6) {
    return res.status(400).json({ message: '"password" length must be 6 characters long' });
}
    next();
} catch (erro) {
    console.log(erro.message);
}
};

module.exports = {
    checkPassWord,
};