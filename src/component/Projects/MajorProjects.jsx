import React from "react";
import Projects from "./Projects";
import resume from "../image/resume.png";
import tarabank from "../image/tarabank.png";
import digitalclock from "../image/digitalclock.png";
import fbclone from "../image/fbclone.png";
import simpleportfolio from "../image/simpleportfolio.png";
import zomatolandingpage from "../image/zomatolandingpage.png";
import calculator from "../image/calculator.png";
import blooddonation from "../image/blooddonation.png";
import taraMovie from "../image/taraMovie.png";

const MajorProjects = () => {
  const proj = [
    {
      title: "Tara Movie House",
      image: taraMovie,
      description: "This is movie website build using HTML, CSS, JavaScript",
      skills: ["HTML", "CSS", "JavaScript", "React", "TailwindCss"],
      live: "https://tara-my-cinema.netlify.app/",
      source: "https://github.com/tara122333/book-my-show-clone",
      tutorial: "https://www.youtube.com/channel/UClcattAZ7ABgZpvUxAC_IVw",
      qrcode: "https://www.youtube.com/channel/UClcattAZ7ABgZpvUxAC_IVw",
    },
    {
      title: "Zomato Landing Page",
      image: zomatolandingpage,
      description:
        "This Zomato landing page website build using HTML, and Css.",
      skills: ["HTML", "CSS"],
      live: "https://tara122333.github.io/Zomato-website/",
      source: "https://github.com/tara122333/Zomato-website",
      tutorial: "https://www.youtube.com/channel/UClcattAZ7ABgZpvUxAC_IVw",
      qrcode: "https://www.youtube.com/channel/UClcattAZ7ABgZpvUxAC_IVw",
    },
    {
      title: "TaraBank Website",
      image: tarabank,
      description:
        "This is TaraBank website build using HTML, CSS, React and TailwindCss",
      skills: ["HTML", "CSS", "React", "TailwindCSS"],
      live: "https://tara122333.github.io/Bank-application",
      source: "https://github.com/tara122333/Bank-application",
      tutorial: "https://www.youtube.com/channel/UClcattAZ7ABgZpvUxAC_IVw",
      qrcode: "https://www.youtube.com/channel/UClcattAZ7ABgZpvUxAC_IVw",
    },
    {
      title: "Resume Website",
      image: resume,
      description: "This website build using HTML and CSS",
      live: "https://tara122333.github.io/Tara_Resume/",
      skills: ["HTML", "CSS"],
      source: "https://github.com/tara122333/Tara_Resume",
      tutorial: "https://www.youtube.com/channel/UClcattAZ7ABgZpvUxAC_IVw",
      qrcode: "https://www.youtube.com/channel/UClcattAZ7ABgZpvUxAC_IVw",
    },
    {
      title: "Digital Clock",
      image: digitalclock,
      description:
        "This is Digital Clock website build using HTML, CSS, and JavaScript",
      skills: ["HTML", "CSS", "JavaScript"],
      live: "https://tara122333.github.io/Digital-Clock/",
      source: "https://github.com/tara122333/Digital-Clock",
      tutorial: "https://www.youtube.com/channel/UClcattAZ7ABgZpvUxAC_IVw",
      qrcode: "https://www.youtube.com/channel/UClcattAZ7ABgZpvUxAC_IVw",
    },
    {
      title: "Facebook Clone",
      image: fbclone,
      description:
        "This is facebook front-end Login Clone website build using HTML, CSS",
      skills: ["HTML", "CSS"],
      live: "https://tara122333.github.io/Facebook-Clone/index.html",
      source: "https://github.com/tara122333/Facebook-Clone",
      tutorial: "https://www.youtube.com/channel/UClcattAZ7ABgZpvUxAC_IVw",
      qrcode: "https://www.youtube.com/channel/UClcattAZ7ABgZpvUxAC_IVw",
    },
    {
      title: "Static Portfolio",
      image: simpleportfolio,
      description:
        "This is My Static Portfolio website build using HTML, Bootstrap. It is template for portfolio",
      skills: ["HTML", "Bootstrap"],
      live: "https://tara122333.github.io/portfolio-simple/",
      source: "https://github.com/tara122333/portfolio-simple",
      tutorial: "https://www.youtube.com/channel/UClcattAZ7ABgZpvUxAC_IVw",
      qrcode: "https://www.youtube.com/channel/UClcattAZ7ABgZpvUxAC_IVw",
    },
    {
      title: "Basic Calculator",
      image: calculator,
      description: "This Calculator website build using HTML, and Css.",
      skills: ["HTML", "CSS"],
      live: "https://tara122333.github.io/Calculator/",
      source: "https://github.com/tara122333/Calculator",
      tutorial: "https://www.youtube.com/channel/UClcattAZ7ABgZpvUxAC_IVw",
      qrcode: "https://www.youtube.com/channel/UClcattAZ7ABgZpvUxAC_IVw",
    },
    {
      title: "Health House",
      image: blooddonation,
      description:
        "This is Blood Donation website build using HTML,Css, JavaScript, MongoDB, Express and Node",
      skills: ["HTML", "CSS", "JavaScript", "MongoDB", "Node", "Express"],
      live: "https://tarahouse.herokuapp.com/",
      source: "https://github.com/tara122333/Blood-Donation-Responsive-Website",
      tutorial: "https://www.youtube.com/channel/UClcattAZ7ABgZpvUxAC_IVw",
      qrcode: "https://www.youtube.com/channel/UClcattAZ7ABgZpvUxAC_IVw",
    },
  ];

  return (
    <>
      <div className="flex flex-col gap-8 lg:flex-row lg:flex-wrap lg:justify-center">
        {proj.map((data) => (
          <Projects {...data} />
        ))}
      </div>
    </>
  );
};

export default MajorProjects;
