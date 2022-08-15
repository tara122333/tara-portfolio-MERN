import React from "react";
// import Slider from "react-slick";
import profilePic1 from "../../img/profile1.jpg";
import profilePic2 from "../../img/profile2.jpg";
import profilePic3 from "../../img/profile3.jpg";

import Poster from "./Poster";

const Testimonial = () => {

//   const settings = {
//     arrows: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 4,
//     slidesToScroll: 1,
// };

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
  ];

  return (
    <>
      <div className="flex justify-center items-center flex-col gap-5 relative" id="testimonial">
        <div className="items-start w-full">
          <div className='flex flex-col lg:flex-row justify-center items-center gap-6 py-12 w-full h-full'>
                <span className='text-4xl md:text-5xl lg:text-6xl'>Clients always get</span>
                <span className='text-6xl text-tara-orange md:text-6xl lg:text-7xl'>Exceptional Work </span>
                <span className='text-4xl md:text-5xl lg:text-6xl'>from me...</span>
          </div>
          <div className="relative w-96 rounded-full bg-tara-purple blur-3xl -z-10 left-2/4 -top-5" style={{ background: "rgb(138 210 255)" }}></div>
          <div className="relative w-96 rounded-full bg-sky-500 blur-3xl -z-10 top-96 -left-96" style={{ background: "rgb(238 210 255)" }}></div>
        </div>
          <div className="w-full px-4 py-2">
              <div className="flex flex-col lg:flex-row gap-4 lg:gap-8 w-full h-full">
                  {
                    clients.map((items)=>(
                      <Poster img={items.img} title={items.review}/>
                    ))
                  }
              </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;