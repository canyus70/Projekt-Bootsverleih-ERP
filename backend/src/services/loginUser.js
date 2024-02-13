import {UserModel} from "../models/index.js";
import {hashPassword}  from "../utils/index.js";
import {createToken}  from "../utils/index.js";



export async function loginUser({ email, password}) {
    const foundUser = await UserModel.findOne({email});
    if(!foundUser) throw new Error("User with this email doesn't exist");

    const passwordHash = hashPassword(password, foundUser.passwordSalt);
    const correctPassword = passwordHash === foundUser.passwordHash;
    if (!correctPassword) throw new Error("Wrong Password");

    const accessToken = createToken(foundUser, "access");
    const refreshToken = createToken(foundUser, "refresh");
    return { user: userToProfileInfo(foundUser), tokens: { accessToken, refreshToken }}
}

function userToProfileInfo( { name, email}) {
    return { name, email}
}