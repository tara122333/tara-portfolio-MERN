import React from "react";
import MajorProjects from "./MajorProjects";

const TotalProjects = () => {
  return (
    <div id="projects">
      <div className="flex flex-col w-full lg:py-12">
        <div className="flex flex-col w-full gap-16 px-5 lg:container lg:mx-auto lg:px-16">
          <div className="flex justify-center flex-col gap-4 lg:flex-row">
            <span className="text-3xl md:text-4xl lg:text-5xl lg:hidden">
              My Awesome
            </span>
            <span className="text-5xl text-tara-orange md:text-6xl lg:text-7xl font-bold">
              All Projects
            </span>
          </div>
          <div className="lg:py-24 px-2">
            <MajorProjects />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TotalProjects;
