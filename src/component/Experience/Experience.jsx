import React from "react";
import "./Experience.css";
const Experience = () => {
  const darkMode = false;

  return (
    <div className="experience pt-72 lg:pt-0" id='experience'>
      <div className="achievement">
        {/* darkMode */}
        <div className="circle" style={{color: darkMode?'var(--orange)':''}}>1+</div>
        <span  style={{color: darkMode?'white':''}} className="text-xl">years </span>
        <span className="text-xl">Experience</span>
      </div>
      <div className="achievement">
        <div className="circle" style={{color: darkMode?'var(--orange)':''}}>20+</div>
        <span  style={{color: darkMode?'white':''}} className="text-xl">completed </span>
        <span className="text-xl">Projects</span>
      </div>
      <div className="achievement">
        <div className="circle" style={{color: darkMode?'var(--orange)':''}}>5+</div>
        <span  style={{color: darkMode?'white':''}} className="text-xl">companies </span>
        <span className="text-xl">Work</span>
      </div>
    </div>
  );
};

export default Experience;
