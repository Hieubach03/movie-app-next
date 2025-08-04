// import React, { useEffect, useState } from 'react'
// import { Movie } from '../type';

// function useTMDB(endpoint: string) {
//     const [movies, setMovies] = useState<Movie[]>([]);
//     const [loading, setLoading] = useState(true);
//     const [loadingMore, setLoadingMore] = useState(false);
//     const [error, setError] = useState<string | null>(null);
//     const [page, setPage] = useState(1);

//     const watchMore = () => {
//         if (!loadingMore) {
//             setPage(prev => prev + 1)
//         }
//     }

//     useEffect(() => {
//         if (!endpoint) return;

//         const fetchData = async () => {
//             const isFirstPage = page === 1;
//             if (isFirstPage) setLoading(true)
//             else setLoadingMore(true)

//             try {
//                 const res = await fetch(`https://api.themoviedb.org/3/${endpoint}?api_key=4f85134e0e3de33d9af45eb9596b5735&page=${page}`);
//                 if (!res.ok) throw new Error("Failed to fetch");
//                 const json = await res.json();

//                 const newMovies: Movie[] = (json.results || []).slice(0, 10);
//                 setMovies(prev => {
//                     const currentId = new Set(prev.map(c => c.id));
//                     const originalMovie = newMovies.filter(c => !currentId.has(c.id));
//                     return [...prev, ...originalMovie]
//                 });

//             } catch (err: unknown) {
//                 if (err instanceof Error) {
//                     setError(err.message);
//                 } else {
//                     setError("Unknown error occurred");
//                 }
//             } finally {
//                 if (isFirstPage) setLoading(false)
//                 else setLoadingMore(false)
//             }
//         };
//         fetchData();
//     }, [endpoint, page])
//     return { movies, loading, loadingMore, error, watchMore }
// }

// export default useTMDB

import { useInfiniteQuery, UseInfiniteQueryResult , InfiniteData} from '@tanstack/react-query'
import { Movie } from '../type'

export type TMDBReponse = {
    movies: Movie[],
    nextPage: number;
    isLast: boolean;
}
const API_KEY = "4f85134e0e3de33d9af45eb9596b5735";
const BASE_URL="https://api.themoviedb.org/3"

const fetchMovies = async ({ pageParam = 1, queryKey }: any): Promise<TMDBReponse> => {
    const [_key, endpoint] = queryKey;
    const res = await fetch(`${BASE_URL}/${endpoint}?api_key=${API_KEY}&page=${pageParam}`);
    if (!res.ok) throw new Error("Failed to fetch");

    const data = await res.json();
    return {
        movies: (data.results || []).slice(0, 10) as Movie[],
        nextPage: pageParam + 1,
        isLast: pageParam >= data.total_pages,
    };
};

function useTMDB(endpoint: string): UseInfiniteQueryResult<InfiniteData<TMDBReponse>, Error> {
    return useInfiniteQuery<TMDBReponse, Error>({
        queryKey: ['movies', endpoint],
        queryFn: fetchMovies,
        initialPageParam: 1,
        getNextPageParam: (lastPage) => (lastPage.isLast ? undefined : lastPage.nextPage),
        staleTime: 1000 * 60 * 5, 
        enabled: !!endpoint,
    });
}

export default useTMDB