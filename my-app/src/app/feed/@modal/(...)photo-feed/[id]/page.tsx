import wondersImages, { WonderImage } from "@/app/feed/wonders"
import Modal from "../../../../../components/ui/modal"


import Image from "next/image";


export default function photodetails({params:{id}}:
    {params:{id:string}}){
    
    const photodetails: WonderImage = wondersImages.find((p)=>p.id===id)! ;

    return (
        <Modal>
                    <Image src={photodetails.src} alt={photodetails.name}   className="w-full object-cover aspect-square "/>


          
          <div className="bg-white py-4">
          <h3>{photodetails.photographer}</h3>
          <h3>{photodetails.location}</h3>
        </div>
          
          </Modal>
    )
    
    }
