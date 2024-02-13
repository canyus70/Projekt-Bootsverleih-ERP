import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();
const jwtSecret = process.env.JWT_SECRET;

export function createToken(user, tokenType = "access") {
    const tokenPayload = { sub : user._id.toString(), type: tokenType};
    const options = { algorithm: "HS256", expiresIn: "1h"};
    const tokenString = jwt.sign(tokenPayload, jwtSecret, options);
    return tokenString;
};