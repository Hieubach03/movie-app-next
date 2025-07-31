import React, { useEffect, useState } from 'react'
import { Movie } from '../type';

function useTMDB(endpoint: string) {
    const [movies, setMovies] = useState<Movie[]>([]);
    const [loading, setLoading] = useState(true);
    const [loadingMore, setLoadingMore] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [page, setPage] = useState(1);

    const watchMore = () => {
        if (!loadingMore) {
            setPage(prev => prev + 1)
        }
    }

    useEffect(() => {
        if (!endpoint) return;

        const fetchData = async () => {
            const isFirstPage = page === 1;
            if (isFirstPage) setLoading(true)
            else setLoadingMore(true)

            try {
                const res = await fetch(`https://api.themoviedb.org/3/${endpoint}?api_key=4f85134e0e3de33d9af45eb9596b5735&page=${page}`);
                if (!res.ok) throw new Error("Failed to fetch");
                const json = await res.json();

                const newMovies: Movie[] = (json.results || []).slice(0, 10);
                setMovies(prev => {
                    const currentId = new Set(prev.map(c => c.id));
                    const originalMovie = newMovies.filter(c => !currentId.has(c.id));
                    return [...prev, ...originalMovie]
                });

            } catch (err: unknown) {
                if (err instanceof Error) {
                    setError(err.message);
                } else {
                    setError("Unknown error occurred");
                }
            } finally {
                if (isFirstPage) setLoading(false)
                else setLoadingMore(false)
            }
        };
        fetchData();
    }, [endpoint, page])
    return { movies, loading, loadingMore, error, watchMore }
}

export default useTMDB