import { deleteOneBootCtrl } from "./deleteOneBootCtrl.js";
import { getAllBootsCtrl } from "./getAllCtrl.js";
import { getBootByIdCtrl } from "./getBootByIdCtrl.js";
import { patchBootCtrl } from "./patchBootCtrl.js";
import { patchToggleStatusCtrl } from "./patchToggleStatusCtrl.js";
import { postNewBootCtrl } from "./postNewBootCtrl.js";





export const bootController = {
    getAllBootsCtrl,
    getBootByIdCtrl,
    postNewBootCtrl,
    patchBootCtrl,
    deleteOneBootCtrl,
    patchToggleStatusCtrl
}