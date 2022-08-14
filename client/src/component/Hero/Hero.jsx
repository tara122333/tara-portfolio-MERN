import React from 'react'
import { motion } from "framer-motion";

// images

import github from '../../img/github.png';
import instagram from '../../img/instagram.png';
import linkedin from '../../img/linkedin.png';
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import boy from "../../img/boy.png";
import glassesimoji from "../../img/glassesimoji.png";
import thumbup from "../../img/thumbup.png";
import crown from "../../img/crown.png";
const Hero = () => {

  return (
    <>
        <div className='px-4 lg:container lg:mx-auto lg:px-16 my-10 flex flex-col lg:flex-row w-full'>
            <div className='flex flex-col h-full relative w-full lg:w-1/2 mb-20 lg:mb-0'>
                <div className='flex flex-col gap-3 py-12'>
                    <span className='text-4xl md:text-5xl lg:text-6xl'>Hy! I Am</span>
                    <span className='text-6xl text-tara-orange md:text-6xl lg:text-7xl'>Tara Chand Kumawat</span>
                </div>
                <div className='my-5'>
                    <span className='text-gray-600'>Frontend Developer with high level of experience in web designing and development, producting the Quality work</span>
                </div>
                <div className='my-8'>
                    <button className='bg-gradient-to-r from-tara-yellow to-tara-orange rounded-full px-8 py-2 text-white shadow-2xl shadow-tara-yellow'>Hire Me</button>
                </div>
                <div className='my-8 flex gap-10 justify-center items-center md:justify-start'>
                    <div className='w-14 h-14 lg:w-16 lg:h-16'>
                        <img src={github} alt="github"  className='w-full h-full'/>
                    </div>
                    <div className='w-14 h-14 lg:w-16 lg:h-16'>
                        <img src={instagram} alt="github"  className='w-full h-full'/>
                    </div>
                    <div className='w-14 h-14 lg:w-16 lg:h-16'>
                        <img src={linkedin} alt="github"  className='w-full h-full'/>
                    </div>
                </div>
            </div>
            <div className='flex relative w-full h-full lg:w-1/2'>
                <div className='absolute z-30 w-full h-80 lg:h-96 top-32 -left-5 md:scale-y-150 lg:scale-90 lg:top-20'>
                    <img src={Vector1} alt="vector" className='w-full h-full'/>
                </div>
                <div className='absolute z-30 w-full top-32 h-96 lg:h-auto lg:scale-75 
                md:scale-y-125 lg:top-12 lg:left-14'>
                    <img src={Vector2} alt="vector" className='w-full h-full'/>
                </div>
                <div className='absolute z-30 w-96 md:scale-125 md:left-40 md:-top-3 lg:top-10 lg:left-48 lg:scale-110'>
                    <img src={boy} alt="vector" className='w-full h-full'/>
                </div>
            <div className="relative w-96 h-72 rounded-full bg-tara-orange blur-3xl -z-10 left-2/4 -top-5" style={{ background: "rgb(138 210 255)" }}></div>
            <div className="relative w-96 h-72 rounded-full bg-tara-purple blur-3xl -z-10 top-96 -left-96" style={{ background: "rgb(238 210 255)" }}></div>
            </div>
        </div>
    </>
  )
}

export default Hero