import React from "react";

const Card = ({emoji, heading, detail, color}) => {
  return (
    <div className="w-56 h-72 lg:px-3 absolute flex flex-col gap-2 items-center text-center border-4 border-tara-orangeCard shadow-xl shadow-tara-purple rounded-lg py-3" style={{borderColor: {color}}}> 
      <img src={emoji} alt="" className="scale-50 -mb-7"/>
      <span className="text-gray-500 text-2xl">{heading}</span>
      <span className="font-light text-lg">{detail}</span>
    </div>
  );
};

export default Card;
