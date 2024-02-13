import { hashPassword } from "../utils/hash.js";
import  { Usermodel } from "../models/index.js"

export async function doBasicAuth(req, res, next) {
    const authorization =  req.headers.authorization;
    console.log(authorization);
    if (!authorization) return res.status(401).json({ success: false, message:  "Invalid authentication"});
    const [authType, authDataBase64] = authorization.split(" ");
    if (authType !== "Basic" || !authDataBase64 ) return res.status(401).json({ success: false, message:  "Invalid authentication"});

    //email:password // atob() kann man auch nutzen
    const authData = Buffer.from(authDataBase64, "base64").toString();
    console.log(authData);
    const [email, password] = authData.split(":");
    if (!email || !password) return res.status(401).json({ success: false, message: "Invalid authentication"});

    // authentication durchführen

    const foundUser = await Usermodel.findOne({ email});
    if (!foundUser)
    return res.status(401).json({ success: false, message: "User with this email doesn't exist"});

    const passwordHash = hashPassword(password, foundUser.passwordSalt);
    console.log(passwordHash);
    const correctPassword = passwordHash === foundUser.passwordHash;
    if (!correctPassword) return res.status(401).json({ success: false, message:  "Wrong password"});

    req.authenticatedUser = foundUser;
    console.log(req.authenticatedUser);
    next();
};