import express from "express"
import { getAllContacts, getContact, createContact,  deleteContact, updateContact } from "../controllers/contactController.js";


const router = express.Router();

//Create user 
router.post("/", createContact);
//get all contacts
router.get("/", getAllContacts)
//get post 
router.get("/:id", getContact)
//Update post
router.put("/:id", updateContact)
//Delete post
router.delete("/:id", deleteContact)

export default router