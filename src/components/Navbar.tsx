import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { CiMenuFries } from 'react-icons/ci';
import { AiOutlineClose } from 'react-icons/ai';

function Navbar() {
  const [isDroped, setDroped] = useState(false);
  const [modalShowing, setModalShowing] = useState(false);

  const handleClick = () => {
    setDroped(true);
    setModalShowing(true);
  };

  const handleClose = () => {
    setDroped(!isDroped);
    setModalShowing(false);
  };

  return (
    <>
      <div
        // onClick={handleClick}
        className="relative z-20"
      >
        <div onClick={handleClick} className="top-6 ml-10 text-white text-2xl ">
          <CiMenuFries />
        </div>

        {isDroped && (
          <div className="flex justify-between absolute -top-6 bg-white text-black px-5 left-0 w-screen h-20">
            <div onClick={handleClose} className="mr-4 mt-4">
              <AiOutlineClose />
            </div>
            <ul className="mt-3 font-bold hover:underline">
              <Link to="" spy={true} smooth={true} offset={50} duration={500}>
                home
              </Link>
            </ul>
            <ul className="mt-3 font-bold hover:underline">
              <Link
                to="shop"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                shop
              </Link>
            </ul>
            <ul className="mt-3 font-bold hover:underline">
              <Link
                onClick={handleClose}
                to="about"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                about
              </Link>
            </ul>
            <ul className="mt-3 font-bold hover:underline">
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                contact
              </Link>
            </ul>
          </div>
        )}
      </div>

      {modalShowing && (
        <div
          className="fixed inset-0 z-10 bg-gray-900 bg-opacity-50 transition-opacity duration-300 ease-in-out"
          onClick={handleClose}
        ></div>
      )}
    </>
  );
}

export default Navbar;
