import React from 'react'
import Sidebar from "../../img/sidebar.png";
import Ecommerce from "../../img/ecommerce.png";
import MusicApp from "../../img/musicapp.png";

const Portfolio = () => {
  return (
    <>
        <div id='portfolio'>
        <div className='flex flex-col justify-center items-center h-full w-full my-96 md:my-40 lg:my-0'>
            <div className='flex flex-col lg:flex-row justify-center items-center gap-6 lg:gap-12 py-12 w-full h-full'>
                    <span className='text-4xl md:text-5xl lg:text-6xl'>Recent Projects</span>
                    <span className='text-6xl text-tara-orange md:text-6xl lg:text-7xl'>Portfolio</span>
            </div>
            <div className='flex flex-col w-full lg:flex-row'>
                <div className='w-full lg:w-1/3 h-full px-4 py-3 '>
                    <img src={Sidebar} alt="portfolio" className='w-full h-full rounded-lg' />
                </div>
                <div className='w-full lg:w-1/3 h-full px-4 py-3 '>
                    <img src={MusicApp} alt="portfolio" className='w-full h-full rounded-lg' />
                </div>
                <div className='w-full lg:w-1/3 h-full px-4 py-3 '>
                    <img src={Ecommerce} alt="portfolio" className='w-full h-full rounded-lg' />
                </div>
            </div>
        </div>
        </div>
    </>
  )
}

export default Portfolio;