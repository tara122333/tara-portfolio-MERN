import Navbar from "./component/Navbar/Navbar";
import Hero from "./component/Hero/Hero";
import Service from "./component/service/service";
import Experience from "./component/Experience/Experience";

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
    </>
  );
}

export default App;
