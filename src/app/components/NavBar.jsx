'use client'
import React from 'react'
import Image from 'next/image'
import logo from "@/assets/images/logo.svg"
import Link from 'next/link'
import { IoCartOutline } from "react-icons/io5";
import userImage from '@/assets/images/image-avatar.png'
import { useState } from 'react'
import productImage from '@/assets/images/image-product-1.jpg'
import { MdDelete } from "react-icons/md";
import { IoMdMenu } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { useAutoAnimate } from '@formkit/auto-animate/react'



const navData=[{
    href:"#",
    title:"Collections",
    key:'1'
},{
    href:"#",
    title:"Men",
    key:'2'
},{
    href:"#",
    title:"Women",
    key:'3'
},{
    href:"#",
    title:"About",
    key:'4'
},{
    href:"#",
    title:"Contact",
    key:'5'
},
]


function NavBar() {

    const [cart, setCart]= useState(false)
    const [menu, setMenu]= useState(false)

    const [animationParent] = useAutoAnimate()

   
  return (
    <div
     ref={animationParent}
     className='flex justify-between items-center border-b h-[88px] '>
   {/* {left part} */}
     {  menu && <MenuBar setMenu={setMenu}/>}

       <div className='flex gap-16 items-center px-5'>
         <div className='flex gap-5 items-center'>
         <IoMdMenu className='text-3xl min-w-7 min-h-7 md:hidden cursor-pointer'
          onClick={()=> setMenu(true)}/>

         <Image className='h-5 w-auto' src={logo} alt='Logo of the brand' priority={false}/>
         </div>
         <div className='flex gap-4 '>
            {navData.map((value)=> (
               <Link 
               className='hidden text-gray-400 text-lg
               md:flex items-center transition-all font-medium hover:text-black
               hover:border-b-4 border-orange-500 h-[88px]'
               href={value.href}
               key={value.key}
               >
                <span>
                {value.title}
                </span>
               </Link>
            ))}
         </div>
       </div>

    
   {/* right part */}
   <div className='flex gap-5 items-center cursor-pointer px-5'>

    <div className='relative'>
    <IoCartOutline className='text-3xl' onClick={()=> setCart(!cart)}/>
    {cart && <CartClick/>}
    </div>

   <Image
    className='h-10 w-10 hover:border-[3px] rounded-full
    border-orange-400 cursor-pointer'
     src={userImage} 
     alt='user image'
     priority={false}/>
   </div>
   
    </div>
  )
}

export default NavBar


function CartClick(){
    return(
        <div className='absolute top-20 border w-[350px] max-w-[350px] 
        right-[-60px] rounded-md shadow-sm px-4 flex flex-col transition ease-out delay-150'>
            <h1 className='font-bold py-3 mb-6 shadow-sm text-lg border-b'>Cart</h1>
            <section className='flex items-center gap-3 justify-between'>
               <Image
                className='h-12 rounded w-auto'
                src={productImage}
                alt='cart image'/>
            <div>
                <p className=''>Autumn Limited Edition</p>
                <p className='text-sm'> 
                <span className='text-gray-500'>
                $125.00 * 4  {'\t'}
                </span> 
                <span className='font-semibold'>
                $500.00
                </span>
                </p>
            </div>    
            <div>
            <MdDelete className='text-2xl'/>
            </div>
            </section>
            <button className='w-full bg-orange-400
             text-white rounded h-[45px] my-5 font-regular hover:bg-orange-500'>
                Checkout</button>
        </div>
    )
}


function MenuBar({setMenu}){
    return(
        <div className='z-10	 flex h-screen w-full bg-black/30 fixed top-0 left-0'>
         <div className='h-full bg-white w-[300px] p-5 flex flex-col gap-20'>
         <RxCross2 className='text-3xl' onClick={()=> setMenu(false)}/>

         <div className='flex flex-col gap-4'>
            {navData.map((value)=> (
               <Link 
               className='text-lg
               flex items-center transition-all font-semibold text-black
               active:text-orange-400'
               href={value.href}
               key={value.key}
               >
                <span>
                {value.title}
                </span>
               </Link>
            ))}
         </div>

         </div>
        </div>
    )
}

// function CartIcon(){
//     return(
//         <div className='w-4 h-4 bg-orange-500 rounded-full absolute'>
            
//         </div>
//     )
// }