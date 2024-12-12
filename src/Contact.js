import { Input } from 'postcss'
import React from 'react'

const Contact = () => {
  return (
    <div>
      <h2 className='text-center text-[30px] p-4'>Contact Name</h2>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14014.305838221704!2d77.30881000352804!3d28.58247842247512!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce45e3eccb8a7%3A0xd5eb60e62b19e6ba!2sSector%2015%2C%20Noida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1733764875504!5m2!1sen!2sin" width="100%" height="400" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      <div className="flex items-center justify-center">
        <form action="https://formspree.io/f/xovqzwey" method='POST' autoComplete='off' className='my-4 flex flex-col gap-4 '>
          <input type="text" name="username" required autoComplete='off' className='w-[400px] h-[20px] border-purple-400 shadow-md ' placeholder='USERNAME'>
          </input>

          <input type="email"  name="Email" required autoComplete='off' className='w-[400px] h-[20px] border-purple-400 shadow-md ' placeholder='EMAIL'>
          </input>

          <textarea name="Message" required autoComplete='off' cols="30" rows="10" className='max-w-[400px] h-[150px] border-purple-400 shadow-md '>
          </textarea>
          
          <button className='text-center items-center  border h-[40px] w-[100px] bg-blue-600 border-blue-600 rounded-md text-white'>
          SEND</button>
        </form>
      </div>
    </div>

  )
}

export default Contact