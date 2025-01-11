import React, { useContext } from "react";
import Aboutt from "./assests/images/aboutt.png";
import { NavLink } from "react-router-dom";
import { useProductContext} from "./context/productcontext";


const About = () => {
  const myName =  useProductContext
  return (
   <>
    {myName}
    <div className=" flex flex-col md:flex-row sm:flex-row items-center justify-between gap-6 px-4 sm:px-6 lg:px-20 py-10 max-w-[1440px] mx-auto" > 
    {/* Text Section */}
    <div className="flex flex-col items-start text-center md:text-left px-4 w-full md:w-1/2 space-y-2">
      <label className="text-[16px] text-red-400">WELCOME TO</label>
      <span className="text-[20px] sm:text-[24px] font-bold">E-SHOPPING</span>
      <p className="text-[14px] text-justify sm:text-[16px] text-gray-600 leading-6">
        Welcome to our e-commerce shop, your ultimate destination for seamless and enjoyable shopping! Whether you're exploring the latest trends, hunting for great deals, or simply browsing for inspiration, we strive to make your shopping experience delightful and hassle-free.
      </p>
      <NavLink to="/shop">
        <button
          type="button"
          className="flex items-center justify-center text-white bg-blue-900 px-4 py-2 w-auto h-[40px] text-[14px] rounded-md hover:bg-blue-600"
        >
          Shop Now
        </button>
      </NavLink>
    </div>
  
    {/* Image Section */}
    
      <img
        className="w-[80%] sm:w-[60%] md:w-full h-auto max-w-sm md:max-w-md lg:max-w-lg"
        src={Aboutt}
        alt="About"
      />
     
  </div>
  
   </>
  
  );
};

export default About;
