import React from 'react'



const Map = () => {

const arr =[
    // burda id lerin olması map kullanımında index değilde id kullanabiliriz
    {isim:"ali" , id:0},
    {isim:"zeynep" , id:1},
    {isim:"sinan" , id:2}

   ]



  return (
    <>
    <div>mapKullanimi</div>

     {
    /*     id yoksa index-herhangi bir isim olabilir- deyip yapabilirsin
     arr.map((x,i) => (

        <div > {x.isim} </div> 

         )) 
 */

        arr.map((x,id) =>( /*  id benzersiz olduğu için  */

            <div key ={id}  > {x.isim}  </div>


    
            )) 
     
     } 


   </>
  )
}

export default Map

