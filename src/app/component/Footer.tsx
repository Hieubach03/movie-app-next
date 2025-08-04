"use client";
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Logo from '../images/logo.png'
import Policy from '../policy/Policy';

function Footer() {
    const [showPolicy, setShowPolicy] = useState(false);
    return (
        <div className='relative mb-20 lg:mb-0 flex flex-col justify-center items-center bg-[#1E1D1DC9] py-5 bg-cover bg-center' style={{ backgroundImage: `url("/img-bg.jpg")` }}>
            <div className="absolute inset-0 bg-black/60"></div>
            <div className="relative z-2 flex flex-col justify-center items-center py-5">
                <div className='flex items-center justify-between pb-5'>
                    <Link href="/" className='flex items-center gap-x-3 text-white hover:text-red-500'>
                        <Image src={Logo} alt='logo' width={50} height={50} />
                        <h3 className='text-3xl font-semibold'>theMovies</h3>
                    </Link>
                    {/* <div>
                        <Image src={ImgLogo} className="h-15 w-auto" alt="Logo" />
                    </div> */}
                </div>
                <div className='grid grid-cols-3 md:grid-cols-3 gap-x-10 md:gap-x-40 text-center my-5 '>
                    <div className='flex flex-col items-center text-white text-[13px] md:text-xl font-semibold mb-5 gap-y-3 '>
                        <Link href={""} className='hover:text-red-500'>Home</Link>
                        <Link href={""} className='hover:text-red-500'>Contact us</Link>
                        <Link href={""} className='hover:text-red-500'>Term of services</Link>
                        <Link href={""} className='hover:text-red-500'>About us</Link>
                    </div>
                    <div className='flex flex-col items-center text-white text-[13px] md:text-xl font-semibold mb-5 gap-y-3 '>
                        <Link href={""} className='hover:text-red-500'>Live</Link>
                        <Link href={""} className='hover:text-red-500'>FAQ</Link>
                        <Link href={""} className='hover:text-red-500'>Premium</Link>
                    </div>
                    <div className='flex flex-col items-center text-white text-[13px] md:text-xl font-semibold mb-5 gap-y-3'>
                        <Link href={""} className='hover:text-red-500'>You must watch</Link>
                        <Link href={""} className='hover:text-red-500'>Recent release</Link>
                        <Link href={""} className='hover:text-red-500'>Top IMDB</Link>
                        <Link href={"/policy"} className='hover:text-red-500'>Pravacy policy</Link>
                    </div>
                </div>
                <div>
                    <p className='text-gray-400 text-[13px]'>All uses of the Netflix materials are subject to the <button onClick={() => setShowPolicy(true)} className='underline hover:text-white'>Terms and Conditions.</button></p>
                </div>
            </div>
            {showPolicy && <Policy onClose={() => setShowPolicy(false)} />}
        </div >
    )
}

export default Footer