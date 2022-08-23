import React from "react";
import "./Contact.css";
const Contact = () => {

  return (
    <div className="contact-form" id="contact">
      {/* left side copy and paste from work section */}
      <div className="w-left">
          <div className='flex flex-col items-center gap-6 lg:gap-12 py-12 w-full h-full'>
                    <span className='text-4xl md:text-5xl lg:text-6xl'>Get in Touch</span>
                    <span className='text-6xl text-tara-orange md:text-6xl lg:text-7xl'>Contact me</span>
            </div>
      </div>
      {/* right side form */}
      <div className="c-right">
        <form>
          <input type="text" name="user_name" className="user border-tara-yellow border-2"  placeholder="Name"/>
          <input type="email" name="user_email" className="user border-tara-yellow border-2" placeholder="Email"/>
          <textarea name="message" className="user border-tara-yellow border-2" placeholder="Message"/>
          <input type="submit" value="Send" className='bg-gradient-to-r border-2 border-tara-orange from-tara-yellow to-tara-orange rounded-full px-8 py-2 text-white shadow-2xl shadow-tara-yellow hover:bg-gradient-to-r
                    hover:from-white hover:to-white hover:text-tara-yellow hover:shadow-none cursor-pointer'/>
          <div
            className="blur c-blur1"
            style={{ background: "var(--purple)" }}
          ></div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
