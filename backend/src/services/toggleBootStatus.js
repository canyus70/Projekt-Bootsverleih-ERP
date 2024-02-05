import { BootModel } from "../models/index.js";




export async function toggleBootStatus(bootId) {
 
    const updatedStatus = await BootModel.findById(bootId);
    updatedStatus.reservierstatus = !updatedStatus.reservierstatus;
    return updatedStatus.save();
}