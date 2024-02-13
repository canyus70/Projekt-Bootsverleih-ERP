import express from "express";
import { bootController } from "../controllers/index.js";
import upload from "../middleware/multerConfig.js";
import { doJwtAuth } from "../middleware/doJwtAuth.js";

const booteRouter = express.Router();

booteRouter.get("/", bootController.getAllBootsCtrl);

booteRouter.get("/:bootId", bootController.getBootByIdCtrl);

booteRouter.post(
  "/",doJwtAuth,
  upload.single("upload_img"),
  bootController.postNewBootCtrl
);

booteRouter.patch("/:bootId", bootController.patchBootCtrl);

booteRouter.patch("/:bootId/toggleDone", bootController.patchToggleStatusCtrl);

booteRouter.delete("/:bootId", doJwtAuth, bootController.deleteOneBootCtrl);

export default booteRouter;
