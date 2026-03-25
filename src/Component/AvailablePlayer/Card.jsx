import React, { useState } from 'react';
import { FaUser,FaFlag } from "react-icons/fa";


const Card = ({player,setCoin,coin,selectedPlayer,setSelectedPlayer}) => {
          const [isSelected,setIsSelected] = useState(false)
          const HandleChoosePlayer =()=>{
            if(coin < player.price)
            {
              alert(`Not Have enough Money To Buy ${player.name}`)
              return;
            }
            else{
              
            alert(`${player.name} is Bought`);
            setCoin(coin-player.price)
          }
            setIsSelected(true);
            setSelectedPlayer([...selectedPlayer,player])

        }
    return (
        <div>
        <div className=''> 
                 
           
               <div> 
                    <div className='max-w-300 mx-auto'>
              
               <div className='max-w-300 mx-auto m-5 '>
                    <div className="card bg-base-300  shadow-sm">
          <figure>
            <img
              src={player.image}
              alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title"><FaUser/> {player.name}</h2>
            <div className='flex justify-between gap-2'>
                <div className='flex gap-2 items-center'> <FaFlag/> {player.country} </div>
               <button className='btn'>{player.role}</button>
            </div>
        
                 <div className="divider"></div>
        
                <h2 className='font-bold'>Rating: {player.rating}</h2>
                <div className='flex justify-end gap-38 text-l'>
                    <p className='bg-amber-100'>{player.batting_style}</p>
                    <p className='bg-amber-100'>{player.bowling_style}</p>
                </div>
        
               
        
            <div className="card-actions justify-end">
                <p>Price: ${player.price}</p>
                   
              <button onClick={ HandleChoosePlayer}
              disabled = {isSelected ? true : false}
               className="btn btn-primary"> { isSelected === true ? "Selected" : "Choose Player"}</button>
            </div>
          </div>
        </div>
                </div>
                </div>)
                
                
             </div> )
          
                   </div>
                </div>
    );
};

export default Card;