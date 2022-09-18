import React from 'react'
import { motion } from 'framer-motion';

// images
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
// import boy from "../../img/boy.png";
import tara from "../../img/tara.png";
import glassesimoji from "../../img/glassesimoji.png";
import thumbup from "../../img/thumbup.png";
import crown from "../../img/crown.png";
import Typewriter from "typewriter-effect";

import FloatinDiv from '../FloatingDiv/FloatingDiv';

const Hero = () => {

    const transition = { duration: 2, type: "spring" };

    // const app = document.getElementById('title');

    // var typewriter = new Typewriter(app, {
    // loop: true,
    // delay: 75,
    // autoStart: true,
    // });

    // typewriter.typeString('Tara Chand Kumawat <strong> </br>Web Developer</strong>').pauseFor(300).deleteChars(13).typeString('<strong><span style="color: #27ae60; margin-top:15px;"></br> MERN Stack Developer</span></strong>').pauseFor(1000).start();

  return (
    <>
        <div className='px-4 lg:container lg:mx-auto lg:px-16 flex flex-col lg:flex-row w-full mb-32 lg:py-10' id='Navbar'>
            <div className='flex flex-col h-full relative w-full lg:w-1/2 mb-36 py-5'>
                <div className='flex flex-col gap-3 py-5'>
                    <span className='text-4xl md:text-5xl lg:text-6xl'>Hy! I Am</span>
                    <span className='App text-3xl text-tara-orange md:text-5xl lg:text-6xl'>
                        <Typewriter
                        loop={true}
                        onInit={(typewriter)=> {
                    
                            typewriter
                            .typeString('Tara Chand Kumawat <strong> </br>Web Developer</strong>')
                            .pauseFor(30)
                            .deleteChars(13)
                            .typeString('<strong><span style="color: #27ae60; margin-top:15px;"></br> MERN Stack Developer</span></strong>')
                            .pauseFor(100)
                            .start();
                        }}
                        />
                    </span>
                </div>
                <div className='my-2'>
                <span className='text-gray-600'>MERN Stack Developer with Good level of experience in web designing and development, producting the Quality work</span>
                </div>
                <div className='my-8 flex gap-2'>
                    {/* <button className='bg-gradient-to-r border-2 border-tara-orange from-tara-yellow to-tara-orange rounded-full px-8 py-2 text-white shadow-2xl shadow-tara-yellow hover:bg-gradient-to-r
                    hover:from-white hover:to-white hover:text-tara-yellow hover:shadow-none'>Hire Me</button> */}
                    <h1 className='text-2xl md:text-5xl lg:text-6xl text-tara-orange font-light'>Connect With me</h1>
                    <div className='flex'>
                    <img src="https://www.freepnglogos.com/uploads/cursor-png/click-cursor-finger-hand-press-tap-icon-22.png" alt="cursor" className='w-12 h-12 rotate-180' />
                    <img src="https://www.freepnglogos.com/uploads/cursor-png/click-cursor-finger-hand-press-tap-icon-22.png" alt="cursor" className='w-12 h-12 rotate-180' />
                    </div>
                </div>
                <div className='my-3 flex flex-wrap gap-10 justify-center items-center md:justify-start'>
                    <a href='https://github.com/tara122333' target=' _blank'>
                        <div className='w-14 h-14 lg:w-16 lg:h-16'>
                            <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="github"  className='w-full h-full'/>
                        </div>
                    </a>
                    <a href='https://www.instagram.com/tarachand1904/' target=' _blank'>
                    <div className='w-14 h-14 lg:w-16 lg:h-16'>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/640px-Instagram_icon.png" alt="github"  className='w-full h-full'/>
                    </div>
                    </a>
                    <a href='https://www.linkedin.com/in/tara-chand-k-5544a2216' target=' _blank'>
                    <div className='w-14 h-14 lg:w-16 lg:h-16'>
                        <img src="https://openvisualfx.com/wp-content/uploads/2019/10/linkedin-icon-logo-png-transparent.png" alt="github"  className='w-full h-full'/>
                    </div>
                    </a>
                    <a href='https://www.facebook.com/tarachandkumawat478' target=' _blank'>
                    <div className='w-14 h-14 lg:w-16 lg:h-16'>
                        <img src="https://www.edigitalagency.com.au/wp-content/uploads/Facebook-logo-blue-circle-large-transparent-png.png" alt="github"  className='w-full h-full'/>
                    </div>
                    </a>
                    <a href="https://wa.me/+917229804925?text=Hii Tara" target=' _blank'>
                    <div className='w-14 h-14 lg:w-16 lg:h-16'>
                        <img src="https://seeklogo.com/images/W/whatsapp-icon-logo-BDC0A8063B-seeklogo.com.png" alt="github"  className='w-full h-full'/>
                    </div>
                    </a>
                    <a href="tel:+917229804925" target=' _blank'>
                    <div className='w-14 h-14 lg:w-16 lg:h-16'>
                        <img src="https://toppng.com/uploads/preview/phone-icon-green-11549499000phfvtgarix.png" alt="github"  className='w-full h-full'/>
                    </div>
                    </a>
                </div>
            </div>


            
            {/* <div className='hidden lg:flex relative w-full h-full lg:w-1/2'>
                <div className='absolute z-30 w-full h-80 lg:h-96 top-32 -left-5 md:scale-y-150 lg:scale-90 lg:top-20'>
                    <img src={Vector1} alt="vector" className='w-full h-full'/>
                </div>
                <div className='absolute z-30 w-full top-32 h-96 lg:h-auto lg:scale-75 
                md:scale-y-125 lg:top-12 lg:left-14'>
                    <img src={Vector2} alt="vector" className='w-full h-full'/>
                </div>
                <div className='absolute z-30 w-full top-32 -left-8 md:scale-75 md:-left-16 md:-top-24 lg:-top-20 lg:-left-4 lg:scale-90 -rotate-6'>
                    <div className='h-full w-full border-2 md:border-4 lg:border-8 border-x-tara-black rounded-full overflow-hidden'>
                        <img src={tara} alt="vector" className='w-full h-full'/>
                    </div>
                </div>

                <motion.img
                initial={{ left: "-40%" }}
                whileInView={{ left: "-18%" }}
                transition={transition}
                src={glassesimoji}
                alt=""
                className='absolute z-30 h-40 w-48'
                />

                <motion.div
                initial={{ top: "-6%", left: "74%" }}
                whileInView={{ left: "63%" }}
                transition={transition}
                className='absolute z-30 px-3'
                >
                <FloatinDiv img={crown} text1="Web" text2="Developer" />
                </motion.div>


                <motion.div
                initial={{ left: "9rem", top: "30rem" }}
                whileInView={{ left: "0rem" }}
                transition={transition}
                className='absolute z-30'
                >

                <FloatinDiv img={thumbup} text1="Best Design" text2="Award" />
                </motion.div>

            <div className="relative w-96 h-72 rounded-full bg-tara-orange blur-3xl -z-10 left-2/4 -top-5" style={{ background: "rgb(138 210 255)" }}></div>
            <div className="relative w-96 h-72 rounded-full bg-tara-purple blur-3xl -z-10 top-96 -left-96" style={{ background: "rgb(238 210 255)" }}></div>
            </div>



            <div className='flex lg:hidden relative w-full h-full lg:w-1/2'>
                <div className='absolute z-30 w-full h-80 lg:h-96 top-32 -left-5 md:scale-y-150 lg:scale-90 lg:top-20'>
                    <img src={Vector1} alt="vector" className='w-full h-full'/>
                </div>
                <div className='absolute z-30 w-full top-32 h-96 lg:h-auto lg:scale-75 
                md:scale-y-125 lg:top-12 lg:left-14'>
                    <img src={Vector2} alt="vector" className='w-full h-full'/>
                </div>
                <div className='absolute z-30 w-full top-32 -left-8 md:scale-75 md:-left-16 md:-top-24 lg:-top-20 lg:-left-4 lg:scale-90 -rotate-6'>
                    <div className='h-full w-full border-2 md:border-4 lg:border-8 border-x-tara-black rounded-full overflow-hidden'>
                        <img src={tara} alt="vector" className='w-full h-full'/>
                    </div>
                </div>

                <motion.img
                initial={{ left: "-40%" }}
                whileInView={{ left: "-18%" }}
                transition={transition}
                src={glassesimoji}
                alt=""
                className='absolute z-30 h-40 w-48'
                />

                <motion.div
                initial={{ top: "-6%", left: "74%" }}
                whileInView={{ left: "63%" }}
                transition={transition}
                className='absolute z-30 px-3'
                >
                <FloatinDiv img={crown} text1="Web" text2="Developer" />
                </motion.div>
                
                <motion.div
                initial={{ left: "9rem", top: "30rem" }}
                whileInView={{ left: "0rem" }}
                transition={transition}
                className='absolute z-30'
                >

                <FloatinDiv img={thumbup} text1="Best Design" text2="Award" />
                </motion.div>

            <div className="relative w-96 h-72 rounded-full bg-tara-orange blur-3xl -z-10 left-2/4 -top-5" style={{ background: "rgb(138 210 255)" }}></div>
            <div className="relative w-96 h-72 rounded-full bg-tara-purple blur-3xl -z-10 top-96 -left-96" style={{ background: "rgb(238 210 255)" }}></div>
            </div> */}
        </div>
    </>
  )
}

export default Hero