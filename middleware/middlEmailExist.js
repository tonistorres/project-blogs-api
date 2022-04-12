const { User } = require('../models');

function validateEmail(email) {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
}
const checkEmail = async (req, res, next) => {
    const { email } = req.body;
    if (email === undefined) {
        return res.status(400).json({ message: '"email" is required' });
    }
    const user = await User.findOne({ where: { email } });
      
    if (user) {
        return res.status(409).json({ message: 'User already registered' });
    }
    const resultValidete = validateEmail(email);
    if (!resultValidete) {
        return res.status(400).json({ message: '"email" must be a valid email' });
    }
    next();
};

module.exports = {
    checkEmail,
};