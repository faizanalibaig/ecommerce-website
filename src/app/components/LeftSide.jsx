'use client'

import Image from 'next/image'
import React, { useState, useEffect } from 'react';
import { RxCross2 } from "react-icons/rx";
import { useAutoAnimate } from '@formkit/auto-animate/react'
import { FaCaretLeft } from "react-icons/fa";
import { FaCaretRight } from "react-icons/fa";



import productImage1 from '@/assets/images/image-product-1.jpg'
import productImage2 from '@/assets/images/image-product-2.jpg'
import productImage3 from '@/assets/images/image-product-3.jpg'
import productImage4 from '@/assets/images/image-product-4.jpg'

const Product=[productImage1, productImage2, productImage3, productImage4]

function LeftSide() {

    const [animationParent] = useAutoAnimate()

    const [index,setIndex]= useState(0)
    const [image, setImage]= useState(Product[0])
    const [click, setClicked]= useState(false)
   
    useEffect(() => {
        setImage(Product[index]);
      }, [index]);
    
      function NextImage() {
        if (index < Product.length - 1) {
          setIndex((prev) => prev + 1);
        } else {
          setIndex(0);
        }
      }
    
      function BackImage() {
        if (index > 0) {
          setIndex((prev) => prev - 1);
        } else{
            setIndex(Product.length-1)
        }
      }
    
      
   

  return (
    <div
     className='flex flex-col gap-5 w-full justify-center md:w-[384px] '>
    <Image 
    src={image} 
    alt='The image of the product 1'
    className='h-[400px] w-full sm:h-[500px] md:h-[384px] md:w-[384px] md:rounded-[10px] cursor-pointer'
    onClick={()=> setClicked(true)}
    ref={animationParent}
    />
    
    <div className='md:flex hidden justify-between w-[384px] '>
        { Product.map((value, index)=>(
         <div key={index} 
         className='relative h-[84px] w-[84px] rounded-[6px] overflow-hidden cursor-pointer'       
         onClick={()=> {
            setImage(value) 
            setIndex(index) 
         }}>
        <Image 
         key={index}
         src={value}
         alt='Product Images'
         className='rounded-[6px]'
         />
         {
            image===value &&  ( <div className='h-full w-full absolute bg-white/60 top-0 '/>)
         }
        </div>
        )) }
    </div>
      {click && (
    <div className='flex flex-col  gap-5 h-screen w-full fixed top-0 left-0 justify-center items-center
        bg-black/80 py-6 sm:py-16'>
            <div className='flex justify-end w-[320px] sm:w-[384px]'>
            <RxCross2 className='text-[35px] sm:text-[40px] text-white cursor-pointer' onClick={()=> setClicked(false)}/>
            </div>
            <div className='relative'>
            <Image 
             src={image} 
             alt='The image of the product 1'
             className='w-[320px] h-[320px] sm:h-[384px] sm:w-[384px] rounded-[10px]'
             />
            <div onClick={BackImage} className='flex justify-center items-center absolute top-1/2 left-[-20px]'>
            <FaCaretLeft className='text-2xl h-8 w-8 sm:h-10 sm:w-10 bg-white rounded-full cursor-pointer pr-1'/>
            </div>
            <div onClick={NextImage} className='flex justify-center items-center absolute top-1/2 right-[-20px]'>
            <FaCaretRight className='text-2xl h-8 w-8 sm:h-10 sm:w-10  bg-white rounded-full cursor-pointer pl-1'/>
            </div>
        </div>



        <div className='h-[384px] w-[320px] sm:w-[384px] flex justify-between'>
        { Product.map((value, index)=>(
         <div key={index} 
         className='relative h-[70px] w-[70px] sm:h-[84px] sm:w-[84px] rounded-[6px] overflow-hidden cursor-pointer'       
         onClick={()=>{
            setIndex(index)
            setImage(value)}}>
        <Image 
         key={index}
         src={value}
         alt='Product Images'
         className='rounded-[6px]'
         />
         {
            image===value &&  ( <div className='h-full w-full absolute bg-white/60 top-0 '/>)
         }
        </div>
        )) }
        </div>
        </div>
       ) }
    </div>
  )
}

export default LeftSide
