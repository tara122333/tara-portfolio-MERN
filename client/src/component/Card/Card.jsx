import React from "react";
import "./Card.css";

const Card = ({emoji, heading, detail, color}) => {
  return (
    <div className="w-56 h-72 absolute flex flex-col gap-2 items-center text-center border-4 border-tara-orangeCard shadow-xl shadow-tara-purple rounded-lg py-3" style={{borderColor: {color}}}> 
      <img src={emoji} alt="" className="scale-50 -mb-7"/>
      <span className="text-gray-500">{heading}</span>
      <span className="text-sm font-light">{detail}</span>
      <button className="bg-white rounded-md border-none text-lg text-blue-600 shadow-lg px-3 py-2 shadow-tara-purple">LEARN MORE</button>
    </div>
  );
};

export default Card;
