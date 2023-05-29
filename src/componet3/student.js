import React from 'react'
import ögrenci from './student.json'

const Student = () => {


  return (

    <div>

        <h1>Ögrenci Listesi</h1>

        <ul>
            {
                 ögrenci.filter((ögrenci)=>ögrenci.yas>25).map((ögrenci,index)=>(<li key ={index }>{ögrenci.isim}</li>))
            }

           
        </ul>

        <select>

          {
            ögrenci.reduce((values,ögrenci)=>{

              if(!values.includes(ögrenci.kurs))
              values.push(ögrenci.kurs)
              return values
            },[] ).map((öge,index)=>(<option key ={index}>{öge}</option>))
            
          }

        </select>
        
        
        
         </div>
  )
}

export default Student