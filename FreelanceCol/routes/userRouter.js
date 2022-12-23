import express from "express"
import { createUser, deleteUser, readUser, updateUser } from "../controller/userController.js"

const userRouter = express.Router()

//CRUD
//CREAR: POST
userRouter.post("/", (req, res) => {
    createUser(req, res)
})

//LEER: GET
userRouter.get("/:profile", (req, res) => {
    readUser(res)

})

//userRouter.post("/reservations", (req, res) => {
    //createUser(req, res)

//})
userRouter.get("/searchD", (req, res) => {
    readUser( res)

})
userRouter.get("/searchC", (req, res) => {
    readUser( res)

})
//ACTUALIZAR: PUT/ PATCH
userRouter.patch("/", (req, res) => {
    updateUser( res)

})
//ELIMINAR: DELETE
userRouter.delete("/", (req, res) => {
    deleteUser(res)

})

export default userRouter