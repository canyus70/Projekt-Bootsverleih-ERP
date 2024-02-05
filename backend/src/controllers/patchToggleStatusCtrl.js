import { BootService } from "../services/index.js";



export async function patchToggleStatusCtrl(req, res) {
    try {
        const bootId = req.params.bootId;
        const newToggledlist = await BootService.toggleBootStatus(bootId)
        res.status(200).json({ success: true, newToggledlist})
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, error, message: error.message || "Zu dumm um zu toggeln und zu dumm um ein error zu schreiben"})
    }

};