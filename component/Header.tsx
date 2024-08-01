"use client";
import React from 'react'
import Link from 'next/link'
import MobileHeader from './MobileHeader'

import { usePathname } from "next/navigation";

export default function Header() {

  const currentRoute = usePathname();
  
  return (
    <div>
      <div className='hidden md:contents'>
    <div className='bg-[#34AEDD] h-[4rem] flex justify-center items-center '>

        <div className='flex gap-20'>
            <Link href="/">
            <p className={currentRoute === "/" ? "active Lexend-Medium text-[1.1rem] hover:text-[#384994] uppercase " : "Lexend-Medium text-[1.1rem] hover:text-[#384994] uppercase "}>Home</p>
            </Link>

            <Link href="Addbook">
            <p className={currentRoute === "/Addbook" ? "active Lexend-Medium text-[1.1rem] hover:text-[#384994] uppercase " : "Lexend-Medium text-[1.1rem] hover:text-[#384994] uppercase "}>Add Book</p>
            </Link>

            <Link href="Viewbook">
            <p className={currentRoute === "/Viewbook" ? "active Lexend-Medium text-[1.1rem] hover:text-[#384994] uppercase " : "Lexend-Medium text-[1.1rem] hover:text-[#384994] uppercase "}>View Book</p>
            </Link>

            <Link href="Shoppingcart">
            <p className={currentRoute === "/Shoppingcart" ? "active Lexend-Medium text-[1.1rem] hover:text-[#384994] uppercase " : "Lexend-Medium text-[1.1rem] hover:text-[#384994] uppercase "}>My Cart</p>
            </Link>
        </div>   
    </div>
    </div>
       <MobileHeader/>
    </div>
  )
}
