//import { useLoaderData } from "react-router-dom";
import About from "./About";
import Banner from "./Banner";
import Services from "./Services";

const Home = () => {
  //const services = useLoaderData()

  return (
    <div className="space-y-3">
      <div className="p-4">
      <Banner />
      </div>
      <About />
      {/* <Services services={services} /> */}
      <Services />
    </div>
  );
};

export default Home;