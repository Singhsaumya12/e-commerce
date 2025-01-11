import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useProductContext } from './context/productcontext'
import PageNavigation from './components/PageNavigation'
import MyImage from './components/MyImage'
import FormatPrice from './Helpers/FormatPrice'
import { TbTruckDelivery } from "react-icons/tb";
import { TbReplace } from "react-icons/tb";
import { MdSecurity } from "react-icons/md";
import Star from './components/Star'
import AddToCart from './components/AddToCart'


const API = "https://api.pujakaitem.com/api/products"

const SingleProduct = () => {
  const {getSingleProduct ,isSingleLoading,
    singleProduct} = useProductContext();
    console.log("ss",singleProduct);
    

  const {id} = useParams();
  console.log("file",id)

  const {
    id:alias, name , company ,price ,description,category,stock,stars,reviews,image} = singleProduct;

  useEffect(()=>{
    getSingleProduct(`${API}?id=${id}`);
  },[]);

  if(isSingleLoading){
    return <div className=''>Loading.....</div>
  }

  return (
    <div>
     <PageNavigation  title={name} />
     <div>
       <div className='grid grid-cols-2 p-12'>
        {/* product image */}
          <div>
            <MyImage imgs={image}/>
          </div>
         {/* product data */}
         <div className='p-4 '>
          <h2>{name}</h2>
          <Star stars={stars} review={reviews} />
          {/* <p>{stars}</p>
          <p>{reviews} reviews</p> */}
          <p className=''>
            MRP:
            <del>
              <FormatPrice  price={price + 250000}/>
            </del>
          </p>
          <p className='text-blue-600 font-bold'>Deal of the Day: <FormatPrice price={price}/></p>
          <p className='text-justify'>{description}</p>
          <div className='flex space-x-4 pt-2 '>
          
            <div className="flex flex-col items-center justify-center">
              <div className='text-center text-3xl '><TbTruckDelivery /></div>
            <span className='text-xl '>Free Delivery</span>  
            </div>

            <div className="flex flex-col items-center justify-center">
              <div className='text-center text-3xl '><TbReplace /></div>
            <span className='text-xl'>30 Days Replacement</span>  
            </div>
            <div className="flex flex-col items-center justify-center">
              <div className='text-center text-3xl '><TbTruckDelivery /></div>
            <span className='text-xl'>Delivered</span>  
            </div>
            <div className="flex flex-col items-center justify-center">
              <div className='text-center text-3xl '><MdSecurity /></div>
            <span className='text-xl'>2 Year Warranty</span>  
            </div>     
          </div>
          <hr/>

          <div>
            <p >Available: <span className='text-2xl font-semibold'>{stock > 0 ?"In Stock":"Not Available"}</span></p>

            <p >Brand: <span className='text-2xl font-semibold'>{company}</span></p>
          </div>
          <hr className='bg-black h-0.5 border-none'/>
          {stock > 0 && <AddToCart product={singleProduct}/>}
         </div>
       </div>
     </div>
    </div>
  )
}

export default SingleProduct