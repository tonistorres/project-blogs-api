const { User } = require('../models');

const checkEmailLogin = async (req, res, next) => {
    const { email } = req.body;
    if (email === undefined) {
        return res.status(400).json({ message: '"email" is required' });
    }
    if (email.length < 1) {
        return res.status(400).json({ message: '"email" is not allowed to be empty' });
    }

    const user = await User.findOne({ where: { email } });

    if (!user) {
        return res.status(400).json({ message: 'Invalid fields' });
    }

    next();
};

const checkPassWordlLogin = async (req, res, next) => {
    const { password } = req.body;
    if (password === undefined) {
        return res.status(400).json({ message: '"password" is required' });
    }

    if (password.length < 1) {
        return res.status(400).json({ message: '"password" is not allowed to be empty' });
    }
    next();
};

module.exports = {
checkEmailLogin,
checkPassWordlLogin,
};