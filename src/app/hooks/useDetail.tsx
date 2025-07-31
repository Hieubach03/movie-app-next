import React, { useEffect, useState } from 'react'
import { Cast, Genre, Movie } from '../type'

type MediaType = 'movie' | 'tv';

function useDetail(id: string, type: MediaType= 'tv') {
    const [movie, setMovie] = useState<Movie | null>(null);
    const [cast, setCast] = useState<Cast[]>([]);
    const [genre, setGenre] = useState<Genre[]>([]);
    const [similar, setSimilar] = useState<Movie[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [videos, setVideos] = useState<any[]>([]);

    useEffect(() => {
        if (!id || !type) return;

        const fetchData = async () => {
            try {
                const [movieRes, castRes, genreRes, similarRes, videosRes] = await Promise.all([
                    fetch(`https://api.themoviedb.org/3/${type}/${id}?api_key=4f85134e0e3de33d9af45eb9596b5735`),
                    fetch(`https://api.themoviedb.org/3/${type}/${id}/credits?api_key=4f85134e0e3de33d9af45eb9596b5735`),
                    fetch(`https://api.themoviedb.org/3/genre/${type}/list?api_key=4f85134e0e3de33d9af45eb9596b5735`),
                    fetch(`https://api.themoviedb.org/3/${type}/${id}/similar?api_key=4f85134e0e3de33d9af45eb9596b5735`),
                    fetch(`https://api.themoviedb.org/3/${type}/${id}/videos?api_key=4f85134e0e3de33d9af45eb9596b5735`),
                ]);

                if (!movieRes.ok || !castRes.ok || !genreRes.ok || !similarRes.ok || !videosRes.ok)
                    throw new Error("Failed to fetch data!");

                const movieData = await movieRes.json();
                const castData = await castRes.json();
                const genreData = await genreRes.json();
                const similarData = await similarRes.json();
                const videosData = await videosRes.json();

                const youtubeVideos = videosData.results.filter(
                    (video: any) => video.site === "YouTube"
                );
                setVideos(youtubeVideos.slice(0, 5));


                setMovie(movieData);
                setCast(Array.isArray(castData.cast) ? castData.cast.slice(0, 5) : []);
                setGenre(Array.isArray(genreData.genres) ? genreData.genres : []);
                setSimilar(Array.isArray(similarData.results) ? similarData.results.slice(0, 20) : []);
            } catch (err: unknown) {
                setError(err instanceof Error ? err.message : "Unknown Error");
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [id, type]);

    return { movie, cast, genre, similar, videos, loading, error };
}

export default useDetail;
