import React from 'react'
import { NavLink } from 'react-router-dom';
import FormatPrice from '../Helpers/FormatPrice';

const Product = (curElem) => {
    const { id, name, image ,price ,category } = curElem;
    return (
        <NavLink to={`/singleproduct/${id}`}>
        <div className="max-w-lg mx-auto bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl">
          <figure>
            <img
              src={image}
              alt={name}
              className="w-full h-64 object-cover transition-transform duration-300 ease-in-out hover:scale-110"
            />
            <figcaption className="bg-blue-100 text-blue-600 text-xl font-semibold py-4 text-center">
              {category}
            </figcaption>
          </figure>
          <div className="p-4">
            <div className="flex justify-between items-center">
              <h3 className="text-[16px] font-semibold text-gray-800">{name}</h3>
              <p className="text-blue-900 font-bold text-[16px]">{<FormatPrice price={price}/>}</p> 
              {/* prop pass price*/}
            </div>
          </div>
        </div>
      </NavLink>
      
    )
};
export default Product