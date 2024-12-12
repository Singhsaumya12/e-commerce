import React from 'react'
import { NavLink } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <div className="flex flex-col justify-center items-center text-center  my-44 px-4">
    <h1 className="text-8xl font-bold mb-4">404</h1>
    <span className="text-[24px] md:text-[26px] text-gray-600 mb-2">OH! You're lost.</span>
    <p className="text-[14px] md:text-[16px] text-gray-500 mb-6 max-w-[400px]">
      Oops! The page you are looking for does not exist. Click the button below to go back to the homepage.
    </p>
    <NavLink to="/">
      <button className="h-[40px] px-6 bg-blue-600 border border-blue-600 text-white rounded-md hover:bg-blue-700 transition-all duration-200">
       BACK TO HOME
      </button>
    </NavLink>
  </div>
  
  )
}

export default ErrorPage