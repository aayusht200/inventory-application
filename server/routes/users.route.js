import express from 'express';
import { authanticateUser } from '../middleware/authenticate.middleware.js';
import { login } from '../controller/users.controller.js';
const router = express.Router();

router.post('/login', authanticateUser, login);

export { router };
