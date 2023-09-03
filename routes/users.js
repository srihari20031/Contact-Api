import express from "express"
import User from "../models/userModel.js"
import bcrypt from "bcrypt"
import { registerUser, loginUser, currentUser } from "../controllers/authController.js";

const router = express.Router();

router.post("/register", registerUser);

router.post("/login", loginUser)

router.post("/current", currentUser)


export default router