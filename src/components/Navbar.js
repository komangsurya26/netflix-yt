import React from 'react'
import Logo from './Logo'
import Link from 'next/link'
import Image from 'next/image'
import { signOut } from 'next-auth/react'

import {BiSearch,BiBell} from 'react-icons/bi'


const Navbar = () => {
  return (
    <nav>
        <div className='container flex justify-between'>
            <div className='flex items-center space-x-2 md:space-x-10'>
                <Link href='/'>
                    <Logo style='h-auto w-[100px]'/>
                </Link>
                <ul className='space-x-4 hidden md:flex gap-4'>
                    <li className='cursor-pointer text-lg font-semibold hover:text-[#b3b3b3] duration-[.4s]'>
                        Utama
                    </li>
                    <li className='headerLink'>Tv</li>
                    <li className='headerLink'>Film</li>
                    <li className='headerLink'>Baru & Populer</li>
                    <li className='headerLink'>Pilihan Saya</li>
                </ul>
            </div>
            <div className='flex items-center space-x-4 font-light gap-5 cursor-pointer'>
                <BiSearch className='sm:inline hidden h-6 w-6'/>
                <BiBell className='h-6 w-6'/>
                <Image
                src='/dp.png'
                alt='dp'
                width={30}
                height={30}
                className='cursor-pointer rounded w-auto h-auto'
                onClick={() => signOut()}
                />

            </div>
        </div>
    </nav>
  )
}

export default Navbar