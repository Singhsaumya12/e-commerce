import React, { useState } from 'react';  

import Logo from '../../assests/images/eShopp.png' 
import { NavLink } from 'react-router-dom'
import Nav from "../Headers/Nav"


const Header = () => {
  
  return (
    <>
    <div className='w-full flex justify-between items-center bg-gray-100 border border-black'>
      <NavLink className="" to="/">
        <img className='h-[8rem]  border-4 border-y-red-900 border-x-green-600 ' src={Logo}/>
      </NavLink>
      <Nav />
      </div>     
    </>
  )
}

export default Header