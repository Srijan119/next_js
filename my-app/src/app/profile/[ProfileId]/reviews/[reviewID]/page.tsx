"use client"

import { notFound } from "next/navigation";



function getRandomInt(count:number)
{
    return Math.floor(Math.random() *count);
}

export default function reviewDetail({
params,
}:{
    params:{ProfileId:string,
    reviewID:string}
}
)
{

    // const random = getRandomInt(2);
    // if(random===1){
    //     throw new Error("error loading reviewwww")
    // }
    if(parseInt(params.reviewID) >1000){
        notFound();
    }
    return (


        <>
        <h1>review {params.reviewID} for product {params.ProfileId}</h1></>
    )
}