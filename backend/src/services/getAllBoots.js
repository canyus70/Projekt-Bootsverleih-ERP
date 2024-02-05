import  { BootModel }  from "../models/index.js";



export async function getAllBoots() {
    const boots = await BootModel.find({});
    return boots.map(boot =>  makeBootList(boot));
}





export function makeBootList(boot) {

    
    return {
        id:boot._id,
        baujahr: boot.baujahr,
        reservierungs_status: boot.reservierungs_status,
        material: boot.material,
        bootsart: boot.bootsart


    }

}
