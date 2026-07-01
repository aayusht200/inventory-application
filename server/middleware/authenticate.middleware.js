import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
const authanticateUser = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if (token === null) res.status(401).send({ message: 'unauthorized user' });
    try {
        const { email, role, id } = jwt.verify(token, process.env.JWT_SECRET);
        req.user = { id, email, role };
        next();
    } catch (error) {
        return res.status(401).json({ message: 'Invalid token' });
    }
};

export { authanticateUser };
