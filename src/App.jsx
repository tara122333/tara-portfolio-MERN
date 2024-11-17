import Navbar from "./component/Navbar/Navbar";
import Hero from "./component/Hero/Hero";
import Service from "./component/service/service";
import Experience from "./component/Experience/Experience";
// import Work from "./component/Work/Work";
// import Portfolio from "./component/Projects/MiniProjects";
import Testimonial from "./component/Testimonials/Testimonial";
// import Contact from "./component/Contact/Contact";
import Footer from "./component/Footer/Footer";
// import MajorProjects from "./component/Projects/MajorProjects";
import TotalProjects from "./component/Projects/TotalProjects";
// import ConceptWithTara from "./component/YouTube/ConceptWithTara";
import Certificate from "./component/Certificate/Certificate";
import React from "react";
import { Route, Routes } from "react-router-dom";
import ProjectView from "./page/ProjectView";

function App() {
  return (
    <>
      <Navbar />

      <div>
        <Hero />
      </div>

      <div className="mb-96 lg:mb-48">
        <Service />
      </div>

      <div className="mt-96 lg:my-96 lg:mt-0 py-24 lg:py-0">
        <Experience />
      </div>
      {/* <div>
        <Work />
      </div> */}

      <div>
        <TotalProjects />
      </div>
      <div>
        <Certificate />
      </div>

      {/* <div className="my-10 py-24 lg:py-56">
        <ConceptWithTara />
      </div> */}

      <div className="my-10 py-24 lg:py-56">
        <Testimonial />
      </div>

      {/* <div className="lg:mt-10">
        <Contact />
      </div> */}
      <div>
        <Footer />
      </div>
    </>
  );
}

const MainApp = () => {
  return (
    <Routes>
      <Route path="*" element={<App />} />
      <Route
        path="/tara-portfolio-MERN/major-projects"
        element={<ProjectView />}
      />
    </Routes>
  );
};

export default MainApp;
