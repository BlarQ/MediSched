import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Hero = () => {
    return (
        <section>
            <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-12 lg:py-16">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
                    <div className="relative h-64 overflow-hidden rounded-3xl sm:h-80 lg:order-last lg:h-full">
                        <Image
                            alt="Doctors"
                            src="/doctors.jpg"
                            className="absolute inset-0 h-full w-full object-cover hover:scale-[1.02] transform transition-transform ease-in-out duration-300 rounded-3xl"
                            width={1000}
                            height={1000}
                            loading='lazy'
                            effect='blur'
                        />
                    </div>

                    <div className="lg:py-24">
                        <h2 className="text-3xl font-bold sm:text-4xl">Book <span className='text-brandBlue'>Appointments</span> seemlessly with trusted <span className='text-brandBlue'>Healthcare</span> providers.</h2>

                        <p className="mt-4 text-gray-600">
                            Access a network of top-rated healthcare providers and manage your appointments with ease. Your health deserves the best care, just a few clicks away.
                        </p>

                        <Button className='mt-8 bg-brandBlue hover:bg-brandBlue'>Explore Now</Button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero