import React from 'react'

const Projects = (props) => {
  return (
    <>
        <div className='shadow-lg pb-8 rounded-lg w-80 md:w-96 container mx-auto lg:flex lg:flex-col lg:mx-0'>
            <div className='w-full rounded-t-lg'>
                <img src={props.image} alt="project" className='w-full h-full rounded-t-lg' />
            </div>
            <div className='py-4 px-3 w-full'>
                <h1 className='text-xl text-tara-black'>
                    {
                        props.title
                    }
                </h1>
                <h3 className='text-base text-gray-500'>
                    {
                        props.description
                    }
                </h3>
                <div className='flex gap-3 pt-6'>
                    <a href={props.live} target=" _blank">
                        <button className='bg-gradient-to-r border border-tara-orange from-tara-yellow to-tara-orange rounded-lg px-2 py-1 text-white shadowlg lg:shadow-xl lg:px-4 shadow-tara-yellow hover:bg-gradient-to-r
                        hover:from-white hover:to-white hover:text-tara-yellow hover:shadow-none'>
                            Live
                        </button>
                    </a>
                    <a href={props.source} target=" _blank">
                        <button className='bg-gradient-to-r border border-tara-orange from-tara-yellow to-tara-orange rounded-lg px-2 py-1 text-white shadow-lg lg:shadow-xl lg:px-4 shadow-tara-yellow hover:bg-gradient-to-r
                        hover:from-white hover:to-white hover:text-tara-yellow hover:shadow-none'>
                            Source Code
                        </button>
                    </a>
                    <a href={props.tutorial} target=" _blank">
                        <button className='bg-gradient-to-r border border-tara-orange from-tara-yellow to-tara-orange rounded-lg px-2 py-1 text-white shadow-lg lg:shadow-xl lg:px-4 shadow-tara-yellow hover:bg-gradient-to-r
                        hover:from-white hover:to-white hover:text-tara-yellow hover:shadow-none'>
                            Tutorial
                        </button>
                    </a>
                </div>  
            </div>
        </div>
    </>
  )
}

export default Projects