/* import logo from './logo.svg'; */
import './App.css';
import CComponet1 from './componet1/dersler'

import CComponet2 from './componet2/jscriptKullanim';
import CComponet2Map from './componet2/mapKullanimi';
import CComponet2useState from './componet2/useStateKullanimi';
import CComponet2useEffect from './componet2/useEffectKullanimi';

import CComponet3 from './componet3/student';
import CComponet3Props from './componet3/propsÖrneği';
import CComponet3BrowserRouter from './componet3/browserRooters'

function App() {

/*   //props örneği 
  const farketmez ="props matiği";

  //Event örneği yaptık

  function clickFoksiyon () {

    console.log('Butona tıkladın');

  } */

  return (
    <>
    
   {/*  <CComponet1/> */}

   {/*  <CComponet2/> */}
   {/* <CComponet2Map/> */}
   {/* <CComponet2useState/> */}
   {/* <CComponet2useEffect/> */}

   {/* <CComponet3/> */}
   {/*  <CComponet3Props müct={farketmez}/> */}
   < CComponet3BrowserRouter/>

   {/* <button onClick={clickFoksiyon} >butona tikla </button> basit event denemesi yaptık */}


    </>
    
  );
}

export default App;
