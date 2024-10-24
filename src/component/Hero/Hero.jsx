import React from "react";

import hero from "../../img/hero.png";
import Typewriter from "typewriter-effect";

const Hero = () => {
  return (
    <>
      <div
        className="px-4 lg:container lg:mx-auto lg:px-16 flex flex-col lg:flex-row lg:mb-48 w-full lg:py-10"
        id="Navbar"
      >
        <div className="flex flex-col h-full relative w-full lg:w-1/2 lg:mb-40 py-5">
          <div className="flex flex-col gap-3 py-5">
            <span className="text-4xl md:text-5xl lg:text-6xl">Hy! I Am</span>
            <span className="App text-3xl text-tara-orange md:text-5xl lg:text-6xl">
              <Typewriter
                loop={true}
                onInit={(typewriter) => {
                  typewriter
                    .typeString(
                      'Tara Chand Kumawat <strong style="font-size: 50px;"> </br>Full Stack Developer</strong>'
                    )
                    .pauseFor(30)
                    .deleteChars(20)
                    .typeString(
                      '<strong><span style="color: #27ae60; margin-top:15px; font-size: 50px;"></br> Software Development Engineer</span></strong>'
                    )
                    .pauseFor(100)
                    .start();
                }}
              />
            </span>
          </div>
          <div className="lg:hidden w-full rounded-lg border-tara-yellow border-4">
            <img src={hero} alt="hero" className="w-full h-full rounded-lg scale-105" />
          </div>
          <div className="my-2 lg:w-11/12">
            <span className="text-gray-600 md:text-xl">
              Software Development Engineer with 2 years of experience in web
              development, producting the Quality work
            </span>
          </div>
          <div className="my-8 flex gap-2">
            <h1 className="text-2xl md:text-5xl lg:text-6xl text-tara-orange font-light">
              Connect With me
            </h1>
            <div className="flex">
              <img
                src="https://www.freepnglogos.com/uploads/cursor-png/click-cursor-finger-hand-press-tap-icon-22.png"
                alt="cursor"
                className="w-12 h-12 rotate-180"
              />
              <img
                src="https://www.freepnglogos.com/uploads/cursor-png/click-cursor-finger-hand-press-tap-icon-22.png"
                alt="cursor"
                className="w-12 h-12 rotate-180"
              />
            </div>
          </div>
          <div className="my-3 flex flex-wrap gap-10 justify-center items-center md:justify-start">
            <a href="https://github.com/tara122333" target=" _blank">
              <div className="w-14 h-14 lg:w-16 lg:h-16">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                  alt="github"
                  className="w-full h-full"
                />
              </div>
            </a>
            <a href="https://www.instagram.com/tarachand1904/" target=" _blank">
              <div className="w-14 h-14 lg:w-16 lg:h-16">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/640px-Instagram_icon.png"
                  alt="github"
                  className="w-full h-full"
                />
              </div>
            </a>
            <a
              href="https://www.linkedin.com/in/tara-chand-k-5544a2216"
              target=" _blank"
            >
              <div className="w-14 h-14 lg:w-16 lg:h-16">
                <img
                  src="https://openvisualfx.com/wp-content/uploads/2019/10/linkedin-icon-logo-png-transparent.png"
                  alt="github"
                  className="w-full h-full"
                />
              </div>
            </a>
            <a
              href="https://www.facebook.com/tarachandkumawat478"
              target=" _blank"
            >
              <div className="w-14 h-14 lg:w-16 lg:h-16">
                <img
                  src="https://www.edigitalagency.com.au/wp-content/uploads/Facebook-logo-blue-circle-large-transparent-png.png"
                  alt="github"
                  className="w-full h-full"
                />
              </div>
            </a>
            <a
              href="https://wa.me/+917229804925?text=Hii Tara. I'm hiring you because your skills are great !!."
              target=" _blank"
            >
              <div className="w-14 h-14 lg:w-16 lg:h-16">
                <img
                  src="https://seeklogo.com/images/W/whatsapp-icon-logo-BDC0A8063B-seeklogo.com.png"
                  alt="github"
                  className="w-full h-full"
                />
              </div>
            </a>
            <a href="tel:+917229804925" target=" _blank">
              <div className="w-14 h-14 lg:w-16 lg:h-16">
                <img
                  src="https://toppng.com/uploads/preview/phone-icon-green-11549499000phfvtgarix.png"
                  alt="github"
                  className="w-full h-full"
                />
              </div>
            </a>
          </div>
        </div>

        <div className="hidden lg:flex w-1/2 justify-end items-end h-screen scale-75 relative -top-20 bg-purple-200 rounded-3xl">
          <div className="relative bottom-0 left-0">
            <img
              src={hero}
              alt="vector"
              className="w-full h-full bg-cover scale-105"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
