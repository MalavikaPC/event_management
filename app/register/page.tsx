"use client"
import Link from "next/link"
import { useRouter } from "next/router"
import { useState } from "react"
import toast from "react-hot-toast"


export default function Register() {
    // const router=useRouter()
    const [userDetails,setUserDetails]=useState({
        name:"",email:"",password:""
    })
    console.log(userDetails);
    const handleRegister=()=>{
        
    }
    
    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="bg-rose-300 p-4 w-100 rounded">
                <h1 className="text-white text-center font-bold text-lg">REGISTER</h1>
                <form>
                    <div className="w-full my-3" >
                        <input type="text" placeholder="User Name" className="rounded bg-gray-200 w-full p-2" />
                    </div>
                    <div className="w-full my-3">
                        <input type="email" placeholder="Email" className="rounded bg-gray-200 w-full p-2" />
                    </div>
                    <div className="w-full my-3">
                        <input type="password" placeholder="password" className="rounded bg-gray-200 w-full p-2" />
                    </div>
                    <div className="w-full my-3 text-center">
                       <Link href={'/login'} className="p-2 rounded bg-rose-600">Register</Link>
                        <p className="mt-3">Already have an account?Click here to <Link href={'/login'} className="text-blue-700">Login</Link></p>
                    </div>
                </form>
            </div>
        </div>
    )
}