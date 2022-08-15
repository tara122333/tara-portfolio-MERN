import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";

import { Pagination } from "swiper";
import "swiper/css/pagination";
import './Testimonial.css';
import profilePic1 from "../../img/profile1.jpg";
import profilePic2 from "../../img/profile2.jpg";
import profilePic3 from "../../img/profile3.jpg";
import profilePic4 from "../../img/profile4.jpg";

const Testimonial = () => {
  const clients = [
    {
      img: profilePic1,
      review:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex officiis molestiae quod tempora laudantium, cumque error a nisi placeat quae exercitationem, maiores reiciendis! Eaque dicta minima, iure maiores dolorum sed.",
    },
    {
      img: profilePic2,
      review:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex officiis molestiae quod tempora laudantium, cumque error a nisi placeat quae exercitationem, maiores reiciendis! Eaque dicta minima, iure maiores dolorum sed.",
    },
    {
      img: profilePic3,
      review:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex officiis molestiae quod tempora laudantium, cumque error a nisi placeat quae exercitationem, maiores reiciendis! Eaque dicta minima, iure maiores dolorum sed.",
    },
    {
      img: profilePic4,
      review:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex officiis molestiae quod tempora laudantium, cumque error a nisi placeat quae exercitationem, maiores reiciendis! Eaque dicta minima, iure maiores dolorum sed.",
    },
  ];

  return (
    <>
      <div className="flex justify-center items-center flex-col gap-5 absolute" id="testimonial">
        <div className="items-start">
          <div className='flex flex-col lg:flex-row justify-center items-center gap-6 py-12 w-full h-full'>
                <span className='text-4xl md:text-5xl lg:text-6xl'>Clients always get</span>
                <span className='text-6xl text-tara-orange md:text-6xl lg:text-7xl'>Exceptional Work </span>
                <span className='text-4xl md:text-5xl lg:text-6xl'>from me...</span>
          </div>
          <div className="relative w-96 h-72 rounded-full bg-tara-orange blur-3xl -z-10 left-2/4 -top-5" style={{ background: "rgb(138 210 255)" }}></div>
            <div className="relative w-96 h-72 rounded-full bg-tara-purple blur-3xl -z-10 top-96 -left-96" style={{ background: "rgb(238 210 255)" }}></div>
        </div>
        <Swiper
          // install Swiper modules
          modules={[Pagination]}
          slidesPerView={1}
          pagination={{ clickable: true }}
        >
          {clients.map((client, index) => {
            return (
              <SwiperSlide key={index}>
                <div className="flex flex-col items-center justify-evenly w-full hfull p-5 bg-tara-blueCard shadow-xl shadow-tara-orange rounded-xl">
                  <img src={client.img} alt="" className="w-56 h-56 rounded-full" />
                  <span className="text-gray-500">{client.review}</span>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </>
  );
};

export default Testimonial;
