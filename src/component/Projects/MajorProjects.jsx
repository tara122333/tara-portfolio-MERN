import React from 'react'
import Projects from './Projects'
import resume from '../image/resume.png';
import tarabank from '../image/tarabank.png';

const MajorProjects = () => {

    const proj = [
        {
        title : "Resume Website",
        image : resume,
        description : "This website build using HTML and CSS",
        live : "https://tara122333.github.io/Tara_Resume/",
        source : "https://github.com/tara122333/Tara_Resume",
        tutorial : "https://www.youtube.com/channel/UClcattAZ7ABgZpvUxAC_IVw",
    },
        {
        title : "TaraBank Website",
        image : tarabank,
        description : "This is TaraBank website build using HTML, CSS, JSX, React and TailwindCss",
        live : "https://tara122333.github.io/Bank-application",
        source : "https://github.com/tara122333/Bank-application",
        tutorial : "https://www.youtube.com/channel/UClcattAZ7ABgZpvUxAC_IVw",
    },
        {
        title : "MERN Stack",
        image : tarabank,
        description : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur libero quia, consequuntur natus placeat veniam ipsa saepe optio quo delectus in voluptate nisi blanditiis ipsam.",
        live : "https://wwww.google.com",
        source : "https://wwww.google.com",
        tutorial : "https://wwww.google.com",
    },
        {
        title : "MERN Stack",
        image : "https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg",
        description : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur libero quia, consequuntur natus placeat veniam ipsa saepe optio quo delectus in voluptate nisi blanditiis ipsam.",
        live : "https://wwww.google.com",
        source : "https://wwww.google.com",
        tutorial : "https://wwww.google.com",
    },
        {
        title : "MERN Stack",
        image : "https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg",
        description : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur libero quia, consequuntur natus placeat veniam ipsa saepe optio quo delectus in voluptate nisi blanditiis ipsam.",
        live : "https://wwww.google.com",
        source : "https://wwww.google.com",
        tutorial : "https://wwww.google.com",
    },
        {
        title : "MERN Stack",
        image : "https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg",
        description : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur libero quia, consequuntur natus placeat veniam ipsa saepe optio quo delectus in voluptate nisi blanditiis ipsam.",
        live : "https://wwww.google.com",
        source : "https://wwww.google.com",
        tutorial : "https://wwww.google.com",
    }
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