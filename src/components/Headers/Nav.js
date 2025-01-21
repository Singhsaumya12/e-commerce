import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import { CgMenu, CgClose } from "react-icons/cg";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="px-4 flex items-center justify-between gap-6">
      
      <ul
        className={`flex flex-col md:flex-row gap-6 items-center text-[16px] absolute md:static font-semibold w-full md:w-auto top-[21rem] md:top-0 left-0 md:left-auto p-4 md:p-0 z-50 shadow-md md:shadow-none  transition-all text-gray-800 duration-300 bg-gray-100 ${
          isMenuOpen ? "block " : "hidden "
        } md:flex`}
      >
        <li className="hover:text-blue-800 hover:font-semibold">
          <NavLink
            to="/"
            onClick={closeMenu}
            className={({ isActive }) => (isActive ? "text-blue-800 " : "")}
            exact="true"
          >
            HOME
          </NavLink>
        </li>
        <li className="hover:text-blue-800 hover:font-semibold">
          <NavLink
            to="/about"
            onClick={closeMenu}
            className={({ isActive }) => (isActive ? "text-blue-800 " : "")}
          >
            ABOUT
          </NavLink>
        </li>
        <li className="hover:text-blue-800 hover:font-semibold">
          <NavLink
            to="/products"
            onClick={closeMenu}
            className={({ isActive }) => (isActive ? "text-blue-800 " : "")}
          >
            PRODUCTS
          </NavLink>
        </li>
        <li className="hover:text-blue-800 hover:font-semibold">
          <NavLink
            to="/contact"
            onClick={closeMenu}
            className={({ isActive }) => (isActive ? "text-blue-800 " : "")}
          >
            CONTACT
          </NavLink>
        </li>
        <li>
          <button className="text-1 border-2 border-blue-600 bg-blue-600 px-3 py-1 rounded-md font-semibold text-white">
            LOG IN
          </button>
        </li>
        <li className="text-[25px] relative hover:text-blue-800 hover:font-semibold">
          <NavLink
            to="/cart"
            onClick={closeMenu}
            className={({ isActive }) => (isActive ? "text-blue-800 " : "")}
          >
            <FiShoppingCart />
            <span className="absolute bottom-5 left-5 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              10
            </span>
          </NavLink>
        </li>
      </ul>

      {/* Hamburger Menu Icons */}
      <div className="text-2xl md:hidden cursor-pointer" onClick={toggleMenu}>
        {isMenuOpen ? <CgClose /> : <CgMenu />}
      </div>
    </div>
  );
};

export default Nav;
