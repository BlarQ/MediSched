import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const menu = [
    {
        id: 1,
        name: 'Home',
        url: '/',
    },
    {
        id: 1,
        name: 'Explore',
        url: '/explore',
    },
    {
        id: 1,
        name: 'Contact Us',
        url: '/contact',
    },
]

const Header = () => {
    return (
        <div className='flex items-center justify-between p-4 md:px-20 shadow-sm'>
            <div className='flex items-center gap-16'>
                <Link href={'/'}>
                    <Image src={"/logo.svg"} alt='Logo' width={180} height={80} />
                </Link>

                <ul className='md:flex gap-8 hidden'>
                    {
                        menu.map((item) => {
                            return (
                                <li className='hover:text-brandBlue hover:scale-105 transition-all ease-in-out cursor-pointer hover:font-semibold' key={item.id}>
                                    <Link href={item.url}>
                                    
                                        {item.name}
                                    </Link>
                                </li>
                            )
                        })
                    }
                </ul>

            </div>

            <Button className='bg-brandBlue hover:bg-brandBlue hover:scale-105 transition-all ease-in-out duration-300'>Get Started</Button> 
        </div>
    )
}

export default Header