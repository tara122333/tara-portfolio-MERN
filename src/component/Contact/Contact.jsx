import React from "react";
import "./Contact.css";
const Contact = () => {
  return (
    <div className="flex w-full" id="contact">
      <div className="flex flex-col w-full gap-5 md:flex-wrap md:justify-center lg:container lg:mx-auto lg:px-16 px-3">
        <div className="py-10 md:py-20 lg:py-28">
          <h1 className="text-4xl text-tara-orange md:text-4xl lg:text-6xl font-bold text-center">
            Get in Touch
          </h1>
        </div>
        <div className="flex gap-5 w-full flex-col lg:flex-row lg:gap-12">
          <div className="flex w-full min-h-[350px] lg:w-1/2">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d113874.30006216935!2d75.70815698269861!3d26.88533996496087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396c4adf4c57e281%3A0xce1c63a0cf22e09!2sJaipur%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1731949323983!5m2!1sen!2sin"
              width={"100%"}
              allowfullscreen="true"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              id="map"
              key={Math.random()}
              title="map"
            ></iframe>
          </div>
          <form className="flex w-full lg:w-1/2 flex-col gap-3 lg:gap-6">
            <input 
              type="text"
              name="user_name"
              className="border-tara-yellow border-2 py-2 px-3 rounded-lg w-full"
              placeholder="Name"
            />
            <input
              type="email"
              name="user_email"
              className="border-tara-yellow border-2 py-2 px-3 rounded-lg w-full"
              placeholder="Email"
            />
            <textarea
              name="message"
              className="border-tara-yellow border-2 py-2 px-3 rounded-lg w-full"
              placeholder="Message"
              rows={10}
            />
            <input
              type="submit"
              value="Send"
              className="bg-gradient-to-r border-2 border-tara-orange from-tara-yellow to-tara-orange rounded-full px-8 py-2 text-white shadow-2xl shadow-tara-yellow hover:bg-gradient-to-r
                    hover:from-white hover:to-white hover:text-tara-yellow hover:shadow-none cursor-pointer"
            />
            <div
              className="blur c-blur1"
              style={{ background: "var(--purple)" }}
            ></div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
