import React from 'react'
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom';
import Homee from '../page/home'
import Detayy from '../page/detay'

const SayfaGecis = () => {


   


  return (

    <>

    <BrowserRouter>

    <Routes>
        <Route path="/" element ={<Homee/>} />
        <Route path="detay" element ={<Detayy/>} />
        <Route/>
    </Routes>
    
    
    </BrowserRouter>

   

</>

  )
}

export default SayfaGecis