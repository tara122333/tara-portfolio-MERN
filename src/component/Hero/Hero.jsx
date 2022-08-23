import React from 'react'
import { motion } from 'framer-motion';

// images

import github from '../../img/github.png';
import instagram from '../../img/instagram.png';
import linkedin from '../../img/linkedin.png';
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
// import boy from "../../img/boy.png";
import tara from "../../img/tara.png";
import glassesimoji from "../../img/glassesimoji.png";
import thumbup from "../../img/thumbup.png";
import crown from "../../img/crown.png";


import FloatinDiv from '../FloatingDiv/FloatingDiv';
const Hero = () => {

    const transition = { duration: 2, type: "spring" };

  return (
    <>
        <div className='px-4 lg:container lg:mx-auto lg:px-16 my-10 flex flex-col lg:flex-row w-full mb-32  lg:py-10' id='Navbar'>
            <div className='flex flex-col h-full relative w-full lg:w-1/2 mb-20'>
                <div className='flex flex-col gap-3 py-12'>
                    <span className='text-4xl md:text-5xl lg:text-6xl'>Hy! I Am</span>
                    <span className='text-6xl text-tara-orange md:text-6xl lg:text-7xl'>Tara Chand Kumawat</span>
                </div>
                <div className='my-5'>
                    <span className='text-gray-600'>MERN Stack Developer with high level of experience in web designing and development, producting the Quality work</span>
                </div>
                <div className='my-8'>
                    <button className='bg-gradient-to-r border-2 border-tara-orange from-tara-yellow to-tara-orange rounded-full px-8 py-2 text-white shadow-2xl shadow-tara-yellow hover:bg-gradient-to-r
                    hover:from-white hover:to-white hover:text-tara-yellow hover:shadow-none'>Hire Me</button>
                </div>
                <div className='my-8 flex gap-10 justify-center items-center md:justify-start'>
                    <a href='https://github.com/tara122333' target=' _blank'>
                        <div className='w-14 h-14 lg:w-16 lg:h-16'>
                            <img src={github} alt="github"  className='w-full h-full'/>
                        </div>
                    </a>
                    <a href='https://www.instagram.com/tarachand1904/' target=' _blank'>
                    <div className='w-14 h-14 lg:w-16 lg:h-16'>
                        <img src={instagram} alt="github"  className='w-full h-full'/>
                    </div>
                    </a>
                    <a href='https://www.linkedin.com/in/tara-chand-kumawat-5544a2216/' target=' _blank'>
                    <div className='w-14 h-14 lg:w-16 lg:h-16'>
                        <img src={linkedin} alt="github"  className='w-full h-full'/>
                    </div>
                    </a>
                    
                    
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
                <div className='absolute z-30 w-full top-32 -left-8 md:scale-75 md:-left-16 md:-top-24 lg:-top-20 lg:-left-4 lg:scale-90 -rotate-6'>
                    <div className='h-full w-full border-2 md:border-4 lg:border-8 border-x-tara-black rounded-full overflow-hidden'>
                        <img src={tara} alt="vector" className='w-full h-full'/>
                    </div>
                </div>

                {/* <FloatinDiv img={crown} text1="Web" text2="Developer" />
                <FloatinDiv img={thumbup} text1="Best Design" text2="Award" /> */}

                <motion.img
                initial={{ left: "-40%" }}
                whileInView={{ left: "-18%" }}
                transition={transition}
                src={glassesimoji}
                alt=""
                className='absolute z-30 h-40 w-48'
                />

                <motion.div
                initial={{ top: "-6%", left: "74%" }}
                whileInView={{ left: "63%" }}
                transition={transition}
                className='absolute z-30 px-3'
                >
                <FloatinDiv img={crown} text1="Web" text2="Developer" />
                </motion.div>

                {/* animation */}
                <motion.div
                initial={{ left: "9rem", top: "30rem" }}
                whileInView={{ left: "0rem" }}
                transition={transition}
                className='absolute z-30'
                >
                {/* floatinDiv mein change hy dark mode ka */}
                <FloatinDiv img={thumbup} text1="Best Design" text2="Award" />
                </motion.div>

            <div className="relative w-96 h-72 rounded-full bg-tara-orange blur-3xl -z-10 left-2/4 -top-5" style={{ background: "rgb(138 210 255)" }}></div>
            <div className="relative w-96 h-72 rounded-full bg-tara-purple blur-3xl -z-10 top-96 -left-96" style={{ background: "rgb(238 210 255)" }}></div>
            </div>
        </div>
    </>
  )
}

export default Hero