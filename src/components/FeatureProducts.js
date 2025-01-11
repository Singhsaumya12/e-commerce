import React from 'react'
import { useProductContext } from '../context/productcontext'
import Product from './Product';



const FeatureProducts = () => {

    const { isLoading , featureProducts} = useProductContext();
    // console.log("print",featureProducts);

    if(isLoading){
      return <div>.......Loading</div>
    }
    
    
  return (
    <>
   <div className="text-center bg-black my-1  relative z-40">
  <div className="pt-8">
    <label className="text-8xl font-semibold text-blue-500 uppercase tracking-wider">
      Check Now!
    </label>
   <div>
      <h3 className="text-5xl font-bold text-white mt-2">
          Our Featured Services
        </h3>
        <p className="text-gray-600 mt-2">Explore the best services we offer!</p>
   </div>
  </div>
  <div className=' py-[2%]'>
    <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-[20%]  ">
      {featureProducts.map((curElem) => (
        <Product key={curElem.id} {...curElem} />
      ))}
    </div>
  </div>
</div>

    </>
  )
}

export default FeatureProducts