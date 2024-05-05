import person from "../../assets/images/about_us/person.jpg"
import parts from "../../assets/images/about_us/parts.jpg"

const About = () => {
  return (
    <section className="dark:bg-gray-800 dark:text-gray-100">
      <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
        {/* left */}
        <div className="flex flex-col h-[350px] md:h-[500px] w-[300px] md:w-[500px] mx-auto 
        relative">
          <img src={person} alt="" className="object-cover h-64 md:h-80 w-60 md:w-72 rounded-lg" />
          <img src={parts} alt="" className="object-cover h-60 md:h-80 w-52 md:w-72 rounded-lg 
          bg-white p-2
          absolute left-20 md:left-36 top-28 md:top-36" />
        </div>
        {/* right */}
        <div className="flex flex-col gap-3 justify-center p-6 text-center rounded-sm mx-auto max-w-md lg:text-left">
          <h1 className="text-xl font-bold leading-none text-indigo-600">About Us</h1>
          <p className="text-4xl font-bold leading-none">
            We are qualified <br /> & of experience <br /> in this field.
          </p>
          <p className="my-5 text-lg">
          At Car Doctor, we are more than just car enthusiasts – we are your trusted automotive experts. 
          With a passion for precision and a commitment to exceptional service, we are dedicated to providing 
          top-tier solutions for all your vehicle needs. From routine maintenance to specialized repairs, our 
          team is here to keep you driving with confidence. Discover the difference with us today. 
          </p>
          <button className="btn btn-outline text-indigo-600">Get More Info</button>
        </div>
      </div>
    </section>
  );
};

export default About;