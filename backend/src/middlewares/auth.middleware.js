const jwt = require('jsonwebtoken');

const JWT_SECRET = process.env.JWT_SECRET || '123456789abcdef';

module.exports =  (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
        return res.status(401).json({ message: 'Token not provided' });
    }
    const token = authHeader.split(' ')[1];
    try {

        const decoded = jwt.verify(token, JWT_SECRET);

        req.user = decoded;
        next();
    } catch (err) {
        return res.status(401).json({ message: 'Invalid token or expired' });
    }       
};

