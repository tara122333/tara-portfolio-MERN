import React from 'react'
import { motion } from 'framer-motion';

// images

import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Resume from './resume.pdf';

import Card from '../Card/Card';

const Service = () => {

    const transition = { duration: 2, type: "spring" };

  return (
    <>
        <div className='px-4 lg:container lg:mx-auto lg:px-16 my-10 flex flex-col lg:flex-row w-full mt-96'>
            <div className='flex flex-col h-full relative w-full lg:w-1/2 mb-20 lg:mb-0'>
                <div className='flex flex-col gap-3 py-12'>
                    <span className='text-4xl md:text-5xl lg:text-6xl'>My Awesome</span>
                    <span className='text-6xl text-tara-orange md:text-6xl lg:text-7xl'>Services</span>
                </div>
                <div className='my-5'>
                    <span className='text-gray-600'>Frontend Developer with high level of experience in web designing and development, producting the Quality work</span>
                </div>
                <div className='my-8'>
                    <a href={Resume} download>
                        <button className='bg-gradient-to-r border-2 border-tara-orange from-tara-yellow to-tara-orange rounded-full px-8 py-2 text-white shadow-2xl shadow-tara-yellow hover:bg-gradient-to-r
                    hover:from-white hover:to-white hover:text-tara-yellow hover:shadow-none'>Download CV</button>
                    </a>
                </div>
                {/* <div className="relative my-96 w-96 h-72 rounded-full bg-tara-purple blur-3xl -z-10 top-96 -left-96" style={{ background: "#ABF1FF94" }}></div> */}
            </div>
            <div className='hidden md:flex relative w-full h-full lg:w-1/2'>
                
            <motion.div
          initial={{ left: "25rem" }}
          whileInView={{ left: "14rem" }}
          transition={transition}
          className="relative"
        >
          <Card
            emoji={HeartEmoji}
            heading={"Design"}
            detail={"Figma, Sketch, Photoshop, Adobe Illustrator, Adobe xd"}
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
            heading={"Developer"}
            detail={"Html, Css, JavaScript, React, Nodejs, Express"}
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
            heading={"UI/UX"}
            detail={
              "Lorem ispum dummy text are usually use in section where we need some random text"
            }
            color="rgba(252, 166, 31, 0.45)"
            className="relative"
          />
        </motion.div>
            </div>


            <div className='flex md:hidden relative w-full h-full flex-wrap'>
            <motion.div
          initial={{ left: "0rem" }}
          whileInView={{ left: "10rem" }}
          transition={transition}
          className="relative"
        >
          <Card
            emoji={HeartEmoji}
            heading={"Design"}
            detail={"Figma, Sketch, Photoshop, Adobe Illustrator, Adobe xd"}
            className="relative"
          />
        </motion.div>
        {/* second card */}
        <motion.div
          initial={{ left: "10rem", top: "20rem" }}
          whileInView={{ left: "0rem" }}
          transition={transition}
          className="relative"
        >
          <Card
            emoji={Glasses}
            heading={"Developer"}
            detail={"Html, Css, JavaScript, React, Nodejs, Express"}
            className="relative"
          />
        </motion.div>
        {/* 3rd */}
        <motion.div
          initial={{ top: "40rem", left: "0rem" }}
          whileInView={{ left: "10rem" }}
          transition={transition}
          className="relative"
        >
          <Card
            emoji={Humble}
            heading={"UI/UX"}
            detail={
              "Lorem ispum dummy text are usually use in section where we need some random text"
            }
            color="rgba(252, 166, 31, 0.45)"
            className="relative"
          />
        </motion.div>
            </div>
        </div>
    </>
  )
}

export default Service;