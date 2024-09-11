import wondersImages, { WonderImage } from "../wonders";
import Image from "next/image";


export default function photodetails({params:{id}}:
    {params:{id:string}}){
    
    const photodetails: WonderImage = wondersImages.find((p)=>p.id===id)! ;

    return (

        <div className="container mx-auto my-10">
        <div className="w-1/2 mx-auto">
          <div>
            <h1 className="text-center text-3xl font-bold my-4">{photodetails.name}</h1>

          </div>
          <Image src={photodetails.src} alt={photodetails.name}   className="w-full object-cover aspect-square "/>
          <div className="bg-white py-4">
          <h3>{photodetails.photographer}</h3>
          <h3>{photodetails.location}</h3>
        </div>
          </div>
          </div>
    )
    
    }
