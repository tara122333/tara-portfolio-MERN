import Navbar from "./component/Navbar/Navbar";
import Hero from "./component/Hero/Hero";
import Service from "./component/service/service";
import Experience from "./component/Experience/Experience";
import Work from "./component/Work/Work";
import  Portfolio  from "./component/Projects/MiniProjects";
import Testimonial from "./component/Testimonials/Testimonial";
import Contact from "./component/Contact/Contact";
import Footer from "./component/Footer/Footer";

function App() {
  return (
    <>
      <div>
      <Navbar/>
      <div>
      <Hero />
      </div>
      <div className="mb-96 lg:mb-48">
      <Service />
      </div>
    
      <div className="mt-96 lg:mt-0">
        <Experience/>
      </div>
      {/* <div>
        <Work />
      </div> */}
      <div className="">
        <Portfolio />
      </div>
       {/*
      <div className="my-10">
      <Testimonial />
      </div>
      <div className="lg:mt-96">
        <Contact />
      </div>
      <div>
        <Footer />
      </div> */}
      </div>
    </>
  );
}

export default App;
