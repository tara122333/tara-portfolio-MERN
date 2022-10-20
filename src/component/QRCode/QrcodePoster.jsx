import React from 'react'


const QRCodePoster = (props) => {
  return (
    <div className='flex justify-center items-center'>
      <div className='flip-qrcode px-2'>
      <div className='flip-qrcode-inner'>
        <div className='flex flex-col justify-center items-center border-2 border-tara-orange cursor-pointer gap-3 rounded-lg flip-qrcode-front w-full'>

            <div className='w-full h-full'>
              <img src="https://storage.googleapis.com/support-kms-prod/mQmcrC93Ryi2U4x5UdZNeyHQMybbyk71yCVm" alt="QRCode" className='w-full h-full rounded-lg' />
            </div>
            
        </div>





        <div class="flip-qrcode-back rounded-lg flex justify-center items-center flex-col gap-6 cursor-pointer px-4 lg:px-6 h-20"> 
            <div className='w-full h-40'>
              <img src="https://img.freepik.com/premium-vector/unique-qr-code-isolated-white-back_251819-2203.jpg?w=2000" alt="QRCode" className='w-full h-full' />
            </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default QRCodePoster;