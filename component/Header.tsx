"use client";
import React from 'react'
import Link from 'next/link'
import Image from 'next/image';
import MobileHeader from './MobileHeader'

import { usePathname } from "next/navigation";

export default function Header() {

  const currentRoute = usePathname();
  
  return (
    <div>
    <div className='hidden md:contents'>
      <div className=' bg-[#34AEDD] '>
      <div className='container mx-auto h-[4rem]'>
    <div className=' flex  items-center py-2'>
    <div className="w-[20%] flex items-center">
        <Image
                src="/Images/book.png"
                width={60}
                height={30}
                sizes="100vw"
                alt="close"
                className="ml-3"
              />
        </div>
        <div className='flex w-[80%]  justify-end items-center'>
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
    </div>
    </div>
    </div>
       <MobileHeader/>
    </div>
  )
}
