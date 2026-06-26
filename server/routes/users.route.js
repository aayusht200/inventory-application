import express from 'express';
import { authanticateUser } from '../middleware/authenticate.middleware.js';
import { generateToken } from '../controller/users.controller.js';
const router = express.Router();

router.post('/login', authanticateUser, generateToken);

export { router };
