import React from 'react'


const Client = (props) => {
  return (
    <div className='flip-card px-2'>
      <div className='flip-card-inner'>
        <div className='flex flex-col justify-center items-center border-2 border-tara-orange px-3 py-12 cursor-pointer gap-3 rounded-lg flip-card-front w-full'>

            <div className='w-32 h-32 rounded-full'>
              <img src={props.img} alt="client" className='w-full h-full rounded-full' />
            </div>
            <h2 className='text-tara-black text-xl font-bold after:text-white'>
              {
                props.name
              }
            </h2>
            <h3 className='text-gray-500 text-2xl my-2'>
              {
                props.company
              }
            </h3>
        </div>





        <div class="flip-card-back rounded-lg flex justify-center items-center flex-col gap-6 cursor-pointer">
          <h1 className='text-white text-base'>
            {
                props.title
            }
            </h1> 
          <a href={ props.link} target=" _blank">
            <button className="flex justify-center items-center gap-3 md:gap-6 bg-gradient-to-r from-tara-yellow to-tara-orange rounded-full px-16 py-2 text-white hover:shadow-md hover:bg-gradient-to-r hover:from-tara-purple hover:to-tara-blueCard hover:text-tara-black font-bold">
              Profile
            </button>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Client;