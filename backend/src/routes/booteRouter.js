import express from "express";
import { bootController } from "../controllers/index.js";
import upload from "../middleware/multerConfig.js";

const booteRouter = express.Router();

booteRouter.get("/", bootController.getAllBootsCtrl);

booteRouter.get("/:bootId", bootController.getBootByIdCtrl);

booteRouter.post("/", upload.any(), bootController.postNewBootCtrl);

booteRouter.patch("/:bootId", bootController.patchBootCtrl);

booteRouter.patch("/:bootId/toggleDone", bootController.patchToggleStatusCtrl);

booteRouter.delete("/:bootId", bootController.deleteOneBootCtrl);

export default booteRouter;