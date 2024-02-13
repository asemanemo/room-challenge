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
      <Slider />
      <div className="md:justify-start">
        <div className="absolute top-6 md:hidden">
          <Navbar />
        </div>

        <div className="">
          <div
          // style={{ gridArea: '1/1/1/6', zIndex: '10' }}
          // className="md:col-span-4"
          ></div>

          {/* Info div */}
          {/* <div
            // style={{ gridArea: '1/5/1/6', zIndex: '10' }}
            className="md:col-span-2  md:col-start-5 md:mt-6 md:pr-6"
          >
            <h1 className="font-myFont text-xl font-bold ">
              Discove innovatove way to decorate
            </h1>
            <div className="font-myFont text-sm ">
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Exexplicabo aperiam animi non labore magni commodi et dolor iure
                voluptatem! Amet molestias nulla vel dolor perferendis error
                rerum voluptatum officia at tempore omnis esse eaque illum,
                fugiat, placeat iure quidem, officiis vero earum repudiandae
                accusantium mollitia! Repellendus omnis nostrum impedit.
              </p>
            </div>
            <div id="about" className="flex mt-4">
              <h3 className="font-myFont font-bold">S H O P N O W</h3>
              <div className="pl-4 mt-1 text-xl">
                <FaArrowRight />
              </div>
            </div>
          </div> */}
        </div>
      </div>

      <div className="grid grid-col-7 items-center gap-6 ">
        <div className="col-span-2">
          <img
            className="w-full h-full"
            src={aboutImage}
            alt="this is a home "
          />
        </div>

        <div className="col-span-3 col-start-3">
          <h1 className="font-myFont text-xl font-bold">About our furniture</h1>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
        </div>

        <div className="col-span-2 col-start-6">
          <img className="w-full h-full" src={aboutImage2} />
        </div>
      </div>
    </div>
  );
}

export default App;
