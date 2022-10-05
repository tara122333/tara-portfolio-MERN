import React from "react";
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
      img : "https://media-exp1.licdn.com/dms/image/C4D03AQEGP1vPuIyDsA/profile-displayphoto-shrink_400_400/0/1659182274287?e=1669248000&v=beta&t=J82LU22N6-Dg72Vy1tPCRL5BEPmeVD-NQWdl8SqwXsE",
      name : "Harshit Bhardwaj",
      title : "Seeking to get good learning guidance and career growth opportunities and improve my ability to thrive in a challenging environment where efficiency and accuracy matters.", time : "1",
      company : "Hikup",
      link : "https://www.linkedin.com/in/harshitfeed"
    },
    {
      img : "https://media-exp1.licdn.com/dms/image/C4D03AQE4pb7sTP4VrA/profile-displayphoto-shrink_400_400/0/1659178585900?e=1669248000&v=beta&t=quxNmG2xR7A-N-6T-nbaGOTL9DXPGDqpCd3JPWF8rGg",
      name : "Shubham Kumawat",
      title : "Seeking to get good learning guidance and career growth opportunities and improve my ability to thrive in a challenging environment where efficiency and accuracy matters.", time : "1",
      company : "SkillsVertex",
      link : "https://www.linkedin.com/in/shubham-kumawat-b30651190"
    },
    {
      img : "https://media-exp1.licdn.com/dms/image/C4D03AQEgvwyvYNsdDw/profile-displayphoto-shrink_400_400/0/1607794469961?e=1669248000&v=beta&t=3d09dvdsYI3zAUeY7BkOZhak2jZLOtpX12OfKmUp3m0",
      name : "Shubham Sharma",
      title : "Satisfactory work in very short span of time. Professional developer. Liked it. Recommended👍🏻", time : "1",
      company : "ConceptWithTara",
      link : "https://www.linkedin.com/in/ishubhamsharma00"
      
    },
    {
      img : "https://media-exp1.licdn.com/dms/image/C5603AQFG01QeF1r9-w/profile-displayphoto-shrink_400_400/0/1630979302293?e=1669248000&v=beta&t=NQQSUt_bKjUwDwP-MIr2hPGN9Esl0k2s5wQ46URsQhA",
      name : "Shyam Sundar Kumawat",
      title : "Seeking to get good learning guidance and career growth opportunities and improve my ability to thrive in a challenging environment where efficiency and accuracy matters.", time : "1",
      company : "Samsung",
      link : "https://www.linkedin.com/in/shyamkumawat"
    },
    {
      img : "https://media-exp1.licdn.com/dms/image/C5603AQEutBrqM9JcNA/profile-displayphoto-shrink_400_400/0/1634582037321?e=1669852800&v=beta&t=MIKf22Kj2FZHIZvx_SNM4FOFavQERSlwNRHEl6QR0qk",
      name : "Saransh Parashar",
      title : "The project met all my requirements completely and the developer was very helpful and polite in nature. Totally satisfied with my website and the project was completed in the time limit also. Great!!", time : "1",
      company : "ConceptWithTara",
      link : "https://www.linkedin.com/in/saransh-parashar-ba5b05223"
    },
  ];


  const settings = {
    arrows: true,
    infinite: true,
    speed: 1000,
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