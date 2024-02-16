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
      <div className="hidden lg:block">
        <div className=" grid grid-cols-7 ">
          <div
            className=" rounded-t-none hidden sm:block h-auto "
            style={{ gridArea: '1/1/1/5' }}
          >
            <img
              className="object-cover w-full"
              src={slidesDesk[currentIndex].src}
              alt="this is a home "
            />
          </div>
          <div className="self-center ml-16" style={{ gridArea: '1/5/1/8' }}>
            <div className="">
              <h1 className="font-myFont text-4xl font-bold ">
                Discove innovatove way to decorate
              </h1>
              <div className="font-myFont text-sm">
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Exexplicabo aperiam animi non labore magni commodi et dolor
                  iure voluptatem! Amet molestias nulla vel dolor perferendis
                  error rerum voluptatum officia at tempore omnis esse eaque
                  illum, fugiat, placeat iure quidem, officiis vero earum
                  repudiandae accusantium mollitia! Repellendus omnis nostrum
                  impedit.
                </p>
              </div>
              <div className="flex">
                <h3 className="font-myFont font-bold">S H O P N O W</h3>
                <div className="pl-4 mt-1 text-xl ">
                  <FaArrowRight />
                </div>
              </div>
            </div>
          </div>
          <div
            className=" left-0 bg-black self-end "
            style={{ gridArea: '1/5/1/6', zIndex: '10' }}
          >
            <div className="flex justify-between grid-row-start-auto justify-evenly ">
              <div
                onClick={nextSlide}
                className=" bg-black left text-white order-last hover:bg-gray-700 p-8"
              >
                <img src={rightArrow} />
              </div>
              <div
                onClick={prevSlide}
                className=" bg-black text-white order-first hover:bg-gray-700 p-8"
              >
                <img src={leftArrow} />
              </div>
            </div>
          </div>
        </div>
        <h1 className="absolute top-16 left-16 transform -translate-x-1/2 -translate-y-1/2 text-white font-myFont text-4xl">
          room
        </h1>
      </div>

      {/* Mobile  */}
      <div className="relative lg:hidden ">
        <div className="relative flex justify-center">
          <h1 className="absolute text-white font-myFont text-2xl mt-6">
            room
          </h1>
          <img
            className="w-full h-auto rounded-t-none block"
            src={slides[currentIndex].src}
            alt="this is a home "
          />
        </div>

        <div className="absolute bottom-0 right-0">
          <div className="flex transform bg-black self-end ">
            <div
              onClick={nextSlide}
              className="bg-black text-white hover:bg-stone-700 order-last p-10"
            >
              <img className="w-full h-full object-cover" src={rightArrow} />
            </div>
            <div
              onClick={prevSlide}
              className=" bg-black text-white hover:bg-stone-700 order-first p-10 "
            >
              <img src={leftArrow} />
            </div>
          </div>
        </div>
      </div>

      <div className="m-20 lg:hidden">
        <h1 className="font-myFont text-4xl font-bold ">
          Discove innovatove way to decorate
        </h1>
        <div className="font-myFont text-sm">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Exexplicabo aperiam animi non labore magni commodi et dolor iure
            voluptatem! Amet molestias nulla vel dolor perferendis error rerum
            voluptatum officia at tempore omnis esse eaque illum, fugiat,
            placeat iure quidem, officiis vero earum repudiandae accusantium
            mollitia! Repellendus omnis nostrum impedit.
          </p>
        </div>
        <div className="flex">
          <h3 className="font-myFont font-bold">S H O P N O W</h3>
          <div className="pl-4 mt-1 text-xl ">
            <FaArrowRight />
          </div>
        </div>
      </div>
    </>
  );
};

export default Slider;
