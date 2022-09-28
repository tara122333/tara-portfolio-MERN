import React from 'react'
import Projects from './Projects'
import resume from '../image/resume.png';
import tarabank from '../image/tarabank.png';
import digitalclock from '../image/digitalclock.png';
import fbclone from '../image/fbclone.png';

const MajorProjects = () => {

    const proj = [
        {
        title : "Resume Website",
        image : resume,
        description : "This website build using HTML and CSS",
        live : "https://tara122333.github.io/Tara_Resume/",
        skills : [ "HTML", "CSS"],
        source : "https://github.com/tara122333/Tara_Resume",
        tutorial : "https://www.youtube.com/channel/UClcattAZ7ABgZpvUxAC_IVw",
    },
        {
        title : "TaraBank Website",
        image : tarabank,
        description : "This is TaraBank website build using HTML, CSS, React and TailwindCss",
        skills : [ "HTML", "CSS", "React", "TailwindCSS"],
        live : "https://tara122333.github.io/Bank-application",
        source : "https://github.com/tara122333/Bank-application",
        tutorial : "https://www.youtube.com/channel/UClcattAZ7ABgZpvUxAC_IVw",
    },
        {
        title : "Digital Clock",
        image : digitalclock,
        description : "This is Digital Clock website build using HTML, CSS, and JavaScript",
        skills : [ "HTML", "CSS", "JavaScript"],
        live : "https://tara122333.github.io/Digital-Clock/",
        source : "https://github.com/tara122333/Digital-Clock",
        tutorial : "https://www.youtube.com/channel/UClcattAZ7ABgZpvUxAC_IVw",
    },
        {
        title : "Facebook Clone",
        image : fbclone,
        description : "This is facebook front-end Login Clone website build using HTML, CSS",
        skills : [ "HTML", "CSS"],
        live : "https://tara122333.github.io/Facebook-Clone/index.html",
        source : "https://github.com/tara122333/Facebook-Clone",
        tutorial : "https://www.youtube.com/channel/UClcattAZ7ABgZpvUxAC_IVw",
    },
    ];

  return (
    <>
        <div className='flex flex-col gap-8 lg:flex-row lg:flex-wrap lg:justify-center'>
            {
                proj.map((data)=>(
                    <Projects {...data}/>
                ))
            }
            
        </div>
    </>
  )
}

export default MajorProjects