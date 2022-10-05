import React from "react";

const Footer = () => {
  return (
    <div className="flex items-center justify-center h-full w-full bg-gradient-to-r border-tara-orange from-tara-yellow to-tara-orange py-10 lg:py-16">
      <div className="flex justify-center items-center flex-col w-full gap-5 text-white">
        <span className="text-xl lg:text-3xl text-gray-600 my-5">tarachand122333@gmail.com</span>
        <div className="flex gap-5">
          <a href="https://github.com/tara122333" target=" _blank">
            <div className="w-10 h-10 md:w-14 md:h-14 bg-white rounded-full">
              <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="logo" className="w-full h-full text-white"/>
            </div>
          </a>
          <a href="https://www.instagram.com/tarachand1904/" target=" _blank">
            <div className="w-10 h-10 md:w-14 md:h-14 bg-white rounded-lg">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/640px-Instagram_icon.png" alt="logo" className="w-full h-full text-white"/>
            </div>
          </a>
          <a href="https://www.linkedin.com/in/tara-chand-kumawat-5544a2216/" target=" _blank">
            <div className="w-10 h-10 md:w-14 md:h-14 bg-white rounded-lg">
              <img src="https://openvisualfx.com/wp-content/uploads/2019/10/linkedin-icon-logo-png-transparent.png" alt="logo" className="w-full h-full text-white"/>
            </div>
          </a>
          <a href="https://www.youtube.com/channel/UClcattAZ7ABgZpvUxAC_IVw" target=" _blank">
            <div className="w-20 h-10 md:w-28 md:h-14 bg-white rounded-lg">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/2560px-Logo_of_YouTube_%282015-2017%29.svg.png" alt="logo" className="w-full h-full text-white"/>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
