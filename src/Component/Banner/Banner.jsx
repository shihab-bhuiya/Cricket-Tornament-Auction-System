import React from "react";
// import "./Banner .css";
import cricket from "../../assets/banner-main.png"; // আপনার image এখানে দিন
import bf from "../../assets/bg-shadow.png"

const Hero = ({setCoin,coin}) => {
    const handler =()=>{
        setCoin(coin+10000);
    }
  return (
    <div className="m-15 max-w-300 mx-auto border-2 rounded-2xl " style={{
        backgroundImage:`url(${bf})`,
         backgroundSize: "cover",
        backgroundPosition: "center",
    }}>
      <div className="hero-content flex flex-col space-y-2.5 ">
        <img src={cricket} alt={cricket} className="h-30" />

        <h1 className="text-4xl font-bold">Assemble Your Ultimate Dream 11 Cricket Team</h1>

        <p className="text-2xl">Beyond Boundaries Beyond Limits</p>

        <button onClick={handler} className="btn rounded-2xl bg-amber-300 mb-10">Claim Free Credit</button>
      </div>
    </div>
  );
};

export default Hero;