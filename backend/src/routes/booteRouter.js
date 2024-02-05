import express from "express";
import { bootController } from "../controllers/index.js";

const booteRouter= express.Router();

booteRouter.get("/", bootController.getAllBootsCtrl);

booteRouter.get("/:bootId", bootController.getBootByIdCtrl);

booteRouter.post("/", bootController.postNewBootCtrl)

export default booteRouter;