import { Router } from 'express';

const router = Router();

import { createUsers, getUsers, getUser, updateUsers, deleteUser } from '../controller/user.controller';

router.get('/users', getUsers);

router.get('/users/:id', getUser);

router.post('/users', createUsers);

router.put('/users/:id', updateUsers);

router.delete('/users/:id', deleteUser);


export default router;