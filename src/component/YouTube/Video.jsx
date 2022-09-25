import React from 'react'

const Video = (props) => {
  return (
    <div>
        <div className='px-2 py-5 w-full'>
          {/* <div className='w-full h-96 md:w-96' style={{height: "40rem"}}>
              <iframe src={`https://www.youtube.com/embed/1vcMmUiSJws`} className='w-full h-full rounded-lg'>
              </iframe>
          </div> */}
          <div className='w-full h-96 md:w-96' style={{height: "40rem"}}>
              <iframe src={`https://www.youtube.com/embed/${props.id}`} className='w-full h-full rounded-lg'>
              </iframe>
          </div>
        </div>
    </div>
  )
}

export default Video;