import React from 'react'
import Video from './Video'

const ConceptWithTara = () => {
  const yt = [ 
    
    {
      id : "EtagbfGJeQ8"
    },
    {
      id : "X0km-zReIVc"
    },
    {
      id : "0NgtZGPPRjc"
    },
    {
      id : "0NgtZGPPRjc"
    },
    {
      id : "qNq6Zr_a0Tg"
    },
    {
      id : "CHy15M2xLZU"
    },
    {
      id : "0oXZexZKUKc"
    },
    {
      id : "06wb8LmqsMQ"
    },
    {
      id : "Vqh35KQbJLw"
    },
    {
      id : "mRSW3WiQ3Iw"
    },
    {
      id : "VthC2qDzkbU"
    },
    {
      id : "e50Y_83ZnBQ"
    },
    {
      id : "ClK0S9lRBO8"
    },
    {
      id : "1vcMmUiSJws"
    },
    {
      id : "GI4kmG_3tGo"
    },
  ]
  return (
    <div id='youtube'>
        <div>
            <div className='py-10 md:py-20 lg:py-28'>
                <h1 className='text-4xl text-tara-orange md:text-4xl lg:text-6xl font-bold text-center'>YouTube</h1>
            </div>
            <div className='md:flex gap-5 md:flex-wrap md:justify-center lg:container lg:mx-auto lg:px-16'>
              {
                yt.map((item)=>(
                  <Video {...item} />
                ))
              }
            </div>
            <div className='flex justify-center items-center lg:my-4'>
              <a href="https://www.youtube.com/channel/UClcattAZ7ABgZpvUxAC_IVw" target=" _blank">
                <button className='bg-gradient-to-r border-2 border-tara-orange from-tara-yellow to-tara-orange rounded-full px-24 py-2 text-white shadow-2xl shadow-tara-yellow hover:bg-gradient-to-r hover:from-white hover:to-white hover:text-tara-yellow hover:shadow-none'>Show More</button>
                </a>
            </div>
        </div>
    </div>
  )
}

export default ConceptWithTara;