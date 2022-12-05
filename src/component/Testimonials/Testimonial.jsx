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
      img : "https://media-exp1.licdn.com/dms/image/C4D03AQEGP1vPuIyDsA/profile-displayphoto-shrink_400_400/0/1659182274287?e=1675900800&v=beta&t=Ih-79MO7hchE7slWKW7IxXo8AYOk1PenEHg6tPRJq9k",
      name : "Harshit Bhardwaj",
      title : "Thank you for putting in the extra effort during this busy time. The client truly appreciates it and your positive attitude has helped us all stay motivated.", time : "1",
      company : "Hikup",
      link : "https://www.linkedin.com/in/harshitfeed"
    },
    {
      img : "https://media-exp1.licdn.com/dms/image/D4D03AQHZeWDOBdUkJQ/profile-displayphoto-shrink_400_400/0/1666971201377?e=1675900800&v=beta&t=Bi7fCYqVj9xTTgocBvXgIq9t0lrdx4a5rtAK-TIjRXg",
      name : "Shubham Kumawat",
      title : "Tara, your work looks great! It is clear that you care about your work, and I appreciate that you asked the client about their design preferences before creating their website.", time : "1",
      company : "SkillsVertex",
      link : "https://www.linkedin.com/in/shubham-kumawat-b30651190"
    },
    {
      img : "https://media-exp1.licdn.com/dms/image/C4D03AQEgvwyvYNsdDw/profile-displayphoto-shrink_400_400/0/1607794469961?e=1675900800&v=beta&t=aXOIEsRB5Zk80zY-bzk85tASRtt1FoxmJsD5YwVkbC4",
      name : "Shubham Sharma",
      title : "Satisfactory work in very short span of time. Professional developer. Liked it. Recommended👍🏻", time : "1",
      company : "ConceptWithTara",
      link : "https://www.linkedin.com/in/ishubhamsharma00"
      
    },
    {
      img : "https://media-exp1.licdn.com/dms/image/C5603AQFG01QeF1r9-w/profile-displayphoto-shrink_100_100/0/1630979302293?e=1675900800&v=beta&t=rRoSQy67BGZrbaycmof6zeis13o5Zh6BZubLAxgOFV8",
      name : "Shyam Sundar Kumawat",
      title : "You have been doing a great job lately. Thank you for being so flexible with projects and working hard to support your team members.", time : "1",
      company : "Samsung",
      link : "https://www.linkedin.com/in/shyamkumawat"
    },
    {
      img : "https://media-exp1.licdn.com/dms/image/C5603AQEutBrqM9JcNA/profile-displayphoto-shrink_400_400/0/1634582037321?e=1675900800&v=beta&t=00vIXe7xb2mEooKmXpUuyr7mZqzTY-UZZ6OhVN2rW4U",
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