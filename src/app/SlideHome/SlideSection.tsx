
"use client";
import React, { useState, useEffect } from 'react'
import Link from 'next/link';
import { Movie } from '../type'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faSpinner } from '@fortawesome/free-solid-svg-icons'
import useTMDB from '../hooks/useTMDB';
interface SlideHome {
    title: string;
    endpoint: string;
    linkTo: string;
    isTV?: boolean;
}
const SlideSection: React.FC<SlideHome> = ({ title, endpoint, linkTo, isTV = false }) => {
    const { movies, loading, error } = useTMDB(endpoint)
    if (error) return <p>Error: {error}</p>

    return (
        <div className='px-2'>
            <div className='flex justify-between items-center mb-10 mt-10'>
                <h3 className='text-white text-2xl font-semibold'>{title}</h3>
                <Link href={"/movies"} className='text-white border-2 border-white text-sm font-semibold rounded-full px-5 py-1 hover:text-red-500 hover:bg-white transition'>
                    View more
                </Link>
            </div>
            {loading ? (
                <p className='text-white font-semibold text-2xl text-center flex justify-center items-center h-[30vh] w-full gap-x-3'>
                    <FontAwesomeIcon icon={faSpinner} className='animate-spin w-8 h-8' />
                    Loading...
                </p>
            ) : (
                <Swiper
                    modules={[Autoplay]}
                    spaceBetween={10}
                    slidesPerView={'auto'}
                    loop={true}
                    freeMode={true}
                    autoplay={{
                        delay: 5000,
                    }}
                    className='w-full'
                >
                    {movies.map((slide) => (
                        <SwiperSlide key={slide.id} style={{ width: '200px' }} className='!w-[229px] flex flex-col items-center text-white hover:text-red-500 transition-all cursor-pointer'>
                            <Link href={`${linkTo}/${slide.id}`}>
                                <div className='w-full h-[330px] bg-cover bg-center rounded-2xl' style={{ backgroundImage: `url("https://image.tmdb.org/t/p/original${slide.poster_path}")` }}>
                                    <div className='group flex justify-center items-center w-full h-[330px] bg-black/60 opacity-0 hover:opacity-100'>
                                        <button className='flex justify-center items-center w-25 h-15 rounded-full bg-red-500 shadow-[0_0_20px_2px_red] hover:shadow-[0_0_20px_5px_red] opacity-0 scale-50 group-hover:opacity-100 group-hover:scale-100 transition-all duration-400 ease-in-out'>
                                            <FontAwesomeIcon icon={faPlay} className="text-white text-2xl" />
                                        </button>
                                    </div>
                                </div>
                                <h3 className='text-[20px] mt-3'>{isTV ? slide.name : slide.title}</h3>
                            </Link>
                        </SwiperSlide>
                    ))}
                </Swiper>
            )}
        </div>
    )
}
export default SlideSection