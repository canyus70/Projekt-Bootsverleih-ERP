import { addNewBoot } from "./addNewBoot.js";
import { getAllBoots } from "./getAllBoots.js";
import { getBootById } from "./getBootById.js";
import { registerUser } from "./registerUser.js";
import { removeOneBootById } from "./removeOneBootById.js";
import { toggleBootStatus } from "./toggleBootStatus.js";
import { updatedBootById } from "./updatedBootById.js";





export const BootService = {
    getAllBoots,
    getBootById,
    addNewBoot,
    updatedBootById,
    removeOneBootById,
    toggleBootStatus
}

export const Userservice = {
    registerUser,
}