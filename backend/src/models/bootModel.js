import mongoose from "mongoose";

const bootSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    baujahr: {
      type: Number,
      required: true,
    },
    seriennummer: {
      type: String,
    },
    material: {
      type: String,
      required: true,
      enum: ["GFK", "Holz", "Metall", "Pappe", "Kunststoff"],
    },
    bootsart: {
      type: String,
      required: true,
      enum: [
        "Tretboot",
        "Segelboot",
        "Luftkissenboot",
        "Schnellboot",
        "Motorboot",
        "Kreuzfahrtschiffe",
        "Containerschiff",
        "Geisterschiff"

      ],
    },
    upload_img: {
      type: String, // Pfad zum Bild oder URL
      required: false, // Optional, falls nicht jedes Boot ein Bild haben muss
    },
    reservierstatus: {
      status: { type: Boolean, default: true },
      start: { type: String },
      end: { type: String },
    },
    userId: { type: mongoose.Types.ObjectId, required: true },
  },
  { timestamps: true }
);

const BootModel = mongoose.model("BootModel", bootSchema, "boote");

export default BootModel;
