"use client";
import { useParams } from 'next/navigation'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import TVSeriesDetail from './TVSeriesDetail';
import useDetail from '@/app/hooks/useDetail';
import Similar from '@/app/component/Similar';

function page() {
    const { id } = useParams();
    const { movie, cast, similar, videos, loading, error } = useDetail(id as string, 'tv');

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
            <TVSeriesDetail movie={movie} cast={cast} videos={videos} />
            <Similar similar={similar} loading={loading} type='tvSeries' isTV={true} />
        </main>
    )
}

export default page