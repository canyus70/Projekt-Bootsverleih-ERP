import { BootService } from "../services/index.js";





export async function postNewBootCtrl(req, res) {
    try {
        const bootinfo = req.body;
        if (req.files) {
            bootinfo.upload_img = req.files[0].filename;
        }
        const result = await BootService.addNewBoot(bootinfo);
        res.status(201).json({ success: true, result });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, error, message: error.message || "Zu dumm um zu posten" })
    }
};