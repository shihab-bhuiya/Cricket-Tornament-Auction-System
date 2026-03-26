
import React from 'react';
import { MdDelete } from "react-icons/md";
import { FaRegUserCircle } from "react-icons/fa";

const SelectedPlayer = ({selectedPlayer,setSelectedPlayer,setCoin,coin}) => {
    console.log(selectedPlayer);
    const deleteSelectedPlayer =(player)=>{
      const remaining = selectedPlayer.filter(
            (selected) => selected.name !== player.name
        );
        console.log(remaining);
       setSelectedPlayer(remaining);
       setCoin(coin+player.price);
    }
    return (
        <div>{
            selectedPlayer.length === 0 ? <div className='h-100 flex flex-col justify-center items-center  '>
                <h2 className='font-bold'>No Player Selected Yet </h2>
                <p>Go to Available player</p>
            </div>:
            selectedPlayer.map((player) => {
                return <div key={player.id} className='flex items-center justify-between border m-5 border-10-black p-20 roudnded'>
            <div className='flex items-center gap-3'> 
            <img src={player.image} className="w-20 h-30 object-cover rounded-2xl" alt="" />
            <div>
                <h2 className='font-bold flex items-center gap-1'> <FaRegUserCircle /> {player.name}</h2>
                <h4 className='font-medium'>{player.role}</h4>
            </div>
            </div>
            <div>
                <button className='btn' onClick={()=>deleteSelectedPlayer(player)}><MdDelete /></button>
            </div>
           </div>
        
 } )}
        </div>
    );
};

export default SelectedPlayer;