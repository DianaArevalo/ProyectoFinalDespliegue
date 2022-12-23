import mongoose from "mongoose";

const perfil = mongoose.Schema({
    "mensaje": {type:String, required:true},
    "estado": String,
});

const userModel = mongoose.Schema({
    "id":{type:Number, required:true},//autenticacion de cc
    "nombre":{type:String, required:true},
    "edad":{type:Number, required:true},
    "correo":{type:String, required:true},
    "profesion":{type:String, required:true},
    "ciudad":{type:String, required:true},
    "password":{type:String, required: true}
    
    
})

export default mongoose.model("user", userModel)