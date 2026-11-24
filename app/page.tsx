import Link from "next/link";


export default function Home() {
  return (
   <div className="min-h-screen p-10 items-center justify-center">
      <h1 className="text-rose-600 font-bold text-3xl text-center justify-center">Event Management System</h1>
      
      <p className="text-gray-500 text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores maxime minima reiciendis dignissimos porro id quod et odit placeat magnam. Nobis tempora molestiae itaque. Vero fuga maxime ratione a exercitationem?</p>
      <div>
<Link href={'/dashboard'} className="bg-blue-400 text-black rounded px-5 ">Let's Start</Link>
      </div>
    </div>
    
  );
}
