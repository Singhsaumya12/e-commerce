import React from 'react'
import { TbTruckDelivery } from "react-icons/tb";
import { MdSecurity } from "react-icons/md";
import { RiSecurePaymentLine } from "react-icons/ri";
import { GiReceiveMoney } from "react-icons/gi";

const Services = () => {
  return (
    <div className='flex gap-4 pt-4 w-full justify-center'>
        
        <div className="flex flex-col  h-[200px] w-[200px] items-center justify-center text-center rounded-xl bg-blue-100 bg-opacity-40 ">
    <div className="flex flex-col items-center justify-center">
        <TbTruckDelivery className="text-3xl mb-2 text-blue-500" />
        <h3 className="text-lg font-semibold">Super Fast and Free Delivery</h3>
    </div>
</div>


        <div className='flex flex-col gap-y-8'>
            <div>
                   <div className="flex gap-4  h-[90px] w-[200px] items-center justify-center text-center rounded-xl bg-blue-100 bg-opacity-40">
                        <MdSecurity className="text-4xl mb-2 text-blue-500 " /> 
                        <h3 className="text-lg font-semibold">Non-contact Shipping</h3>
                    </div>
            </div>
            <div>
                   <div className="flex gap-4  h-[90px] w-[200px] items-center justify-center text-center bg-blue-100 bg-opacity-40 rounded-lg">
                        <GiReceiveMoney  className="text-4xl mb-2 text-blue-500" />
                        <h3 className="text-lg font-semibold">Money-back Guaranteeed</h3>
                    </div>
            </div>
        </div>
        <div className="flex flex-col  h-[200px] w-[200px] items-center justify-center text-center bg-blue-100 bg-opacity-40 rounded-lg">
                    <div className="flex flex-col items-center justify-center">
                        < RiSecurePaymentLine className="text-4xl mb-2 text-blue-500" />
                        <h3 className="text-lg font-semibold">Super Secure Payment System</h3>
                    </div>
            </div>

    </div>
  )
}

export default Services