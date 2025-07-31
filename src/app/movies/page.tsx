
"use client";
import React, { useState, useEffect } from 'react'
import { Movie } from '../type'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faSpinner } from '@fortawesome/free-solid-svg-icons'
import useTMDB from '../hooks/useTMDB';
import Link from 'next/link';
import useSearch from '../hooks/useSearch';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { Search, X } from 'lucide-react';
function page() {
    const [searchText, setSearchtext] = useState('');
    const [filterMovies, setFilterMovies] = useState<Movie[]>([]);
    const { movies, loading, error, watchMore } = useTMDB('trending/movie/day')
    const [showSuggestions, setShowSuggestion] = useState(true);

    const suggestions = searchText
        ? movies.filter(movie =>
            movie.title.toLowerCase().includes(searchText.toLowerCase())
        ).slice(0, 5)
        : [];

    const handleSearch = () => {
        if (searchText.trim() === '') {
            setFilterMovies([])
            return;
        };
        const filter = movies.filter(movie =>
            movie.title.toLowerCase().includes(searchText.toLowerCase())
        );
        setFilterMovies(filter);
        setShowSuggestion(false)

    };

    if (error) return <p>Error: {error}</p>
    return (
        <div className=' pb-10'>
            <div className="relative w-full bg-white">
                <h2 className='relative z-2 text-center text-5xl py-25 font-bold text-white'>Movies</h2>
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-[#0F0F0F] to-transparent z-0" />
            </div>
            <div className='mt-15 px-5 lg:px-[100px]'>
                <div className="lg:w-[50%] mb-10 relative z-10">
                    <div className="relative">
                        <input
                            value={searchText}
                            onChange={(e) => setSearchtext(e.target.value)}
                            placeholder="Enter movie name"
                            className="bg-black text-white px-5 py-3 pr-[100px] rounded-full w-full"
                        />
                        {searchText && (
                            <button
                                onClick={() => {
                                    setSearchtext('');
                                    setFilterMovies([]);
                                    setShowSuggestion(true);
                                }}
                                className="absolute right-[120px] top-1/2 -translate-y-1/2 text-white hover:text-gray-300"
                            >
                                <X />
                            </button>
                        )}
                        <button
                            onClick={handleSearch}
                            className="absolute right-2 top-1/2 -translate-y-1/2 bg-red-500 text-white px-5 py-2 rounded-full hover:bg-red-600 transition shadow-[0_0_15px_2px_red] hover:shadow-[0_0_15px_5px_red]"
                        >
                            Search
                        </button>
                    </div>
                    {suggestions.length > 0 && showSuggestions && (
                        <ul className="absolute mt-2 w-full rounded-2xl bg-white shadow-lg  z-20 max-h-[250px] overflow-y-auto">
                            {suggestions.map((movie) => (
                                <li
                                    key={movie.id}
                                    onClick={() => {
                                        setSearchtext(movie.title);
                                        setFilterMovies([]);
                                    }}
                                    className="py-2 px-3 rounded-none hover:bg-gray-300 cursor-pointer flex items-center gap-x-3"
                                >
                                    <FontAwesomeIcon icon={faMagnifyingGlass} className='w-8 h-8' />
                                    <span>{movie.title}</span>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>

                {loading ? (
                    <p className='text-white font-semibold text-2xl text-center flex justify-center items-center h-[50vh] w-full gap-x-3'>
                        <FontAwesomeIcon icon={faSpinner} className='animate-spin w-9 h-9' />
                        Loading...
                    </p>
                ) : (
                    <div className=' grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-y-20 gap-x-5 mx-auto'>
                        {(filterMovies.length > 0 ? filterMovies : movies).map((slide) => (
                            <Link href={`/movies/${slide.id}`} key={slide.id} className='flex flex-col text-white hover:text-red-500'>
                                <div className='group relative  w-full max-w-[450px] h-[350px] bg-center bg-cover rounded-2xl' style={{ backgroundImage: `url("https://image.tmdb.org/t/p/original${slide.poster_path}")` }}>
                                    <div className=' flex justify-center items-center w-full h-[350px] bg-black/60 opacity-0 hover:opacity-100'>
                                        <button className='flex justify-center items-center w-25 h-15 rounded-full bg-red-500 shadow-[0_0_20px_2px_red] hover:shadow-[0_0_20px_5px_red]  opacity-0 scale-50 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 ease-in-out '>
                                            <FontAwesomeIcon icon={faPlay} className="text-white text-2xl" />
                                        </button>
                                    </div>
                                </div>
                                <h3 className='lg:text-[20px] font-semibold mt-5'>{slide.title}</h3>
                            </Link>
                        ))}
                    </div>
                )}
                <div className=' flex justify-center'>
                    <button onClick={watchMore} disabled={loading} className='text-white border-2 border-white text-sm font-semibold rounded-full px-5 py-1 mt-5 hover:text-red-500 hover:bg-white transition'>
                        {loading ? 'Loading...' : 'Watch more'}
                    </button>
                </div>
            </div>
        </div>
    )
}
export default page