
"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import "./styles.css";

// export const metadata = {
//   title: 'auth.js',
// }


const navlinks = [

{
  name:"register",href:"/register"
},
{
  name:"Login",href:"/login"
},
{
  name:"forgot",href:"/forgot-password"
}


]



  export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    const pathname = usePathname();
    const [input,setInput]=useState("");
    return (
 <>
 <div>
  <input value={input} onChange={ e=>setInput(e.target.value) } />
 </div>
        <p>Inner Layouts</p>
        {navlinks.map((link)=>{
              const isActive = pathname.startsWith(link.href)

          return(


            <Link href={link.href} key ={link.name} className={isActive?"font-bold mr-4":"text-b;ue-500 mr-4"}>{link.name}</Link>
          );
        })}

        
          {children}
         
  </>
  
    
  
    )
  }
  