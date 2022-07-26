import React from 'react'
import { motion } from 'framer-motion';

// images
import Upwork from "../../img/Upwork.png";
import Fiverr from "../../img/fiverr.png";
import Amazon from "../../img/amazon.png";
import Shopify from "../../img/Shopify.png";
import Facebook from "../../img/Facebook.png";

// import "./Works.css";

const Work = () => {

  return (
    <>
        <div className='px-4 lg:container lg:mx-auto lg:px-16 flex flex-col lg:flex-row w-full lg:mb-10 py-10' id='works'>
            <div className='flex flex-col h-full relative w-full lg:w-1/2 mb-20'>
                <div className='flex flex-col gap-3 py-12'>
                    <span className='text-4xl md:text-5xl lg:text-6xl'>Works for All these</span>
                    <span className='text-6xl text-tara-orange md:text-6xl lg:text-7xl'>Brands & Clients</span>
                </div>
                <div className='my-5'>
                    <span className='text-gray-600 md:text-xl'>
                    I am working on freelancing from 1 year in web technology. Fiverr and Upwork is my current platform for freelancing. Facebook, Amazon and others are my Clients.
                    </span>
                </div>
                <div className='my-8'>
                    {/* <button className='bg-gradient-to-r border-2 border-tara-orange from-tara-yellow to-tara-orange rounded-full px-8 py-2 text-white shadow-2xl shadow-tara-yellow hover:bg-gradient-to-r
                    hover:from-white hover:to-white hover:text-tara-yellow hover:shadow-none'>Hire Me</button> */}
                </div>
            </div>
            <div className='hidden lg:flex relative w-full h-full lg:w-1/2'>
                <motion.div
                initial={{ rotate: 45 }}
                whileInView={{ rotate: 0}}
                viewport={{ margin: "10px" }}
                transition={{ duration: 3.5, type: "spring" }}
                className="w-mainCircle relative left-14 lg:left-36 w-72 rounded-full top-8 z-20 shadow-2xl bg-white h-72"
                >
                <div className="w-secCircle w-24 h-24 flex rounded-full border-4 border-tara-blueCard justify-center items-center bg-white absolute -top-12 left-20 lg:left-20 shadow-2xl">
                    <img src={Upwork} alt="" className='scale-50'/>
                </div>
                <div className="w-secCircle w-24 h-24 flex rounded-full border-4 border-tara-blueCard justify-center items-center bg-white absolute -left-12 lg:-left-12 top-20 shadow-2xl">
                    <img src={Fiverr} alt="" className='scale-50'/>
                </div>
                <div className="w-secCircle w-24 h-24 flex rounded-full border-4 border-tara-blueCard justify-center items-center bg-white absolute left-20 lg:left-24 top-20 shadow-2xl">
                    <img src={Amazon} alt="" className='scale-50'/>
                </div>
                <div className="w-secCircle w-24 h-24 flex rounded-full border-4 border-tara-blueCard justify-center items-center bg-white absolute left-56 lg:left-60 top-20 shadow-2xl">
                    <img src={Shopify} alt="" className='scale-50'/>
                </div>
                <div className="w-secCircle w-24 h-24 flex rounded-full border-4 border-tara-blueCard justify-center items-center bg-white absolute left-20 lg:left-24 top-52 shadow-2xl">
                    <img src={Facebook} alt="" className='scale-50'/>
                </div>
                </motion.div>
                <div className="w-backCircle absolute w-52 h-52 rounded-full z-10 blueCircle bg-blue-600 left-44 lg:left-72 top-0"></div>
                 <div className="w-backCircle absolute w-52 h-52 rounded-full z-10 yellowCircle bg-tara-yellow left-44 lg:left-72 top-32"></div>
            </div>






            <div className='flex lg:hidden relative w-full h-full'>
                <motion.div
                initial={{ rotate: 45 }}
                whileInView={{ rotate: 0}}
                viewport={{ margin: "10px" }}
                transition={{ duration: 3.5, type: "spring" }}
                className="w-mainCircle relative left-10 lg:left-36 w-64 rounded-full top-8 z-20 shadow-2xl bg-white h-64"
                >
                <div className="w-secCircle w-24 h-24 flex rounded-full border-4 border-tara-blueCard justify-center items-center bg-white absolute -top-10 left-20 lg:left-20 shadow-2xl scale-75">
                    <img src={Upwork} alt="" className='scale-50'/>
                </div>
                <div className="w-secCircle w-24 h-24 flex rounded-full border-4 border-tara-blueCard justify-center items-center bg-white absolute -left-12 lg:-left-12 top-20 shadow-2xl scale-75">
                    <img src={Fiverr} alt="" className='scale-50'/>
                </div>
                <div className="w-secCircle w-24 h-24 flex rounded-full border-4 border-tara-blueCard justify-center items-center bg-white absolute left-20 lg:left-24 top-20 shadow-2xl scale-75">
                    <img src={Amazon} alt="" className='scale-50'/>
                </div>
                <div className="w-secCircle w-24 h-24 flex rounded-full border-4 border-tara-blueCard justify-center items-center bg-white absolute left-52 lg:left-60 top-20 shadow-2xl scale-75">
                    <img src={Shopify} alt="" className='scale-50'/>
                </div>
                <div className="w-secCircle w-24 h-24 flex rounded-full border-4 border-tara-blueCard justify-center items-center bg-white absolute left-20 top-48 shadow-2xl scale-75">
                    <img src={Facebook} alt="" className='scale-50'/>
                </div>
                </motion.div>
                <div className="w-backCircle absolute w-52 h-52 rounded-full z-10 blueCircle bg-blue-600 left-36 top-0 scale-75"></div>
                 <div className="w-backCircle absolute w-52 h-52 rounded-full z-10 yellowCircle bg-tara-yellow left-36 top-32 scale-75"></div>
            </div>
        </div>
    </>
  )
}

export default Work;