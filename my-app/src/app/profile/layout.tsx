  
function getRandomInt(count:number)
{
    return Math.floor(Math.random() *count);
}


  export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    const random = getRandomInt(2);
    if(random===1){
        throw new Error("error loading from profile id section")
    }

    return (
 <>
        <p>profile page</p>
          {children}
         
  </>
  
    
  
    )
  }
  