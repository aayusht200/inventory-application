const validateAdmin = (req, res, next) => {
    if (req.user.role !== 'admin') {
        return res.status(403).json({
            message: 'unauthorized access',
        });
    }
    next();
};

export { validateAdmin };
