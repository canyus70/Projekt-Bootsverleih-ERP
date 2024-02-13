import { Userservice } from "../services/index.js";



export async function postLoginUserCtrl(req, res) {
    try {
        const loginInfo = { email: req.body.email, password: req.body.password}
        const result = await Userservice.loginUser(loginInfo)
        res.json({ success: true, result});
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, error, message: error.message || "Konnte Benutzer nicht registrieren"});
    }
};


export function userToProfileInfo({ name, email }) {
    return { name, email };
}