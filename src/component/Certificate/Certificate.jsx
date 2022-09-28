import React from 'react'
import CertificatePoster from './CertificatePoster'
import tcs from '../image/tcs.png'
import tcscertificate from './tcscertificate.pdf'

const Certificate = () => {
  return (
    <div id='certificate'>
        <div>
            <div className='py-10 md:py-20 lg:py-28'>
                <h1 className='text-4xl text-tara-orange md:text-4xl lg:text-6xl font-bold text-center'>My Certificate</h1>
            </div>
            <div className='md:flex gap-5 md:flex-wrap md:justify-center lg:container lg:mx-auto lg:px-16'>
                <CertificatePoster img={tcs} certificates={tcscertificate} />
            </div>
        </div>
    </div>
  )
}

export default Certificate