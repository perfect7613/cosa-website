import React from 'react'
import { Facebook, Github } from 'lucide-react'
import { Instagram } from 'lucide-react'
import { Linkedin } from 'lucide-react'
import { Youtube } from 'lucide-react'
import Link from 'next/link'

function Socials() {
  return (
    <main className='flex flex-col min-h-screen items-center justify-evenly p-20' id='Contacts'>
        <h1 className='text-2xl font-sans font-bold'>Follow Us On our Socials</h1>
        <div className=' flex justify-center gap-11 pr-5'>
            <Link href='https://www.facebook.com/cosa.gcoerc?mibextid=ZbWKwL'>
              <Facebook size={60} color='#2282E9 '/>
            </Link>
            <Link href='https://www.instagram.com/cosa.gcoerc/?igshid=MzRlODBiNWFlZA%3D%3D'>
              <Instagram size={60} color='#2282E9 '/>
            </Link>
            <Link href='https://www.linkedin.com/in/cosa-gcoerc/'>
              <Linkedin size={60} color='#2282E9 '/>
            </Link>
            <Link href='https://www.youtube.com/@cosagcoerc7415'>
              <Youtube size={60} color='#2282E9 '/>
            </Link>
        </div>
    </main>
  )
}

export default Socials