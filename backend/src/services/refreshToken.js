import { UserModel } from "../models/index.js";
import { createToken } from "../utils/index.js";


export async function refreshToken(authenticatedUserId) {
    const foundUser = await UserModel.findById(authenticatedUserId);
    if (!foundUser) throw new Error("User doesnt exist anymore");
    const newAccessToken = createToken(foundUser, "access");
    return { newAccessToken };
}