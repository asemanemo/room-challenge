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
    <div>
      <Slider />
      <div className="flex justify-between">
        <div className="absolute top-6 lg:hidden">
          <Navbar />
        </div>
      </div>

      <div className=" lg:grid lg:grid-cols-7 ">
        <div className="col-span-2">
          <img
            className="w-full h-full"
            src={aboutImage}
            alt="this is a home "
          />
        </div>

        <div className="lg:col-span-3 self-center m-20">
          <h1 className="font-myFont text-2xl font-bold">
            About our furniture
          </h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda,
            saepe atque. Autem voluptates sed optio molestiae totam dolorem
            quibusdam. Culpa, a molestias! Officiis minima autem id beatae eaque
            totam quidem deleniti, hic asperiores minus cupiditate sint eos,
            incidunt doloremque corrupti recusandae ut voluptatum cum sit
            repellat! Illum, ullam temporibus, odit fugit ex illo dolorem
            ratione itaque quam vitae molestias et doloribus neque ea nostrum
            omnis dicta. Non velit aut odit!
          </p>
        </div>

        <div className="col-span-2">
          <img className="w-full h-full" src={aboutImage2} />
        </div>
      </div>

      <div className="bg-gray-300 flex justify-center hover:underline">
        <a href="https://github.com/asemanemo">Finished by Asemanemo</a>
      </div>
    </div>
  );
}

export default App;
