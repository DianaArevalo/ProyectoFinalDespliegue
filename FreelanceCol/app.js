import express from "express"
import userRouter from "./routes/userRouter.js";
import mongoose from "mongoose";
import cors from "cors"

const app = express();

const cors = require("cors");
const port = process.env.PORT || 8082

app.listen(port, ()=> {
    console.log("El servidor se esta ejecutando.");
})

mongoose.connect("mongodb+srv://FreelanceCol:grupo5@freelancecol.pzdp53s.mongodb.net/?retryWrites=true&w=majority", (err)=>{
    if(err){
        console.log(err);
    }else{
    console.log("la base de datos se encuentra conectada.");
    }
})

conectarDB()
// Habilitar cors
//app.use(cors());
app.use(cors());

//Midleware
app.use(express.json())
app.use("/user", userRouter)
app.use("/user/profile", userRouter)
app.use("/user/reservations", userRouter)
app.use("/user/searchD", userRouter)
app.use("/user/searchC", userRouter)
app.use("/user/update", userRouter)
app.use("/user/deleteUser", userRouter)
