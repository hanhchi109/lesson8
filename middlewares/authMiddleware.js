import jwt from 'jsonwebtoken';
const SECRET_KEY = 'my_secret_key_uwu';

const authenticate = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader.split(' ')[1];
    if (!token) {
        return res.status(401).json({ message: 'No token provided' });
    }
    jwt.verify(token, SECRET_KEY, (err, decoded) => {
        if (err) {
            return res.status(401).json({ message: 'Invalid token' });
        }
        req.username = decoded;
        next();
    });
};

export default authenticate;