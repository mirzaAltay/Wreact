import React from 'react'
import { useState } from 'react';



const UseStatee = () => {

    //köşeli parantez içi ilk değişken deger alir ,ikinci setdeğişken ise değişkenin aldiği değeri değiştirmemizi yahut güncellememizi sağlar

    const [count , setCount] = useState(0) //burda int,string,yada bos bırakabiliriz

    console.log(count)

  function clicButton() {

   // console.log("butonu tıkladın")

   if (count<=5){

    setCount(count+1)
   }
   return 

   //setCount(count+1)  //burda count butona her tıklandıpında artar istersek koşula bağlayabiliriz



  }  


  return (
    <>

    {count}

    <div>useStateKullanimi</div>

    <button onClick={clicButton} > tiklaa </button>

   </>

  )
}

export default UseStatee