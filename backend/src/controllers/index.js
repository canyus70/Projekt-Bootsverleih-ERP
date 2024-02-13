import { deleteOneBootCtrl } from "./deleteOneBootCtrl.js";
import { getAllBootsCtrl } from "./getAllCtrl.js";
import { getBootByIdCtrl } from "./getBootByIdCtrl.js";
import { patchBootCtrl } from "./patchBootCtrl.js";
import { patchToggleStatusCtrl } from "./patchToggleStatusCtrl.js";
import { postLoginUserCtrl } from "./postLoginUserCtrl.js";
import { postNewBootCtrl } from "./postNewBootCtrl.js";
import { postRefreshTokenCtrl } from "./postRefreshTokenCtrl.js";
import { postRegisterUserCtrl } from "./postRegisterUserCtrl.js";





export const bootController = {
    getAllBootsCtrl,
    getBootByIdCtrl,
    postNewBootCtrl,
    patchBootCtrl,
    deleteOneBootCtrl,
    patchToggleStatusCtrl
}

export const userController = {
    postRegisterUserCtrl,
    postLoginUserCtrl,
    postRefreshTokenCtrl
}