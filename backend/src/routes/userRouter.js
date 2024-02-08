import express from "express";
import { userController } from "../controllers/index.js";

const userRouter = express.Router();

userRouter.post("/register",userController.postRegisterUserCtrl);


export default userRouter;