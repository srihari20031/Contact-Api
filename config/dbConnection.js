import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();


const connectDB = async() => {
    try{
        const connect = await mongoose.connect(process.env.MONGODB_URL)
        console.log("MongoDB Connected: ", connect.connection.host, connect.connection.name)
    }
    catch(err)
    {
        console.log(err)
    }
}

export default connectDB