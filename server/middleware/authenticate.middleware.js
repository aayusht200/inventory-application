import jwt from 'jsonwebtoken';


const authanticateUser = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if (token === null) res.status(401).send({ message: 'unauthorized user' });
    console.log(authHeader);
    console.log(token);
    next();
};

export { authanticateUser };