import { BootModel } from "../models/index.js";



export async function getAllBoots() {
    const boots = await BootModel.find({});
    return boots.map(boot => makeBootList(boot));
}




export function makeBootList(boot) {


    return {
        id: boot._id,
        name: boot.name,
        baujahr: boot.baujahr,
        reservierstatus: boot.reservierstatus,
        material: boot.material,
        bootsart: boot.bootsart,
        seriennummer: boot.seriennummer,
        upload_img: boot.upload_img
    }

};
