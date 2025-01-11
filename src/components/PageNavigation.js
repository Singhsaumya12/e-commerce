import React from 'react'
import { NavLink } from 'react-router-dom'

const PageNavigation = ({ title }) => {
  return (
    <div className='text-[16px] bg-blue-100 p-6'>
        <NavLink to="/"  className="text-blue-800">Home</NavLink>/{title}
    </div>
  )
}

export default PageNavigation