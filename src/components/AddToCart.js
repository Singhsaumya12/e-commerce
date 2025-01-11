import React, { useState } from 'react';
import { FaCheck } from 'react-icons/fa';
import CartAmountToggle from './CartAmountToggle';
import { NavLink } from 'react-router-dom';

const AddToCart = ({ product }) => {
  const { id, colors, stock } = product;
  const [color, setColor] = useState(colors[0]);
  const[amount ,setAmount] = useState(1);

  const setDecrease = () =>{
    amount > 1 ? setAmount(amount-1) : setAmount(1);
  };
  const setIncrease = () =>{
    amount < stock ? setAmount(amount+1) : setAmount(stock);
  };


  return (
    <div>
      <p className="flex items-center  py-2 gap-3">
        Colors:
        {colors.map((curColor, index) => (
          <button
            key={index}
            style={{ backgroundColor: curColor }}
            className={`w-7 h-7 rounded-full border-none cursor-pointer flex items-center justify-center ${
              color === curColor ? 'outline outline-1' : 'opacity-75'
            }`}
            onClick={() => setColor(curColor)}
          >
            {color === curColor && <FaCheck className="text-white h-5" />}
          </button>
        ))}
      </p>
      
      {/* add to cart */}
      <CartAmountToggle
      amount={amount}
      setDecrease={setDecrease}
      setIncrease={setIncrease}/>

      <NavLink to= "/cart">
      <button
      className='h-[36px] px-4 bg-blue-600 border border-blue-600 text-white'>Add To Cart</button>
      </NavLink>
    </div>
  );
};

export default AddToCart;
