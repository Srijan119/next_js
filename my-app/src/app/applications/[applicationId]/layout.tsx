

"use client"
import React, { useState } from "react"


export default function applicationDetailslayout(
    {
       children, APKDetails,description,licensing,rollout

 
    }:{
        children:React.ReactNode,
        APKDetails:React.ReactNode,
        description: React.ReactNode,
        licensing: React.ReactNode,
        rollout:React.ReactNode

    }
    
)
{



return (

<div style={{display:"flex",flexDirection:"row"}}>
<div>
    {children}
</div>
<div >{APKDetails}</div>
<div>{description}</div>
<div>{licensing}</div>
<div>{rollout}</div>
</div> 
)
}