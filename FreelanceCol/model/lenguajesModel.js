import mongoose from "mongoose";

const perfil = mongoose.Schema({
    "mensaje": {type:String, required:true},
    "estado": String,
});

const lenguajesModel = mongoose.Schema({
    "idUser":{type:Number, required:true},//autenticacion de C.C.
    "lenguaje":{type:String, required:true},
    "experiencia":{type:String, required:true},
    "mensaje":{type:String, required:true}
    
    
    
})

export default mongoose.model("lenguajes", lenguajesModel)