import Link from "next/link"


export default function Register() {
    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="bg-rose-300 p-4 w-100 rounded">
                <h1 className="text-white text-center font-bold text-lg">LOGIN</h1>
                <form>
                    
                    <div className="w-full my-3">
                        <input type="email" placeholder="Email" className="rounded bg-gray-200 w-full p-2" />
                    </div>
                    <div className="w-full my-3">
                        <input type="password" placeholder="password" className="rounded bg-gray-200 w-full p-2" />
                    </div>
                    <div className="w-full my-3 text-center">
                       <Link href={'/dashboard'} className="p-2 rounded bg-rose-600">Login</Link>
                    <p className="mt-3">New User?Click here to <Link href={'/register'} className="text-blue-700">Register</Link></p>
                    </div>
                </form>
            </div>
        </div>
    )
}