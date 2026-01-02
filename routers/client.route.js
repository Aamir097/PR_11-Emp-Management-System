import { Router } from "express";
import { addManagerPage, dashboard, addManager, deleteManager, updateManager, viewManager, loginPage, login } from "../controllers/client.controller.js";
import userAuth from "../middlewares/userAuth.middleware.js";

const clientRouter = Router();

clientRouter.get('/login',loginPage);
clientRouter.post('/login',login);

clientRouter.use(userAuth);

clientRouter.get('/',dashboard);
clientRouter.get('/addManager',addManagerPage);
clientRouter.post('/addManager',addManager);
clientRouter.get('/viewManager',viewManager);
clientRouter.get('/delete/:id',deleteManager);
clientRouter.get('/update/:id',updateManager);

export default clientRouter;