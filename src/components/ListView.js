import React from 'react'
import FormatPrice from '../Helpers/FormatPrice';
import { NavLink } from 'react-router-dom';

const ListView = ({products}) => {
  return (
    <div>
        <div>
            {products.map((curElem) => {const{id,name,image,price,description} = curElem;
            return(
               <>
                <div className="card grid grid-cols-1 md:grid-cols-2 gap-4 p-6 border rounded-lg shadow-lg bg-white hover:shadow-xl transition-shadow">
  <figure className="overflow-hidden rounded-lg">
    <img 
      src={image} 
      alt={name} 
      className="w-full h-96 object-cover transition-transform duration-300 hover:scale-110"
    />
  </figure>
  <div className="flex flex-col justify-between">
    <div>
      <h3 className="text-[20px] font-semibold text-gray-800 mb-2">{name}</h3>
      <p className="text-blue-600 font-bold text-[16px] mb-2">
        <FormatPrice price={price} />
      </p>
      <p className="text-gray-600 text-[14px] mb-4">{description.slice(0, 99)}</p>
    </div>
    <NavLink to={`/singleproduct/${id}`}>
      <button className="h-[40px] px-6 bg-blue-600 text-white font-semibold border border-blue-600 rounded transition-colors hover:text-blue-600 hover:bg-white">
        Read More
      </button>
    </NavLink>
  </div>
</div>

               </>
            )
        })}
        </div>
    </div>
  )
}

export default ListView