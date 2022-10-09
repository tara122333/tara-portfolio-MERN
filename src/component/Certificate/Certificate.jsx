import React from 'react'
import CertificatePoster from './CertificatePoster'
import tcs from '../image/tcs.png'
import saas from '../image/saas.png'
import campus from '../image/campus.png'
import AppDevelopment from '../image/AppDevelopment.png'
import TarachandTcscertificate from './TarachandTcscertificate.pdf'
import TarachandSaasDekhocertificate from './TarachandSaasDekhocertificate.pdf'
import TarachandSkillVertex from './TarachandSkillVertex.pdf'
import TarachandAppDevelopment from './TarachandAppDevelopment.pdf'

const Certificate = () => {
  return (
    <div id='certificate'>
        <div>
            <div className='py-10 md:py-20 lg:py-28'>
                <h1 className='text-4xl text-tara-orange md:text-4xl lg:text-6xl font-bold text-center'>My Certificate</h1>
            </div>
            <div className='flex flex-col md:flex-row gap-5 md:flex-wrap md:justify-center lg:container lg:mx-auto lg:px-16 px-3'>
                <CertificatePoster img={tcs} certificates={TarachandTcscertificate} />
                <CertificatePoster img={saas} certificates={TarachandSaasDekhocertificate} />
                <CertificatePoster img={campus} certificates={TarachandSkillVertex} />
                <CertificatePoster img={AppDevelopment} certificates={TarachandAppDevelopment} />
            </div>
        </div>
    </div>
  )
}

export default Certificate