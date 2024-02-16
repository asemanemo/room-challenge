import Navbar from './Navbar';
import { FaArrowRight } from 'react-icons/fa';
// import arrowRight from '../images/icon-angle-right.svg';
import heroImage from '../images/mobile-image-hero-1.jpg';
import heroImageDesk from '../images/desktop-image-hero-1.jpg';
import aboutImage from '../images/image-about-dark.jpg';
import aboutImage2 from '../images/image-about-light.jpg';
import Slider from './Slider';

// className="md:relative md:grid md:grid-cols-6 md:overflow-hidden "

function App() {
  return (
    <div className="">
      <div className="">
        <Slider />
      </div>
      <div className="md:justify-start">
        <div className="absolute top-6 md:hidden">
          <Navbar />
        </div>

        <div className="">
          <div></div>
        </div>
      </div>

      <div className=" lg:grid lg:grid-cols-7">
        <div className="col-span-2">
          <img
            className="w-full h-full"
            src={aboutImage}
            alt="this is a home "
          />
        </div>

        <div className="lg:col-span-3 self-center ml-10">
          <h1 className="font-myFont text-xl font-bold">About our furniture</h1>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
        </div>

        <div className="col-span-2">
          <img className="w-full h-full" src={aboutImage2} />
        </div>
      </div>
    </div>
  );
}

export default App;
