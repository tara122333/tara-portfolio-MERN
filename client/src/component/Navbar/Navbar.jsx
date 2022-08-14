import React from 'react'



const NavbarLG = () =>{
    return(
        <>
            <div className='flex justify-between items-center w-full p-4'>
                <div className='flex gap-3'>
                    <h1 className='text-3xl font-bold'>Tara Chand</h1>
                    <span>button</span>
                </div>
                <div className='flex gap-9 items-center'>
                    <div>
                        <ul className='flex gap-9'>
                            <li className='text-xl font-medium hover:text-tara-orange'>Home</li>
                            <li className='text-xl font-medium hover:text-tara-orange'>Service</li>
                            <li className='text-xl font-medium hover:text-tara-orange'>Experience</li>
                            <li className='text-xl font-medium hover:text-tara-orange'>Portfolio</li>
                            <li className='text-xl font-medium hover:text-tara-orange'>Testimonal</li>
                        </ul>
                    </div>
                    <button className='bg-gradient-to-r from-tara-yellow to-tara-orange rounded-full px-8 py-2 text-white shadow-2xl shadow-tara-yellow'>Contact</button>
                </div>
            </div>
        </>
    )
}
const NavbarSM = () =>{
    return(
        <>
            <div className='flex justify-between items-center w-full px-3 py-2'>
                <div className='flex gap-3'>
                    <h1 className='text-2xl md:text-3xl font-semibold md:font-bold'>Tara Chand</h1>
                    <span>button</span>
                </div>
                <div>
                    <button className='bg-gradient-to-r from-tara-yellow to-tara-orange rounded-full px-8 py-2 text-white shadow-2xl shadow-tara-yellow'>Contact</button>
                </div>
            </div>
        </>
    )
}

function Navbar() {
  return (
    <>
        <div className='hidden lg:flex container mx-auto px-16'>
            <NavbarLG />
        </div>
        <div className='flex lg:hidden '>
            <NavbarSM />
        </div>
    </>
  )
}

export default Navbar;