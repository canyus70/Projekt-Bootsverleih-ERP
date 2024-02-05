import { BootModel } from "../models/index.js";




export async function addNewBoot(newbootinfo) {
    console.log("Vor dem Speichern:", newbootinfo);
    const newBoot = new BootModel(newbootinfo);
    await newBoot.save();
    console.log("Nach dem Speichern:", newBoot);
    return newBoot;
};


