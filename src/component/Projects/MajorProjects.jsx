import React from 'react'
import Projects from './Projects'


const MajorProjects = () => {

    const proj = [
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