import { Userservice } from "../services/index.js";



export async function postRefreshTokenCtrl(req, res) {
    try {
        if (req.verifiedUserClaims.type !== "refresh") {
            throw new Error("Token must be of type 'refresh'")
        }
        const authenticatedUserId = req.verifiedUserClaims.sub;
        const result = await Userservice.refreshToken(authenticatedUserId);
        res.json({ success: true, result});
    } catch (error) {
        console.log(error)
        res.status(500).json({ success: false, error, message: error.message || "Could not register User"})
    }
};