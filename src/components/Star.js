import React from 'react'
import { FaStar,FaStarHalfAlt } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";

const Star = ({stars,review}) => {
    // console.log(stars);
    const ratingStar = Array.from({length:5},(elem ,index) =>{
     let number = index + 0.5;    
   
    
  return (
    <div >
        <span key={index}>
            {
                stars >= index + 1 ? (<FaStar/>):stars >= number ? (<FaStarHalfAlt/>
                ): (<AiOutlineStar/>) 
            }
        </span>
    </div>
   )
  });
 return (
    <div className='flex items-center gap-2'>
       <span className='flex gap-2 text-[16px] text-yellow-500'>{ratingStar}</span>
       <p>({review} customer reviews)</p> 
       
       
    </div>
 )
}

export default Star