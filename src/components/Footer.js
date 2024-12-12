import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaDiscord } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
   <>
    
    <section className="bg-[#031846] mt-28 h-auto relative text-[12px]">
  {/* Call-to-Action Section */}
  <div className="flex items-center justify-center">
    <div className="absolute flex flex-col md:flex-row text-center md:justify-between border px-6 md:px-12 gap-4 md:gap-5 items-center p-4 max-w-[800px] w-full rounded-lg bg-slate-300 shadow-lg mt-[1rem] text-[14px] md:text-[16px]">
      <div>
        <h3 className="text-[16px] font-semibold">Ready to get started</h3>
        <h3 className="text-[16px]">Talk to us today</h3>
      </div>
      <button className="flex justify-center items-center border h-[40px] w-[120px] bg-blue-600 border-blue-600 rounded-md text-white text-[14px] md:text-[16px]">
        <NavLink to="/contact">Get Started</NavLink>
      </button>
    </div>
  </div>

  {/* Footer Section */}
  <footer className="text-white flex flex-col items-center justify-center gap-8 py-8 border-b pt-28">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center max-w-[800px] w-full rounded-lg">
      {/* E-Shopping Section */}
      <div className="space-y-4">
        <h3 className="text-[16px] font-semibold">E-Shopping</h3>
        <p className="text-[14px]">Enjoy Shopping</p>
      </div>

      {/* Subscribe Section */}
      <div className="space-y-4">
        <h3 className="text-[16px] font-semibold">Subscribe to get important updates</h3>
        <form className="space-y-4 flex flex-col items-center">
          <input
            type="email"
            name="Email"
            required
            autoComplete="off"
            className="w-[150px] md:w-[250px] h-[40px] border-purple-400 shadow-md text-black px-3 rounded-md"
            placeholder="YOUR E-MAIL"
          />
          <button className="h-[40px] px-4 bg-blue-600 border border-blue-600 text-white rounded-md">
            SUBSCRIBE
          </button>
        </form>
      </div>

      {/* Follow Us Section */}
      <div className="space-y-4">
        <h3 className="text-[16px] font-semibold">Follow Us</h3>
        <div className="flex justify-center gap-4 text-[25px]">
          <FaDiscord />
          <FaInstagram />
          <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
            <FaYoutube />
          </a>
        </div>
      </div>

      {/* Call Us Section */}
      <div className="space-y-4">
        <h3 className="text-[16px] font-semibold">Call Us</h3>
        <a href="tel:123456789" className="block text-[16px] text-blue-400 hover:text-blue-600">
          +91 123456789
        </a>
      </div>
    </div>
  </footer>

  {/* Bottom Footer Section */}
  <div className="text-white flex flex-col md:flex-row justify-between items-center max-w-[900px] w-full mx-auto gap-4 py-4">
    <div>
      <p className="text-[14px] md:text-[16px]">@{new Date().getFullYear()} E-Shopping. All Rights Reserved</p>
    </div>
    <div className="flex flex-col">
      <p className="text-[14px] md:text-[16px]">PRIVACY POLICY</p>
      <p className="text-[14px] md:text-[16px]">Terms & Conditions</p>
    </div>
  </div>
</section>


   </>

  )
}

export default Footer