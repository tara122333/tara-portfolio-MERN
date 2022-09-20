import React from 'react'
import { motion } from 'framer-motion';

// images

import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Resume from './resume.pdf';

import Card from '../Card/Card';

const Service = () => {

    const transition = { duration: 1, type: "spring" };

  return (
    <>
    <div id='services'>
        <div className='px-4 lg:container lg:mx-auto lg:px-16 my-10 flex flex-col lg:flex-row w-full lg:py-10 lg:mt-24' >
            <div className='flex flex-col h-full relative w-full lg:w-1/2 mb-20 lg:mb-0'>
                <div className='flex flex-col gap-3 lg:py-12'>
                    <span className='text-3xl md:text-4xl lg:text-5xl'>My Awesome</span>
                    <span className='text-5xl text-tara-orange md:text-6xl lg:text-7xl font-bold'>Services</span>
                </div>
                <div className='my-5 lg:my-0 lg:w-2/3'>
                    <span className='text-gray-600 md:text-xl'>Full Stack Developer with Good level of experience in web designing and development, 
                    producting the Quality work. You can see my resume on the link given below</span>
                </div>
                <div className='my-8 lg:my-4 flex flex-col gap-5'>
                  <div className='w-80 h-80'>
                    <img src="https://c.tenor.com/tX_T48A14BwAAAAd/khaby-really.gif" alt="sticker" className='w-full h-full rounded-lg' />
                  </div>
                    <div className='flex flex-col gap-5 md:flex-row'>
                      <a href={Resume} download>
                          <button className='bg-gradient-to-r border-2 border-tara-orange from-tara-yellow to-tara-orange rounded-full px-8 py-2 text-white shadow-2xl shadow-tara-yellow hover:bg-gradient-to-r
                      hover:from-white hover:to-white hover:text-tara-yellow hover:shadow-none'>Download Resume</button>
                      </a>
                      <a href="https://tara122333.github.io/Tara_Resume/" target=" _blank">
                          <button className='bg-gradient-to-r border-2 border-tara-orange from-tara-yellow to-tara-orange rounded-full px-8 py-2 text-white shadow-2xl shadow-tara-yellow hover:bg-gradient-to-r
                      hover:from-white hover:to-white hover:text-tara-yellow hover:shadow-none'>Live</button>
                      </a>
                    </div>
                </div>
                {/* <div className="relative my-96 w-96 h-72 rounded-full bg-tara-purple blur-3xl -z-10 top-96 -left-96" style={{ background: "#ABF1FF94" }}></div> */}
            </div>
            <div className='hidden lg:flex relative w-full h-full lg:w-1/2'>
                
            <motion.div
          initial={{ left: "25rem" }}
          whileInView={{ left: "14rem" }}
          transition={transition}
          className="relative"
        >
          <Card
            emoji={HeartEmoji}
            heading={"Front-end"}
            detail={"Html, Css, React, BootStrap, TailwindCss"}
            className="relative"
          />
        </motion.div>
        {/* second card */}
        <motion.div
          initial={{ left: "-11rem", top: "12rem" }}
          whileInView={{ left: "-4rem" }}
          transition={transition}
          className="relative"
        >
          <Card
            emoji={Glasses}
            heading={"Back-end"}
            detail={"Nodejs, Express, MongoDB, Docker, AWS"}
            className="relative"
          />
        </motion.div>
        {/* 3rd */}
        <motion.div
          initial={{ top: "19rem", left: "25rem" }}
          whileInView={{ left: "12rem" }}
          transition={transition}
          className="relative"
        >
          <Card
            emoji={Humble}
            heading={"Programming"}
            detail={
              "C, C++, Java, Python, JavaScript"
            }
            color="rgba(252, 166, 31, 0.45)"
            className="relative"
          />
        </motion.div>
            </div>



            <div className='flex lg:hidden relative w-full h-full flex-wrap mb-96'>
            <motion.div
          initial={{ left: "0rem" }}
          whileInView={{ left: "5rem" }}
          transition={transition}
          className="relative"
        >
          <Card
            emoji={HeartEmoji}
            heading={"Front-end"}
            detail={"Html, Css, React, BootStrap, TailwindCss"}
            className="relative"
          />
        </motion.div>
        {/* second card */}
        <motion.div
          initial={{ left: "5rem", top: "20rem" }}
          whileInView={{ left: "0rem" }}
          transition={transition}
          className="relative"
        >
          <Card
            emoji={Glasses}
            heading={"Back-end"}
            detail={"Nodejs, Express, MongoDB, Docker, AWS"}
            className="relative"
          />
        </motion.div>
        {/* 3rd */}
        <motion.div
          initial={{ top: "40rem", left: "0rem" }}
          whileInView={{ left: "5rem" }}
          transition={transition}
          className="relative"
        >
          <Card
            emoji={Humble}
            heading={"Programming"}
            detail={
              "C, C++, Java, Python, JavaScript"
            }
            color="rgba(252, 166, 31, 0.45)"
            className="relative"
          />
        </motion.div>
            </div>
        </div>
        </div>
    </>
  )
}

export default Service;