import mongoose from 'mongoose'
const connectionString=process.env.DB_CONNECTION_URL as string
export const connectDB=async()=>{
    try{
const res=await mongoose.connect(connectionString)
console.log("Connection Successfull");

    }
    catch(err){
        console.log("Connection Failed");
        console.log(err);
        
        
    }
}