import React from 'react'
import { Link } from "react-scroll";

import Example from './Toggel';

const NavbarLG = () =>{
    return(
        <>
            <div className='flex justify-between items-center w-full p-4'>
                <div className='flex gap-3'>
                    <h1 className='text-3xl font-bold'>PortFolio</h1>
                    {/* <span>button</span> */}
                </div>
                <div className='flex gap-9 items-center'>
                    <div>
                        <ul className='flex gap-9'>
                            <li className='text-xl font-medium hover:text-tara-orange cursor-pointer'>
                            <Link activeClass="active" to="Navbar" spy={true} smooth={true}>
                                Home
                            </Link>
                            </li>
                            <li className='text-xl font-medium hover:text-tara-orange cursor-pointer'>
                            <Link activeClass="active" to="services" spy={true} smooth={true}>
                                Services
                            </Link>
                            </li>
                            <li className='text-xl font-medium hover:text-tara-orange cursor-pointer'>
                            <Link activeClass="active" to="projects" spy={true} smooth={true}>
                            Projects
                            </Link></li>
                            {/* <li className='text-xl font-medium hover:text-tara-orange cursor-pointer'>
                            <Link activeClass="active" to="youtube" spy={true} smooth={true}>
                            ConceptWithTara
                            </Link></li> */}
                            <li className='text-xl font-medium hover:text-tara-orange cursor-pointer'>
                            <Link activeClass="active" to="testimonial" spy={true} smooth={true}>
                            Testimonal
                            </Link></li>
                        </ul>
                    </div>
{/*                     
                    <Link to="contact" spy={true} smooth={true}>
                        <button className='bg-gradient-to-r border-2 border-tara-orange from-tara-yellow to-tara-orange rounded-full px-8 py-2 text-white shadow-2xl shadow-tara-yellow hover:bg-gradient-to-r
                        hover:from-white hover:to-white hover:text-tara-yellow hover:shadow-none'>
                            Contact
                        </button>
                    </Link> */}
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
                    <h1 className='text-2xl md:text-3xl font-semibold md:font-bold'>PortFolio</h1>
                    {/* <span>button</span> */}
                </div>
                <div>
                    {/* <button className='bg-gradient-to-r from-tara-yellow to-tara-orange rounded-full px-8 py-2 text-white shadow-2xl shadow-tara-yellow'>Contact</button> */}
                    <Example />
                </div>
            </div>
        </>
    )
}

function Navbar() {
  return (
    <>
        <div className='hidden lg:flex w-full px-16'>
            <NavbarLG />
        </div>
        <div className='flex lg:hidden'>
            <NavbarSM />
        </div>
    </>
  )
}

export default Navbar;