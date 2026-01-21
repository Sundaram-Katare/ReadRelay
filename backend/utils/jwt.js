const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();

const generateToken = async (userId) => {
    try {
        const token = jwt.sign({ id: userId }, process.env.JWT_SECRET, { expiresIn: '7d' });
        return token;
    } catch (error) {
        throw new Error('Token generation failed');
    }
};

module.exports = { generateToken };