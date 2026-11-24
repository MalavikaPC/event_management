import { connectDB } from '@/lib/mongodb'
import User from '@/models/userModel'
import bcrypt from 'bcryptjs'
import { NextResponse } from 'next/server'


export async function POST(req:Request){
    try{
        const {name,email,password}=await req.json()
        if(!name || !email ||!password){
            return NextResponse.json({message:"Fill all the fields"},{status:400})
        }
        await connectDB()
        const existingUser=await User.findOne({email})
        if(existingUser){
            return NextResponse.json({message:"Email already registered"},{status:400})
        }
const hashedPswd=await bcrypt.hash(password,10)
await User.create({name,email,password:hashedPswd})
            return NextResponse.json({message:"Registraton successfull"},{status:201})

       
    }
    catch(err){
            return NextResponse.json({message:"Something went wrong"},{status:500})

    }
}