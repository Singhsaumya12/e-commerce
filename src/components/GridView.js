import React from 'react'
import Product from "./Product"

const GridView = ({products}) => {
  console.log(products);
  
  return (
    <div>
       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 grid-rows-4 gap-4">
        {products.slice(0, 12).map((curElem) => (
          <Product key={curElem.id} {...curElem} />
        ))}
      </div>

    </div>
  )
}

export default GridView