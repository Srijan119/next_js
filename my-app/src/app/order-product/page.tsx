
"use client"


import { useRouter } from "next/navigation";




export default function OrderProduct(){
const router = useRouter();

    const handleClick= ()=>{
        console.log("placing your order");
     router.push("/");
    //  router.back()  for going back and router.forward() for going forward
    }

    return (
        <>
        <h1>order product</h1>
        <button onClick={handleClick}>Place Order</button>
        </>
    )
}