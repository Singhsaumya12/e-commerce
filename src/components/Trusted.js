import React from 'react'
import com1 from '../assests/images/company1.png'
import com2 from '../assests/images/company2.png'
import com3 from '../assests/images/company3.png'
import com4 from '../assests/images/company4.png'
import com5 from '../assests/images/company5.png'
import com6 from '../assests/images/company6.png'

const Trusted = () => {
  return (
    <div className="mt-4 flex flex-col  h-[200px] w-full items-center justify-center text-center  bg-blue-100 bg-opacity-40 ">
        <label className='text-[12px] font-semibold '>Trusted By 1000+ Companies</label>
        <div className='flex pt-4 w-[800px] gap-5 justify-between px-[20px]'>
        <img
        className="h-[70px]"
        src={com1}
        alt="com1"
      />  
       <img
        className="h-[70px]"
        src={com5}
        alt="com1"
      />  
       <img
        className="h-[70px]"
        src={com3}
        alt="com1"
      />  
       <img
        className="h-[70px]"
        src={com2}
        alt="com1"
      />  
       <img
        className="h-[70px]"
        src={com6}
        alt="com1"
      />  
       <img
        className="h-[70px]"
        src={com4}
        alt="com1"
      />  
        </div>
    </div>
  )
}

export default Trusted