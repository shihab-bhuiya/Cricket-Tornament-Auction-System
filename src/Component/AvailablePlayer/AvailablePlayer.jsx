import React from 'react';
import Card from './Card';

const AvailablePlayer = ({ players,setCoin,coin,selectedPlayer,setSelectedPlayer }) => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 m-10'>
      {players.map(player => (
        <Card key={player.id} player={player} setCoin={setCoin} coin={coin}
        selectedPlayer={selectedPlayer} setSelectedPlayer={setSelectedPlayer} />
      ))}
    </div>
  );
};

export default AvailablePlayer;
// const AvailablePlayer = ({players}) => {
//   const [isSelected,setIsSelected] = useState(false)

//     return (
//     <div>
//         <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 m-10'> 
//          {
//     players.map((player) => { return   <div> 
//             <div className='max-w-300 mx-auto'>
      
//        <div className='max-w-300 mx-auto m-5 '>
//             <div className="card bg-base-300  shadow-sm">
//   <figure>
//     <img
//       src={player.image}
//       alt="Shoes" />
//   </figure>
//   <div className="card-body">
//     <h2 className="card-title"><FaUser/> {player.name}</h2>
//     <div className='flex justify-between gap-2'>
//         <div className='flex gap-2 items-center'> <FaFlag/> {player.country} </div>
//        <button className='btn'>{player.role}</button>
//     </div>

//          <div className="divider"></div>

//         <h2 className='font-bold'>Rating: {player.rating}</h2>
//         <div className='flex justify-end gap-38 text-l'>
//             <p className='bg-amber-100'>{player.batting_style}</p>
//             <p className='bg-amber-100'>{player.bowling_style}</p>
//         </div>

       

//     <div className="card-actions justify-end">
//         <p>Price: ${player.price}</p>
           
//       <button onClick={()=> setIsSelected(true)} className="btn btn-primary"> { isSelected ? "Selected" : "Choose Player"}</button>
//     </div>
//   </div>
// </div>
//         </div>
//         </div>)
        
        
//        </div> })
//  }
//            </div>
//         </div>
//     );
// };

