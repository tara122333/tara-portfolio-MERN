import React from 'react'

const CertificatePoster = (props) => {
  return (
    <div>
        <div className='flex flex-col gap-4 w-full md:w-96'>
            <div className='w-full rounded-t-lg h-64 md:h-72 lg:h-80 border-2 border-black'>
                <img src={props.img} alt="certificate" className="w-full h-full rounded-t-lg" />
            </div>
            <div>
                <a href={props.certificates} download>
                    <button className='bg-gradient-to-r border border-tara-orange from-tara-yellow to-tara-orange rounded-lg px-2 py-1 text-white shadow-lg lg:shadow-xl lg:px-4 shadow-tara-yellow hover:bg-gradient-to-r hover:from-white hover:to-white hover:text-tara-yellow hover:shadow-none'>
                        Download Certificate
                    </button>
                </a>
            </div>
        </div>
    </div>
  )
}

export default CertificatePoster