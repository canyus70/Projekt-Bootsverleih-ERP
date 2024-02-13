import { BootService } from "../services/index.js";



export async function deleteOneBootCtrl(req, res) {
    try {
        const bootId = req.params.bootId;
        const authenticatedUserId = req.verifiedUserClaims.sub;

        const result = await BootService.removeOneBootById(bootId,authenticatedUserId);
        res.json({ success: true, result})
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, error, message: error.message || "Jemand ist zu dumm um zu löschen"})
    }
};