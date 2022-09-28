import React from 'react'
import Video from './Video'

const ConceptWithTara = () => {
  const yt = [ 
    
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
    {
      id : "D9tGExcTk3I"
    },
    {
      id : "kUzNclcOv3A"
    },
    {
      id : "tpxuIRsIso0"
    },
    {
      id : "0pxAfKqVlw4"
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
        </div>
    </div>
  )
}

export default ConceptWithTara;