"use client";

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Logo from '../images/logo.png'
// import { Menu, X } from 'lucide-react'
import { usePathname } from 'next/navigation';

function header() {
    const [isScroll, setIsScroll] = useState(false);
    // const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    const isHome = pathname === '/';
    const isMovies = pathname.startsWith('/movies');
    const isTVSeries = pathname.startsWith('/tvSeries');

    useEffect(() => {
        const handleSrcoll = () => {
            setIsScroll(window.scrollY > 200);
        };
        window.addEventListener("scroll", handleSrcoll);
        return () => window.removeEventListener("scroll", handleSrcoll);
    }, [])

    return (
        <header className={`fixed bottom-0 lg:top-0 h-20 z-3 w-full ${isScroll ? 'lg:bg-black animate-scrollSlideDown' : 'lg:bg-transparent'} bg-black lg:transition-colors duration-300 lg:py-12 flex flex-col lg:flex-row justify-between lg:px-[100px] items-center`}>
            <div className='py-0'>
                <Link href="/" className='hidden lg:flex items-center gap-x-3 text-white hover:text-red-500'>
                    <Image src={Logo} alt='logo' width={50} height={50} />
                    <h3 className='text-3xl font-semibold'>theMovies</h3>
                </Link>
            </div>
            <nav className='py-5 flex flex-row items-center lg:bg-transparent gap-x-10 lg:gap-x-10 gap-y-7'>
                <Link href={"/"}
                    className={`relative text-2xl font-semibold
                    ${isHome ? 'text-red-500' : 'text-white hover:text-red-500'}
                after:absolute after:bottom-[-6px] after:h-[3px] after:bg-red-500
                after:transition-all after:duration-300 after:left-1/2 after:-translate-x-1/2
                ${isHome ? 'after:w-full' : 'after:w-0 hover:after:w-full'}`}
                >
                    Home
                </Link>
                <Link href={"/movies"} className={`relative text-2xl font-semibold 
                ${isMovies ? 'text-red-500' : 'text-white hover:text-red-500'}
                after:absolute after:bottom-[-6px] after:h-[3px] after:w-0 after:bg-red-500
                after:transition-all after:duration-300 after:left-1/2 after:-translate-x-1/2
                ${isMovies ? 'after:w-full' : 'after:w-0 hover:after:w-full'}`}
                >
                    Movies
                </Link>
                <Link href={"/tvSeries"} className={`relative text-2xl font-semibold 
                ${isTVSeries ? 'text-red-500' : 'text-white hover:text-red-500'}
                after:absolute after:bottom-[-6px] after:h-[3px] after:bg-red-500
                after:transition-all after:duration-300 after:left-1/2 after:-translate-x-1/2
                ${isTVSeries ? 'after:w-full' : 'after:w-0 hover:after:w-full'}`}
                >
                    TV Series
                </Link>
            </nav>
            {/* <div className='absolute right-5 top-9 text-white md:hidden'>
                <button onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X size={30} /> : <Menu size={30} />}
                </button>
            </div> */}
            {/* {isOpen && (
                <nav className='text-white bg-[#1E1D1DC9] md:hidden w-full flex flex-col md:flex-row items-center md:gap-x-20  mt-3'>
                    <Link href={"/"}
                        className={`w-ful py-3 text-center text-2xl font-semibold
                    ${isHome ? 'text-red-500 bg-white w-full' : 'hover:text-white hover:bg-[#E50816] w-full'}`}
                    >
                        Home
                    </Link>
                    <Link href={"/movies"}
                        className={`w-full py-3 text-center text-2xl font-semibold
                    ${isMovies ? 'text-red-500 bg-white' : 'hover:text-white hover:bg-[#E50816]'}`}                    >
                        Movies
                    </Link>
                    <Link href={"/tvSeries"}
                        className={`w-full py-3 text-center text-2xl font-semibold
                    ${isTVSeries ? 'text-red-500 bg-white' : 'hover:text-white hover:bg-[#E50816]'}`}                    >
                        TV Series
                    </Link>
                </nav>
            )} */}
        </header>
    )
}

export default header