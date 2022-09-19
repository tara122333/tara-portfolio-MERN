import React from "react";
// import Slider from "react-slick";
import profilePic1 from "../../img/profile1.jpg";
import profilePic2 from "../../img/profile2.jpg";
import profilePic3 from "../../img/profile3.jpg";
import Client from "./Client";


import Slider from 'react-slick';



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
      img : "https://media-exp1.licdn.com/dms/image/C4D03AQFLhXZMotSC3A/profile-displayphoto-shrink_800_800/0/1656750765178?e=1665014400&v=beta&t=wu_Pi1j4emrJjUHpBenn9r7vTJq4eygZPFnqa9JoPyg",
      name : "Tara Chand Kumawat",
      title : "Seeking to get good learning guidance and career growth opportunities and improve my ability to thrive in a challenging environment where efficiency and accuracy matters.", time : "1",
      company : "Google",
      link : "https://www.linkedin.com/in/tara-chand-k-5544a2216"
    },
    {
      img : "https://media-exp1.licdn.com/dms/image/C4D03AQFLhXZMotSC3A/profile-displayphoto-shrink_800_800/0/1656750765178?e=1665014400&v=beta&t=wu_Pi1j4emrJjUHpBenn9r7vTJq4eygZPFnqa9JoPyg",
      name : "Tara Chand Kumawat",
      title : "Seeking to get good learning guidance and career growth opportunities and improve my ability to thrive in a challenging environment where efficiency and accuracy matters.", time : "1",
      company : "Google",
      link : "https://www.linkedin.com/in/tara-chand-k-5544a2216"
    },
    {
      img : "https://media-exp1.licdn.com/dms/image/C4D03AQFLhXZMotSC3A/profile-displayphoto-shrink_800_800/0/1656750765178?e=1665014400&v=beta&t=wu_Pi1j4emrJjUHpBenn9r7vTJq4eygZPFnqa9JoPyg",
      name : "Tara Chand Kumawat",
      title : "Seeking to get good learning guidance and career growth opportunities and improve my ability to thrive in a challenging environment where efficiency and accuracy matters.", time : "1",
      company : "Google",
      link : "https://www.linkedin.com/in/tara-chand-k-5544a2216"
      
    },
    {
      img : "https://media-exp1.licdn.com/dms/image/C4D03AQFLhXZMotSC3A/profile-displayphoto-shrink_800_800/0/1656750765178?e=1665014400&v=beta&t=wu_Pi1j4emrJjUHpBenn9r7vTJq4eygZPFnqa9JoPyg",
      name : "Tara Chand Kumawat",
      title : "Seeking to get good learning guidance and career growth opportunities and improve my ability to thrive in a challenging environment where efficiency and accuracy matters.", time : "1",
      company : "Google",
      link : "https://www.linkedin.com/in/tara-chand-k-5544a2216"
    },
  ];


  const settings = {
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            nextArrow:false,
            prevArrow: false,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            nextArrow: false,
            prevArrow: false,
          },
        },
      ],
};

  return (
    <>
      <div className="flex justify-center items-center flex-col gap-5 relative" id="testimonial">
        <div className="items-start w-full">
          <div className='flex flex-col lg:flex-row justify-center items-center gap-6 py-12 w-full h-full px-5'>
                <span className='text-3xl md:text-4xl lg:text-5xl'>Clients always get</span>
                <span className='text-4xl text-tara-orange md:text-4xl lg:text-6xl font-bold'>Exceptional Work </span>
                <span className='text-3xl md:text-4xl lg:text-5xl'>from me...</span>
          </div>
        </div>
      </div>
      <div className="px-5 mx-auto container w-full py-5 lg:py-24">
        <Slider {...settings}>
              {
                clients.map((items)=>(
                  <Client {...items}/>
                ))
              }
            </Slider>
      </div>
    </>
  );
};

export default Testimonial;