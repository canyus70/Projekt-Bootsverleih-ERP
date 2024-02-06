import mongoose from "mongoose";

const bootSchema = new mongoose.Schema({
  baujahr: {
    type: Number,
    required: true
  },
  seriennummer: {
    type: String,



  },
  material: {
    type: String,
    required: true,
    enum: ['GFK', 'Holz', 'Metall', 'Pappe', 'Seelen']
  },
  bootsart: {
    type: String,
    required: true,
    enum: ['Tretboot', 'Segelboot', 'Luftkissenboot', 'Geisterschiff', 'Containerschiff']
  },
  upload_img: {
    type: String, // Pfad zum Bild oder URL
    required: false // Optional, falls nicht jedes Boot ein Bild haben muss
  },
  reservierstatus: { type: Boolean, default: true }

}, { timestamps: true });

const BootModel = mongoose.model("BootModel", bootSchema, "boote");

export default BootModel;