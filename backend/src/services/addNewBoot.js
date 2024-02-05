import { BootModel } from "../models/index.js";




export async function addNewBoot(newboot) {
    const newBoot = new BootModel(newboot);
    console.log("Vor dem Speichern:", newBoot);
    await newBoot.save();
    console.log("Nach dem Speichern:", newBoot);
    return newBoot;
};


