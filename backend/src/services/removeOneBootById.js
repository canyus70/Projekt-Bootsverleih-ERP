import { BootModel } from "../models/index.js";




export async function removeOneBootById(bootId, authenticatedUserId) {
    const foundBoot = await BootModel.findById(bootId);
    if (!foundBoot) throw new Error("Recipe doesn't exist");
    if (foundBoot.userId.toString() !== authenticatedUserId)
    throw new Error("You cannot remove boots created by other users!");
    const deletedBoot = await BootModel.findByIdAndDelete(bootId);
    return deletedBoot;
}