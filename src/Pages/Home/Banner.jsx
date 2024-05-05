import slider1 from "../../assets/images/banner/1.jpg"
import slider2 from "../../assets/images/banner/2.jpg"
import slider3 from "../../assets/images/banner/3.jpg"
import slider4 from "../../assets/images/banner/4.jpg"
import slider5 from "../../assets/images/banner/5.jpg"
import slider6 from "../../assets/images/banner/6.jpg"

const Banner = () => {
  return (
    <div className="carousel w-full h-[400px] md:h-[500px] rounded-xl">
      {/* slide 1 */}
      <div id="slide1" className="carousel-item relative w-full">
        {/* image */}
        <img src={slider1} className="w-full" />
        {/* banner content */}
        <div className="absolute space-y-3 sm:space-y-10 pl-7 h-full transform pt-12 md:pt-24 flex flex-col p-2
          bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
          <div className="max-w-md text-white space-y-6">
            <h2 className="text-2xl sm:text-4xl font-bold">Affordable Price <br /> For Car Servicing</h2>
            <p className="text-xl sm:font-bold">
              There are many variations of passages of  available, 
              but the majority have suffered alteration in some form
            </p>
          </div>
          <div>
            <button className="btn btn-outline text-white mb-2 sm:mr-2">Discover More</button>
            <br className="sm:hidden" /> 
            <button className="btn btn-outline text-white">Latest Projects</button>
          </div>
        </div>
        {/* navigation */}
        <div className="absolute flex gap-2 transform right-5 bottom-2">
          <a href="#slide6" className="btn btn-circle">❮</a> 
          <a href="#slide2" className="btn btn-circle bg-orange-500 border-0">❯</a>
        </div>
      </div>
       {/* slide 2  */}
      <div id="slide2" className="carousel-item relative w-full">
        {/* image */}
        <img src={slider2} className="w-full" />
        {/* banner content */}
        <div className="absolute space-y-3 sm:space-y-10 pl-7 h-full transform pt-12 md:pt-24 flex flex-col p-2
          bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
          <div className="max-w-md text-white space-y-6">
            <h2 className="text-2xl sm:text-4xl font-bold">Revolutionize <br /> Your Ride</h2>
            <p className="text-xl sm:font-bold">
              Unleash the full potential of your vehicle with our expert maintenance and upgrade services.
            </p>
          </div>
          <div>
            <button className="btn btn-outline text-white mb-2 sm:mr-2">Discover More</button>
            <br className="sm:hidden" /> 
            <button className="btn btn-outline text-white">Latest Projects</button>
          </div>
        </div>
        {/* navigation */}
        <div className="absolute flex gap-2 transform right-5 bottom-2">
          <a href="#slide1" className="btn btn-circle">❮</a> 
          <a href="#slide3" className="btn btn-circle bg-orange-500 border-0">❯</a>
        </div>
      </div> 
      {/* slide 3 */}
      <div id="slide3" className="carousel-item relative w-full">
        {/* image */}
        <img src={slider3} className="w-full" />
        {/* bannerContent */}
        <div className="absolute space-y-3 sm:space-y-10 pl-7 h-full transform pt-12 md:pt-24 flex flex-col p-2
          bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
          <div className="max-w-md text-white space-y-6">
            <h2 className="text-2xl sm:text-4xl font-bold">Drive with <br /> Confidence</h2>
            <p className="text-xl sm:font-bold">
            From routine maintenance to emergency repairs, trust us to keep you safe and secure on the road.
            </p>
          </div>
          <div>
            <button className="btn btn-outline text-white mb-2 sm:mr-2">Discover More</button>
            <br className="sm:hidden" /> 
            <button className="btn btn-outline text-white">Latest Projects</button>
          </div>
        </div>
        <div className="absolute flex gap-2 transform right-5 bottom-2">
          <a href="#slide2" className="btn btn-circle">❮</a> 
          <a href="#slide4" className="btn btn-circle bg-orange-500 border-0">❯</a>
        </div>
      </div> 
      {/* slide 4 */}
      <div id="slide4" className="carousel-item relative w-full">
        {/* image */}
        <img src={slider4} className="w-full" />
        {/* bannerContent */}
        <div className="absolute space-y-3 sm:space-y-10 pl-7 h-full transform pt-12 md:pt-24 flex flex-col p-2
          bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
          <div className="max-w-md text-white space-y-6">
            <h2 className="text-2xl sm:text-4xl font-bold">Experience <br /> Unmatched Service</h2>
            <p className="text-xl sm:font-bold">
            Join our community of satisfied customers and enjoy unparalleled care for your car, every visit.
            </p>
          </div>
          <div>
            <button className="btn btn-outline text-white mb-2 sm:mr-2">Discover More</button>
            <br className="sm:hidden" /> 
            <button className="btn btn-outline text-white">Latest Projects</button>
          </div>
        </div>
        {/* navigation */}
        <div className="absolute flex gap-2 transform right-5 bottom-2">
          <a href="#slide3" className="btn btn-circle">❮</a> 
          <a href="#slide5" className="btn btn-circle bg-orange-500 border-0">❯</a>
        </div>
      </div>
      {/* slide 5 */}
      <div id="slide5" className="carousel-item relative w-full">
        {/* image */}
        <img src={slider5} className="w-full" />
        {/* banner content */}
        <div className="absolute space-y-3 sm:space-y-10 pl-7 h-full transform pt-12 md:pt-24 flex flex-col p-2
          bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
          <div className="max-w-md text-white space-y-6">
            <h2 className="text-2xl sm:text-4xl font-bold">Unlock Peak <br /> Performance</h2>
            <p className="text-xl sm:font-bold">
            Unleash the full potential of your vehicle with our expert maintenance and upgrade services.
            </p>
          </div>
          <div>
            <button className="btn btn-outline text-white mb-2 sm:mr-2">Discover More</button>
            <br className="sm:hidden" /> 
            <button className="btn btn-outline text-white">Latest Projects</button>
          </div>
        </div>
        {/* navigation */}
        <div className="absolute flex gap-2 transform right-5 bottom-2">
          <a href="#slide4" className="btn btn-circle">❮</a> 
          <a href="#slide6" className="btn btn-circle bg-orange-500 border-0">❯</a>
        </div>
      </div>
      {/* slide 6 */}
      <div id="slide6" className="carousel-item relative w-full">
        {/* image */}
        <img src={slider6} className="w-full" />
        {/* bannerContent */}
        <div className="absolute space-y-3 sm:space-y-10 pl-7 h-full transform pt-12 md:pt-24 flex flex-col p-2
          bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
          <div className="max-w-md text-white space-y-6">
            <h2 className="text-2xl sm:text-4xl font-bold">Navigate the Future <br /> of Auto Care</h2>
            <p className="text-xl sm:font-bold">
            Stay ahead of the curve with our innovative technologies and forward-thinking solutions for all your automotive needs.
            </p>
          </div>
          <div>
            <button className="btn btn-outline text-white mb-2 sm:mr-2">Discover More</button>
            <br className="sm:hidden" /> 
            <button className="btn btn-outline text-white">Latest Projects</button>
          </div>
        </div>
        {/* navigation */}
        <div className="absolute flex gap-2 transform right-5 bottom-2">
          <a href="#slide5" className="btn btn-circle">❮</a> 
          <a href="#slide1" className="btn btn-circle bg-orange-500 border-0">❯</a>
        </div>
      </div>
    </div>
  );
};

export default Banner;