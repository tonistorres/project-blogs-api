// const User = require('../models');

function validateEmail(email) {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
}

const checkEmail = (req, res, next) => {
    const { email } = req.body;
    const resultValidete = validateEmail(email);
    if (!resultValidete) {
        return res.status(400).json({ message: '"email" must be a valid email' });
    }
    next();
};

module.exports = {
    checkEmail,
};