import React from 'react'

const Home = () => {


    function gecis () {

        window.location="/detay"
  
  
      }


  return (
    <>

    <div>Home sayfasindasindayım</div>
    <button onClick={gecis}  > sayfa gecişi için tikla</button>

    </>
  )
}

export default Home