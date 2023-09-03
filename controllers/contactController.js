import  express  from "express"
import Contact from "../models/contactModel.js"
import asyncHandler from "express-async-handler";



//create contact
export const createContact = asyncHandler (async (req, res) => {
  console.log("The request body is :", req.body);
  const { name, email, phone } = req.body;
  if (!name || !email || !phone) {
    res.status(400);
    throw new Error("All fields are mandatory !");
  }
  const contact = await Contact.create({
    name,
    email,
    phone,
    
  });

  res.status(201).json(contact);
})
//get one Contact
export const getContact =   async (req, res) => {
  try{
    const contacts = await Contact.find({ _id: req.body.id });
     res.status(200).json(contacts);
  }
  catch (err){
    res.status(404).json("Contact not found")
  }
  
}
    

//get All contacts
export const getAllContacts = asyncHandler (async (req, res) => {
    const contacts = await Contact.find()
    res.status(200).json(contacts)
})

//Update Contact
export const updateContact = asyncHandler (async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    res.status(404);
    throw new Error("Contact not found");
  }

  if (!Contact.find({_id: req.body.id})) {
    res.status(403);
    throw new Error("User don't have permission to update other user contacts");
  }

  const updatedContact = await Contact.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );

  res.status(200).json(updatedContact);
})

//Delte Contact
export const deleteContact = asyncHandler (async (req, res) => {
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
      res.status(404);
      throw new Error("Contact not found");
    }
    if (!Contact.find({_id : req.body.id})) {
      res.status(403);
      throw new Error("User don't have permission to update other user contacts");
    }
    await Contact.deleteOne({ _id: req.params.id });
    res.status(200).json(contact);
  })
  
