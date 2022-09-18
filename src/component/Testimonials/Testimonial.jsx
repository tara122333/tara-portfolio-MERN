import React from "react";
// import Slider from "react-slick";
import profilePic1 from "../../img/profile1.jpg";
import profilePic2 from "../../img/profile2.jpg";
import profilePic3 from "../../img/profile3.jpg";
import Client from "./Client";



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
          <div className="w-full flex flex-wrap gap-6 px-3 justify-center items-center">
            {
              clients.map((items)=>(
                <Client {...items}/>
              ))
            }
        </div>
      </div>
    </>
  );
};

export default Testimonial;