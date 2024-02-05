import { addNewBoot } from "./addNewBoot.js";
import { getAllBoots } from "./getAllBoots.js";
import { getBootById } from "./getBootById.js";
import { removeOneBootById } from "./removeOneBootById.js";
import { updatedBootById } from "./updatedBootById.js";





export const BootService = {
    getAllBoots,
    getBootById,
    addNewBoot,
    updatedBootById,
    removeOneBootById
}