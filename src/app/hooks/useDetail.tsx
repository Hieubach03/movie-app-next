// import { useEffect, useState } from 'react'
// import { Cast, Genre, Movie } from '../type'
// import { useInfiniteQuery, UseInfiniteQueryResult, InfiniteData } from '@tanstack/react-query';
// const API_KEY = "4f85134e0e3de33d9af45eb9596b5735";
// const BASE_URL = "https://api.themoviedb.org/3"

// type MediaType = 'movie' | 'tv';

// function useDetail(id: string, type: MediaType = 'tv') {
//     const [movie, setMovie] = useState<Movie | null>(null);
//     const [cast, setCast] = useState<Cast[]>([]);
//     const [genre, setGenre] = useState<Genre[]>([]);
//     const [similar, setSimilar] = useState<Movie[]>([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState<string | null>(null);
//     const [videos, setVideos] = useState<any[]>([]);

//     useEffect(() => {
//         if (!id || !type) return;

//         const fetchData = async () => {
//             try {
//                 const [movieRes, castRes, genreRes, similarRes, videosRes] = await Promise.all([
//                     fetch(`${BASE_URL}/${type}/${id}?api_key=${API_KEY}`),
//                     fetch(`${BASE_URL}/${type}/${id}/credits?api_key=${API_KEY}`),
//                     fetch(`${BASE_URL}/genre/${type}/list?api_key=${API_KEY}`),
//                     fetch(`${BASE_URL}/${type}/${id}/similar?api_key=${API_KEY}`),
//                     fetch(`${BASE_URL}/${type}/${id}/videos?api_key=${API_KEY}`),
//                 ]);

//                 if (!movieRes.ok || !castRes.ok || !genreRes.ok || !similarRes.ok || !videosRes.ok)
//                     throw new Error("Failed to fetch data!");

//                 const movieData = await movieRes.json();
//                 const castData = await castRes.json();
//                 const genreData = await genreRes.json();
//                 const similarData = await similarRes.json();
//                 const videosData = await videosRes.json();

//                 const youtubeVideos = videosData.results.filter(
//                     (video: any) => video.site === "YouTube"
//                 );
//                 setVideos(youtubeVideos.slice(0, 5));


//                 setMovie(movieData);
//                 setCast(Array.isArray(castData.cast) ? castData.cast.slice(0, 5) : []);
//                 setGenre(Array.isArray(genreData.genres) ? genreData.genres : []);
//                 setSimilar(Array.isArray(similarData.results) ? similarData.results.slice(0, 20) : []);
//             } catch (err: unknown) {
//                 setError(err instanceof Error ? err.message : "Unknown Error");
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchData();
//     }, [id, type]);

//     return { movie, cast, genre, similar, videos, loading, error };
// }
// export default useDetail;



import { Cast, Genre, Movie } from '../type'
import { useQueries } from '@tanstack/react-query';

const API_KEY = "4f85134e0e3de33d9af45eb9596b5735";
const BASE_URL = "https://api.themoviedb.org/3"

type MediaType = 'movie' | 'tv';

async function fetcher(url: string) {
    const res = await fetch(url);
    if (!res.ok) throw new Error("Failed to fetch!");
    return res.json();
}

function useDetail(id: string, type: MediaType = 'tv') {
    const endpoints = [
        { key: 'movie', url: `${BASE_URL}/${type}/${id}?api_key=${API_KEY}` },
        { key: 'credits', url: `${BASE_URL}/${type}/${id}/credits?api_key=${API_KEY}` },
        { key: 'genres', url: `${BASE_URL}/genre/${type}/list?api_key=${API_KEY}` },
        { key: 'similar', url: `${BASE_URL}/${type}/${id}/similar?api_key=${API_KEY}` },
        { key: 'videos', url: `${BASE_URL}/${type}/${id}/videos?api_key=${API_KEY}` },
    ];

    const results = useQueries({
        queries: endpoints.map((endpoint) => ({
            queryKey: [endpoint.key, id, type],
            queryFn: () => fetcher(endpoint.url),
        })),
    });

    const isLoading = results.some((r) => r.isLoading);
    const isError = results.some((r) => r.isError);
    const error = results.find((r) => r.error)?.error as Error | undefined;

    const [movieRes, castRes, genreRes, similarRes, videosRes] = results.map((r) => r.data);

    const movie: Movie | null = movieRes ?? null;
    const cast: Cast[] = castRes?.cast?.slice(0, 5) ?? [];
    const genre: Genre[] = genreRes?.genres ?? [];
    const similar: Movie[] = similarRes?.results?.slice(0, 20) ?? [];
    const videos = (videosRes?.results ?? []).filter((v: any) => v.site === 'YouTube').slice(0, 5);

    return { movie, cast, genre, similar, videos, loading: isLoading, error: isError ? error?.message ?? "Unknown error" : null };
}

export default useDetail;
