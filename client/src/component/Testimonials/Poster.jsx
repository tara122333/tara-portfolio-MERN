import React from 'react'

const Poster = (props) => {
  return (
    <>
        <div className='flex flex-col justify-center items-center rounded-2xl border-8 border-tara-purple shadow-xl w-full h-full my-5 px-3 py-12 gap-6 lg:gap-10'>
            <div className='w-28 h-28'>
                <img src={props.img} alt="avatar" className='w-full h-full rounded-full'/>
            </div>
            <div>
                <span className='text-xl text-gray-500'>
                    {
                        props.title
                    }
                </span>
            </div>
        </div>
    </>
  )
}


export default Poster;