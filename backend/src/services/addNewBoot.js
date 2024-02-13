import { BootModel } from "../models/index.js";




export async function addNewBoot(newbootinfo, authenticatedUserId) {
    const newBoot = new BootModel({...newbootinfo, userId: authenticatedUserId});
    await newBoot.save();
    return newBoot;
};


