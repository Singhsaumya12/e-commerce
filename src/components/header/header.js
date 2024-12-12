import React from 'react'
import Logo from '../../assests/images/eShopp.png' 
import { NavLink } from 'react-router-dom'
import Nav from "../header/Nav"

const header = () => {
  return (
    <>
    <div className='w-full flex justify-between items-center bg-gray-100 border border-black'>
      <NavLink className="" to="/">
        <img className='h-[8rem] border-4 border-green-500 ' src={Logo}/>
      </NavLink>
      <Nav/>
      </div>
    
    </>
  )
}

export default header