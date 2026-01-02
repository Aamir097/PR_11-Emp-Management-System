import { Router } from "express";
import { createUser, getAllUser, getUser, deleteUser, updateUser, login, logout } from "../controllers/user.controller.js";
const userRouter = Router();

// Create User 
userRouter.post('/',createUser);

// Login 
userRouter.post('/login',login);

userRouter.get('/logout',logout);

// userRouter.use(userAuth);

// Get All User 
userRouter.get('/',getAllUser);

// Get Single User 
userRouter.get('/:id',getUser);

// Delete User 
userRouter.delete('/:id',deleteUser);

// Update User 
userRouter.patch('/:id',updateUser);


export default userRouter;