import express from "express";
import { userController } from "../controllers/index.js";
import { doJwtAuth } from "../middleware/doJwtAuth.js";

const userRouter = express.Router();

userRouter.post("/refreshRouter", doJwtAuth, userController.postRefreshTokenCtrl)


userRouter.post("/login", userController.postLoginUserCtrl);

userRouter.post("/register",userController.postRegisterUserCtrl);



export default userRouter;