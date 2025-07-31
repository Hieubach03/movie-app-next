import { Cast, Movie } from '@/app/type'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

function MoviesDetail({ movie, cast, videos }: { movie: Movie, cast: Cast[], videos: any[] }) {

    return (
        <div>
            <div className='relative flex justify-center items-center w-full min-h-[100vh] bg-center bg-cover pb-40 lg:pb-0' style={{ backgroundImage: `url("https://image.tmdb.org/t/p/original${movie.backdrop_path}")` }}>
                <div className='absolute w-full bottom-0 left-0 z-2 h-[150vh] bg-gradient-to-t from-[#0F0F0F] to-transparent' />
                <div className='absolute z-2 flex flex-col md:flex-row items-center px-6 lg:px-15 gap-x-10 w-full mt-40'>
                    <div className='hidden lg:block w-full max-w-[350px] h-[550px] bg-cover bg-center rounded-4xl' style={{ backgroundImage: `url("https://image.tmdb.org/t/p/original${movie.poster_path}")` }} />
                    <div className='text-white flex flex-col gap-y-10 w-full'>
                        <h2 className='text-5xl md:text-7xl font-semibold'>{movie.title}</h2>
                        <div className='flex gap-x-3'>
                            {movie.genres.map((genres) => (
                                <div key={genres.id} className='border-3 rounded-full px-5 py-1'>
                                    <p>{genres.name}</p>
                                </div>
                            ))}
                        </div>
                        <p className='text-justify text-[15px] md:text-[20px] line-clamp-3'>{movie.overview}</p>
                        <div>
                            <h4 className='mb-3 text-2xl'>Casts</h4>
                            <div className='flex flex-wrap flex-row gap-x-5 gap-y-5 overflow-x-scroll scrollbar-hide'>
                                {cast.map((actor) => (
                                    <div key={actor.id} className='space-y-2 w-[100px]'>
                                        <div className='w-[100px] h-[140px] rounded-2xl bg-cover bg-center' style={{ backgroundImage: `url("https://image.tmdb.org/t/p/original${actor.profile_path}")` }}></div>
                                        <h3 className='text-[15px]'>{actor.name}</h3>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {videos.length > 0 && (
                <div className='px-6 lg:px-15 mt-20 text-white'>
                    <h3 className='text-2xl font-semibold mb-4'>Videos</h3>
                    <div className=''>
                        {videos.map((video) => (
                            <div key={video.id} className='space-y-3 mb-10'>
                                <h4 className='text-xl font-medium'>{video.name}</h4>
                                <div className=''>
                                    <iframe
                                        src={`https://www.youtube.com/embed/${video.key}`}
                                        allowFullScreen
                                        className='w-full h-[70vh] rounded-xl'
                                        title={video.name}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    )
}

export default MoviesDetail