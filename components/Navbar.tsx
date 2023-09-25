import React from 'react'
import { ModeToggle } from "./dark-toogle";
import Header from "./header";
import Image from 'next/image';
import Logo from '@/public/COSALogo.png'

function Navbar() {
  return (
    <div className="flex justify-between p-10">
        <Image src={Logo} alt='Logo' className='sm:w-15 h-20 lg: w-[80px]'/>
        <Header/>
        <ModeToggle/>
    </div>
  )
}

export default Navbar