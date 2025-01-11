import React from 'react'
import { FaMinus ,FaPlus } from 'react-icons/fa'

const CartAmountToggle = ({amount , setDecrease,setIncrease}) => {
  return (
    <div className='flex gap-14 p-2 text-center items-center justify-start'>
        <button className='text-[11px]' onClick={()=>setDecrease()}>
            <FaMinus/>
        </button>
        <div className='flex text-[16px] text-center text-blue-700  font-medium items-center justify-center'>{amount}</div>
        <button className='text-[11px]' onClick={()=>setIncrease()}>
            <FaPlus/>
        </button>
    </div>
  )
}

export default CartAmountToggle