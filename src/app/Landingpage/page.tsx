import React from 'react'
import Link from 'next/link'
import { Button, NumberInput, MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';

export default function Landingpage() {
  return (
    <MantineProvider>
    <div  >
      <div className='langing-bg h-[100vh] flex items-center justify-center'>

        <div>
          <h1 className='Lexend-SemiBold uppercase text-[1.7rem] md:text-[3rem] lg:text-[4rem] text-[white] text-center'>Welcome to BOOk store</h1>
          <div className='flex justify-center mt-5'>
        <Link href="/Viewbook">
         <Button className='mx-auto'>Start</Button>
      </Link>
      </div>
        </div>
      
      </div>
    </div>
    </MantineProvider>
  )
}
