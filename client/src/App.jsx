import Navbar from "./component/Navbar/Navbar";
import Hero from "./component/Hero/Hero";
import Service from "./component/service/service";
import Experience from "./component/Experience/Experience";
import Work from "./component/Work/Work";
import  Portfolio  from "./component/Portfolio/Portfolio";
import Testimonial from "./component/Testimonials/Testimonial";
import Contact from "./component/Contact/Contact";

function App() {
  return (
    <>
      <Navbar/>
      <div>
      <Hero />
      </div>
      <div className="mb-96">
      <Service />
      </div>
      <div className="mt-96 md:mt-0">
        <Experience/>
      </div>
      <div>
        <Work />
      </div>
      <div className="my-56">
        <Portfolio />
      </div>
      <div className="my-96">
      <Testimonial />
      </div>
      <div className="my-96">
        <Contact />
      </div>
    </>
  );
}

export default App;
