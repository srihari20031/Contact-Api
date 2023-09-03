import express from "express"
import contactRouter from "./routes/contacts.js"
import { errorHandler } from "./middleware/errorHandler.js"
import connectDB from "./config/dbConnection.js"
import usersRouter from "./routes/users.js"




const app = express();

connectDB();

const PORT = 5000

app.use(express.json())
app.use("/api/contacts", contactRouter)
app.use("/api/users", usersRouter)
app.use(errorHandler)


app.listen(PORT, ()=>{
    console.log(`Server is running on http://localhost:${PORT}`)
})