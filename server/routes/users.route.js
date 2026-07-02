import express from 'express';
import { authenticateUser } from '../middleware/authenticate.middleware.js';
import { login, signupUser, adminCreateUser, getCurrentUser } from '../controller/users.controller.js';
const router = express.Router();

router.get('/getuser', authenticateUser, getCurrentUser);
router.post('/login', login);
router.post('/signup', signupUser);
router.post('/signup-admin', authenticateUser, adminCreateUser);

export { router };
