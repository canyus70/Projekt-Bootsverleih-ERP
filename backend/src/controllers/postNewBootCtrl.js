import { BootService } from "../services/index.js";

export async function postNewBootCtrl(req, res) {
  try {
    const bootinfo = req.body;
    const authenticatedUserId = req.verifiedUserClaims.sub;


    if (req.file) {
      bootinfo.upload_img = req.file.filename;
    }
    const result = await BootService.addNewBoot(bootinfo, authenticatedUserId);
    res.status(201).json({ success: true, result });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      error,
      message: error.message || "Zu dumm um zu posten",
    });
  }
}
