import express from "express";
const router=express.Router()
import {getALLUsers, getSingleUser,deleteAllUsers,deleteSingleUser, updateUser  } from "../../controllers/userController.js";

router.get("/",getALLUsers)
router.get("/:id",getSingleUser)
router.delete("/delete-single/:id",deleteSingleUser)
router.delete("/delete-all",deleteAllUsers)
router.patch('/update/:id',updateUser)

export default router