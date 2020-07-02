import { Router } from 'express';
import me from '../actions/user';

const userRoutes = Router();

userRoutes.get('/me', me);

export default userRoutes;
