import React from "react";

const FloatinDiv = ({img, text1, text2}) => {
  return (
    // darkMode
    <div className="flex justify-around bg-white rounded-lg items-center pr-10 h-16 shadow-lg shadow-tara-orangeCard">
        <img src={img} alt="" className="scale-50" />
      <span className="text-black">
        {text1}
        <br/>
        {text2}
      </span>
    </div>
  );
};

export default FloatinDiv;
