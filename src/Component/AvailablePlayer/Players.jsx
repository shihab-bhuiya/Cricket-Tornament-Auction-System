import React, { use, useState } from 'react';
import { FaUser,FaFlag } from "react-icons/fa";
import AvailablePlayer from './AvailablePlayer';
import SelectedPlayer from '../SelectedPlayer/SelectedPlayer';


const Players = ({playerPromise,setCoin,coin}) => {
        const players = use(playerPromise);
        console.log(players);
        const [selectedType,setSelectedType] = useState(" "); 
        const [selectedPlayer,setSelectedPlayer] = useState([]);
    return (

        
        
        <div className='max-w-300 mx-auto'> ~~
         <div className='flex justify-between'>
            {
                selectedType === "available" ?
            <h2 className='font-bold'>Available Players</h2> :   <h2 className='font-extrabold'>Selected Players({selectedPlayer.length}/{players.length})</h2>
            }

            <div className='flex justify-between '> 


            <button onClick={()=>setSelectedType("available")} className={`btn  ${selectedType === "available" ? "rounded-2xl bg-[#E7FE29] text-black" :"bg-white text-black"} rounded-r-none `}>Available</button>

            <button onClick={()=>setSelectedType("selected")} className={`btn  ${selectedType === "selected" ? "rounded-2xl bg-[#E7FE29] text-black" :"bg-white text-black"} rounded-l-none `}>Selected({selectedPlayer.length})</button>
            </div>
         </div>
        
        {selectedType === "available" ? <AvailablePlayer players={players} setCoin={setCoin} coin={coin} setSelectedPlayer={setSelectedPlayer} selectedPlayer={selectedPlayer} ></AvailablePlayer>
        : <SelectedPlayer setSelectedPlayer={setSelectedPlayer} selectedPlayer={selectedPlayer}
        setCoin={setCoin} coin={coin}></SelectedPlayer>}
   
       {/* {
        players.map(player => <AvailablePlayer player={player}></AvailablePlayer>)
       } */}

       </div>
        
    );
};

export default Players;