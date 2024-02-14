import React, { useState } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import rightArrow from '../images/icon-angle-right.svg';
import leftArrow from '../images/icon-angle-left.svg';
import heroImage from '../images/mobile-image-hero-1.jpg';
import heroImage2 from '../images/mobile-image-hero-2.jpg';
import heroImage3 from '../images/mobile-image-hero-3.jpg';
import heroImageDesk from '../images/desktop-image-hero-1.jpg';
import heroImageDesk2 from '../images/desktop-image-hero-2.jpg';
import heroImageDesk3 from '../images/desktop-image-hero-3.jpg';
import { FaArrowRight } from 'react-icons/fa';

interface Slide {
  src: string;
}

const slides: Slide[] = [
  { src: heroImage },
  { src: heroImage2 },
  { src: heroImage3 },
];

const slidesDesk: Slide[] = [
  { src: heroImageDesk },
  { src: heroImageDesk2 },
  { src: heroImageDesk3 },
];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const firstIndex = currentIndex === 0;
    const newIndex = firstIndex ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const lastIndex = currentIndex === slides.length - 1;
    const newIndex = lastIndex ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <>
      <div className="grid grid-col-7 ">
        <div className="w-auto h-auto rounded-t-none hidden sm:block h-auto col-start-1 col-span-4">
          <img src={slidesDesk[currentIndex].src} alt="this is a home " />
        </div>

        <div className="col-span-3">
          <div
            // style={{ gridArea: '1/6/1/7', zIndex: '20' }}
            className=" items-center "
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

            <div id="about" className="">
              <h3 className="font-myFont font-bold">S H O P N O W</h3>
              <div className="pl-4 mt-1 text-xl">
                <FaArrowRight />
              </div>
            </div>
          </div>
        </div>

        <div
          className="flex col-start-5 col-end-6 "
          // style={{ gridArea: '1/5/1/6', zIndex: '10' }}
        >
          <div
            onClick={nextSlide}
            className=" right-0 bg-black text-white hover:bg-stone-700 md:order-last "
          >
            <img src={rightArrow} />
          </div>
          <div
            onClick={prevSlide}
            className=" right-12 bg-black text-white hover:bg-stone-700 md:order-first "
          >
            <img src={leftArrow} />
          </div>
        </div>
      </div>

      <img
        className="w-full h-auto rounded-t-none rounded-b-lg block sm:hidden "
        src={slides[currentIndex].src}
        alt="this is a home "
      />

      <h1 className="absolute top-14 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-bold font-myFont text-2xl">
        Room
      </h1>

      {/* <div
            onClick={nextSlide}
            className="absolute right-0 bg-black text-white hover:bg-stone-700  md:order-last "
          >
            <img src={rightArrow} />
          </div>
          <div
            onClick={prevSlide}
            className="absolute right-12 bg-black text-white hover:bg-stone-700  md:order-first "
          >
            <img src={leftArrow} />
          </div>
        </div>
      </div> */}
    </>
  );
};

export default Slider;
