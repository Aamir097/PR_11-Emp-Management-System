import { Router } from "express";
import { addTaskPage, addTask, viewTask, deleteTask, updateTask } from "../controllers/task.controller.js";
import userAuth from "../middlewares/userAuth.middleware.js";
import checkUserRole from "../middlewares/userRole.middleware.js";
const taskRouter = Router();

taskRouter.use(userAuth);

taskRouter.get('/addTask',checkUserRole,addTaskPage);
taskRouter.post('/addTask',checkUserRole,addTask);
taskRouter.get('/viewTask',checkUserRole,viewTask);
taskRouter.post('/deleteTask',checkUserRole,deleteTask);
taskRouter.post('/updateTask',checkUserRole,updateTask);

export default taskRouter;