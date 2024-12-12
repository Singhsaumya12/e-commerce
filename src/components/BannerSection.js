import React, { useState,useEffect} from "react";
import Banner1 from '../assests/images/banner1.png';
import Banner2 from '../assests/images/banner2.png'
import Banner3 from '../assests/images/banner3.png'
import Banner4 from '../assests/images/banner4.png'
import Banner6 from '../assests/images/banner6.png'
import { NavLink } from "react-router-dom";

const BannerSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    Banner1,
    Banner2,
    Banner3,
    Banner4,
    Banner6
  ];

  // Automatic slide change every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval); // Cleanup on component unmount
  }, [slides.length]);

  const handlePrev = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
  };

  const handleNext = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  return (
    <div className="relative w-full border border-black rounded-md items-center">
      {/* Carousel Wrapper */}
      <div className="relative h-[100px] overflow-hidden rounded-md sm:h-[200px] md:h-[300px] lg:h-[400px]">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute block w-full h-full transition-all duration-700 ease-in-out  ${
              currentSlide === index ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            <img
              src={slide}
              alt={`Slide ${index + 1}`}
              className="absolute w-full h-full object-cover "
            
            />
            
          </div>
        ))}
      </div>
      

      {/* Slider Controls */}
      <button
        type="button"
        className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        onClick={handlePrev}
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70">
          <svg
            className="w-4 h-4 text-white dark:text-gray-800"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 1 1 5l4 4"
            />
          </svg>
        </span>
      </button>
      {/* Slider Indicators */}
      <NavLink to="/shop">
       <div className="items-center flex">
       <button
          type="button"
          className=" flex start-0 items-center text-white bg-blue-900 px-4  w-full h-[30px] text-[14px]  hover:bg-blue-600 md:px-6  md:w-full md:h-[30px] md:text-[14px] lg:px-8  lg:w-full lg:h-[30px] lg:text-[14px] "
        >
          Show Now
        </button>
        <div className="absolute z-30 flex -translate-x-1/2 left-1/2 space-x-3 items-center">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              currentSlide === index ? 'bg-blue-600' : 'bg-gray-300'
            }`}
            aria-label={`Slide ${index + 1}`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
       </div>
      </NavLink>

      <button
        type="button"
        className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        onClick={handleNext}
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70">
          <svg
            className="w-4 h-4 text-white dark:text-gray-800"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 9 4-4-4-4"
            />
          </svg>
        </span>
      </button>
    </div>
  );
};

export default BannerSection