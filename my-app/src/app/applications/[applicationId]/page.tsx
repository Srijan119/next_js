




"use client"

import * as React from "react"


import Apk from "./Apk/page"
import Description from "./description/page"
import Rollout from "./rollout/page"
import Licensing from "./licensing/page"
import { closestCorners, DndContext, KeyboardSensor, PointerSensor, SensorContext, UniqueIdentifier, useSensor, useSensors } from "@dnd-kit/core"
import { Coordinates, DragEndEvent, DragMoveEvent, DragStartEvent } from "@dnd-kit/core/dist/types"

import { arrayMove, SortableContext, sortableKeyboardCoordinates } from "@dnd-kit/sortable"
import Container from "@/components/Container"



 function CardWithForm() {

//Dnd Handlers
const sensors = useSensors(
  useSensor(PointerSensor),
  useSensor(KeyboardSensor,{
    coordinateGetter:sortableKeyboardCoordinates,
  }),
);

//
  
type DNDType = {
  id:UniqueIdentifier,
  title:string
}

  const [containers,setContainer] =React.useState<DNDType[]>([

{
  id:'app-apk',
  title:'container 1'
},
{
 id:'app-rollout',
title:'container 2'
},
{
  id:'app-description',
 title:'container 3'
 },
 {
  id:'app-licensing',
 title:'container 4'
 }


  ]);
  const [activeId, setActiveId] = React.useState<UniqueIdentifier | null>(null);


 const handleDragEnd =(event: DragEndEvent)=>{
  console.log("ji");
  const { active, over } = event;
  console.log(active.id.toString());

  // Handling Container Sorting
  if (
    active.id.toString().includes('app') &&
    over?.id.toString().includes('app') &&
    active &&
    over &&
    active.id !== over.id
  ) {
    // Find the index of the active and over container
    const activeContainerIndex = containers.findIndex(
      (container) => container.id === active.id,
    );
    const overContainerIndex = containers.findIndex(
      (container) => container.id === over.id,
    );
    // Swap the active and over container
    let newItems = [...containers];
    newItems = arrayMove(newItems, activeContainerIndex, overContainerIndex);
    setContainer(newItems);
    console.log(newItems);
  }
 }



 const handleDragMove =(event: DragMoveEvent)=>{
const {active, over} = event;
 }


const handleDragStart = (event:DragStartEvent)=>{
const {active} =event;
const {id} = active;
setActiveId(id);
}





  return (
    <>
{/* <div style={{display:"flex",flexDirection:"row"}}>
<Apk/>
<Description/>
<Rollout/>
<Licensing/>
   
</div> */}


<DndContext sensors={sensors} collisionDetection={closestCorners}
onDragStart={handleDragStart}
onDragMove={handleDragMove}
onDragEnd={handleDragEnd}

>
<SortableContext items={containers.map((container)=>container.id)}
  >
    <div style={{display:"flex",flexDirection:"row"}}>

    {containers.map((container)=>(
      
<Container 
key={container.id}
title={container.title}
id ={container.id}
></Container>
    ))}
    </div>
  </SortableContext>

</DndContext>





    </>
  )
}


export default CardWithForm


