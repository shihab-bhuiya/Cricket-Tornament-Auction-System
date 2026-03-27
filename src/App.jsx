
import { Suspense, useState } from 'react';
import './App.css'
import AvailablePlayer from './Component/AvailablePlayer/AvailablePlayer'
import Players from './Component/AvailablePlayer/Players'
import Navabar from './Component/NavBar/Navabar'
import Banner from './Component/Banner/Banner'
import { ToastContainer } from 'react-toastify';

const fetchPlayer = async () =>{
  const res = await fetch("/player.json");
  return res.json();
}



function App() {
  const [coin,setCoin] = useState(400000);
const playerPromise = fetchPlayer();

  return (
    <>
     
    <Navabar coin ={coin}></Navabar>

 <Banner setCoin={setCoin} coin={coin}></Banner>

<Suspense fallback={<span className='loading loading-spinner loading-6xl'></span>}> 
    <Players playerPromise= {playerPromise} setCoin={setCoin} coin={coin} ></Players>
     
</Suspense>
       <ToastContainer/>

      
    </>
  )
}

export default App
