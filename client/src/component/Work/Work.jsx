import React from 'react'
import { motion } from 'framer-motion';

// images
import Upwork from "../../img/Upwork.png";
import Fiverr from "../../img/fiverr.png";
import Amazon from "../../img/amazon.png";
import Shopify from "../../img/Shopify.png";
import Facebook from "../../img/Facebook.png";

import "./Works.css";

const Work = () => {

  return (
    <>
        <div className='px-4 lg:container lg:mx-auto lg:px-16 flex flex-col lg:flex-row w-full mb-32 lg:mb-10 py-10' id='works'>
            <div className='flex flex-col h-full relative w-full lg:w-1/2 mb-20'>
                <div className='flex flex-col gap-3 py-12'>
                    <span className='text-4xl md:text-5xl lg:text-6xl'>Works for All these</span>
                    <span className='text-6xl text-tara-orange md:text-6xl lg:text-7xl'>Brands & Clients</span>
                </div>
                <div className='my-5'>
                    <span className='text-gray-600'>Lorem ispum is simpley dummy text of printing of printing Lorem
ispum is simpley dummy text of printingLorem ispum is simpley dummy text
y dummy text of printingLorem
ispum is simpley dummy text of printing</span>
                </div>
                <div className='my-8'>
                    <button className='bg-gradient-to-r border-2 border-tara-orange from-tara-yellow to-tara-orange rounded-full px-8 py-2 text-white shadow-2xl shadow-tara-yellow hover:bg-gradient-to-r
                    hover:from-white hover:to-white hover:text-tara-yellow hover:shadow-none'>Hire Me</button>
                </div>
            </div>
            <div className='flex relative w-full h-full lg:w-1/2'>
                <motion.div
                initial={{ rotate: 45 }}
                whileInView={{ rotate: 0}}
                viewport={{ margin: "10px" }}
                transition={{ duration: 3.5, type: "spring" }}
                className="w-mainCircle shadow-2xl "
                >
                <div className="w-secCircle shadow-2xl">
                    <img src={Upwork} alt="" />
                </div>
                <div className="w-secCircle shadow-2xl">
                    <img src={Fiverr} alt="" />
                </div>
                <div className="w-secCircle shadow-2xl">
                    <img src={Amazon} alt="" />
                </div>
                <div className="w-secCircle shadow-2xl">
                    <img src={Shopify} alt="" />
                </div>
                <div className="w-secCircle shadow-2xl">
                    <img src={Facebook} alt="" />
                </div>
                </motion.div>
                <div className="w-backCircle blueCircle"></div>
                 <div className="w-backCircle yellowCircle"></div>
            </div>
        </div>
    </>
  )
}

export default Work;