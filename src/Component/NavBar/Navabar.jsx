import React from 'react';
import NavImg from '../../assets/logo.png'
import dollarImg from '../../assets/Currency.png'

const Navabar = ({coin}) => {
    return (
        <div>
            <div className="navbar max-w-300 mx-auto m-5 ">
  <div className="flex-1">
    <a className="btn btn-ghost text-xl">
      <img src={NavImg  } alt="" />
    </a>
  </div>
  <div className="flex items-center">
   <span>{coin} </span>
   <span className='mx-2'> Coin</span>  <img src={dollarImg} alt="" />
  </div>
</div>
        </div>
    );
};

export default Navabar;