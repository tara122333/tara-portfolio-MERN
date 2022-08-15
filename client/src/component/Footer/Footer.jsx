import React from "react";
import Wave from "../../img/wave.png";
import github from '../../img/github.png';
import instagram from '../../img/instagram.png';
import linkedin from '../../img/linkedin.png';

const Footer = () => {
  return (
    <div className="flex items-center relative justify-center h-full">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="absolute flex justify-center items-center flex-col w-full gap-5 text-white sm:scale-50 md:gap-10 lg:scale-100">
        <span className="text-3xl text-gray-600 my-5">tarachand122333@gmail.com</span>
        <div className="flex gap-5">
          <a href="https://www.google.com" target=" _blank">
            <div className="w-10 h-10 md:w-14 md:h-14 bg-white rounded-full p-1">
              <img src={github} alt="logo" className="w-full h-full text-white"/>
            </div>
          </a>
          <a href="https://www.google.com" target=" _blank">
            <div className="w-10 h-10 md:w-14 md:h-14 bg-white rounded-lg p-1">
              <img src={instagram} alt="logo" className="w-full h-full text-white"/>
            </div>
          </a>
          <a href="https://www.google.com" target=" _blank">
            <div className="w-10 h-10 md:w-14 md:h-14 bg-white rounded-lg p-2">
              <img src={linkedin} alt="logo" className="w-full h-full text-white"/>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
