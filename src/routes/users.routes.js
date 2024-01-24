import { Router } from 'express';
import { createUser, getUsers } from '../controllers/user.controller.js';
import { checkRolesExisted } from '../middlewares/verifySignup.middleware.js';

const router = Router();

router.post('/user', checkRolesExisted, createUser);
router.get('/users', getUsers);

export default router;
