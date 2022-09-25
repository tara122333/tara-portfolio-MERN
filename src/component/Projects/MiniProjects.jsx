import React from 'react'
const Portfolio = () => {
  return (
    <>
        <div id='portfolio'>
        <div className='flex flex-col justify-center items-center h-full w-full mt-96 md:my-40 lg:my-0'>
            <div className='flex flex-col lg:flex-row justify-center items-center gap-6 lg:gap-12 py-12 w-full h-full'>
                    <span className='text-4xl md:text-5xl lg:text-6xl'>Recent Projects</span>
                    <span className='text-6xl text-tara-orange md:text-6xl lg:text-7xl'>Portfolio</span>
            </div>
        </div>
        </div>
    </>
  )
}

export default Portfolio;