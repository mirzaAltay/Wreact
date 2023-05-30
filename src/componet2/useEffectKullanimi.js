import React, { useCallback } from 'react'
import {useEffect, useState } from 'react'

const UseEffectt = () => {

    //use effect sayfa yüklendiğinde aktif olan fonsiyonlar için kullanılır

    const [degisken , setdeğişken] = useState('deneme');//false da koyabilirim

    console.log(degisken)

    useEffect(()=>{

        setdeğişken('deneme2')//başlangıcta değer deneme idi sayfa yüklenince deneme2 olacak


    },[])//bos bir array koyduk içerisinde aksiyonda olabilir yani render etme olayı


  return (

    <div>{degisken}</div>

  )
}

export default UseEffectt