// import React from 'react'
// import MoviesDetail from './MoviesDetail'

// async function getMovie(id: string) {
//     const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=4f85134e0e3de33d9af45eb9596b5735`)
//     if (!res.ok) return null;
//     return res.json();
// }
// async function getCast(id: string) {
//     const res = await fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=4f85134e0e3de33d9af45eb9596b5735`)
//     if (!res.ok) return null;
//     const data = await res.json();
//     return data.cast.slice(0, 5);
// }
// async function getGenres(id: string) {
//     const res = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=4f85134e0e3de33d9af45eb9596b5735`)
//     if (!res.ok) return null;
//     const data = await res.json();
//     return data.genres.slice(0, 5);
// }
// async function getSimilar(id: string) {
//     const res = await fetch(`https://api.themoviedb.org/3/movie/movie_id/similar?api_key=4f85134e0e3de33d9af45eb9596b5735`)
//     if (!res.ok) return null;
//     return res.json();
// }

// async function page({ params }: { params: { id: string } }) {
//     const {id}= params;
//     const [movie, cast, genre]=await Promise.all([
//         getMovie(id),
//         getCast(id),
//         getGenres(id)
//     ])
//     if (!movie) return <p className='flex justify-center items-centertext-white text-center'>Movie not found</p>

//     return (
//         <main>
//             <MoviesDetail movie={movie} cast={cast} genre={genre} />
//         </main>
//     )
// }

// export default page
"use client";
import { useParams } from 'next/navigation'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import MoviesDetail from './MoviesDetail';
import useDetail from '@/app/hooks/useDetail';
import Similar from '@/app/component/Similar'

function page() {
    const { id } = useParams();
    const { movie, cast, similar, videos,loading, error } = useDetail(id as string, 'movie');

    if (loading) {
        return (
            <p className='text-white font-semibold text-2xl text-center flex justify-center items-center h-[100vh] w-full gap-x-3'>
                <FontAwesomeIcon icon={faSpinner} className='animate-spin w-9 h-9' />
                Loading...
            </p>
        )
    }

    if (error) {
        return <p className='flex justify-center items-center h-[65vh] text-white text-center'>Error: {error}</p>
    }

    if (!movie) {
        return <p className='text-white text-center'>No movie found</p>
    }
    return (
        <main>
            <MoviesDetail movie={movie} cast={cast} videos={videos}/>
            <Similar similar={similar} loading={loading} type={'movies'} isTV={false} />
        </main>
    )
}

export default page