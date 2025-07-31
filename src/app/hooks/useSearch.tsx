import React, { useEffect, useState } from 'react'
import { Movie } from '../type';

function useSearch(keyword: string) {
    const [results, setResults] = useState<Movie[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    useEffect(() => {
        if (!keyword.trim()) {
            setResults([])
            return;
        }
        const delayResults = setTimeout(() => {
            const fetchSearchResults = async () => {
                setLoading(true);
                try {
                    const res = await fetch(`https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(keyword)}&api_key=4f85134e0e3de33d9af45eb9596b5735`);
                    const data = await res.json();
                    setResults(data.results || []);
                } catch (error: unknown) {
                    if (error instanceof Error) {
                        setError(error.message)
                    } else {
                        setResults([]);
                    }

                } finally {
                    setLoading(false);
                }
            };
            fetchSearchResults();
        }, 500);

        return () => clearTimeout(delayResults);
    }, [keyword]);
    return { results, loading };
}

export default useSearch