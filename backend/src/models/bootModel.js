import mongoose from "mongoose";

const bootSchema = new mongoose.Schema({
    reservierungs_status: {
       type: Boolean,
      
       default: true // ist immer erst ture also verfügbar
     },
     baujahr: {
       type: Number
     },

     material: {
       type: String
      
    
     },
     bootsart: {type: String},
     upload_img: {type: String}
   }, {timestamps: true});
   
   const BootModel = mongoose.model("BootModel", bootSchema, "boote");
   
export default BootModel;