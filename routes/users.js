import express from "express";
import {createUser, updateUser, deleteUser, retrieveUsers,retrieveUser} from "../controllers/users.js"

const router = express.Router();

//all routers starting with  /users
router.get("/", retrieveUsers);

router.post("/",createUser)

router.get("/:id", retrieveUser);

router.delete("/:id", deleteUser);

router.patch("/:id",updateUser)
export default router;
