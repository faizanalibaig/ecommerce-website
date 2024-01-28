'use client'

import { IoCartOutline } from "react-icons/io5";
import { useState } from 'react';



function RightSide() {

    const [value, setValue] =useState(0)

    function Increment() {
        setValue((prev) => prev + 1);
    }
    
    function Decrement() {
        setValue((prev) => (prev > 0 ? prev - 1 : prev));
    }



  return (
    <div className='w-full  md:w-[70%] flex flex-col gap-5 py-10'>
        <h6 className='text-orange-500 font-medium'>SNEAKER COMPANY</h6>
        <h1 className='text-3xl font-bold md:text-5xl'>Fall Limited Edition Sneakers</h1>

        
        <section>
        <p className='text-lg text-gray-500'>These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they{'\u2019'}ll withstand everything the weather can offer</p>

        <div className='flex items-center gap-3 pt-5'>
        <h1 className='text-2xl font-semibold'>$125.00</h1>
        <h6 className='bg-orange-200 text-orange-500 rounded-[3px] w-12 text-center'>50%</h6>
        </div>
        <h6 className='text-gray-500 line-through'>$250.00</h6>

        </section> 

        <div className='flex flex-col gap-4 md:flex-row'>
            <div className='bg-gray-100 w-full h-14  sm:h-14 flex items-center justify-evenly rounded-[8px] sm:w-full md:w-40'>
                <button onClick={ Decrement}
                className='text-orange-500 text-xl font-medium'>
                   -
                </button>
                <label className='text-xl'>
                   {value}
                </label>
                <button  onClick={Increment}
                 className='text-orange-500 text-xl font-medium'>
                   +
                </button>
            </div>
            <div>
                <button
                className='h-14 w-full flex justify-center items-center gap-2 bg-orange-500 rounded-[8px] text-white sm:h-14 sm:w-full md:h-14 md:w-60'>
                   <span className='text-2xl'><IoCartOutline/></span>
                   <h1 className='text-lg sm:text-xl font-medium'>Add to cart</h1>
                </button>
            </div>
        </div>

    </div>
  )
}

export default RightSide