import React, { useEffect, useState } from 'react';
import { Movies } from '../components/Movies';
import { Preloader } from '../components/Preloader';
import { Search } from '../components/Search';

const API_KEY = process.env.REACT_APP_API_KEY;
function Main() {
    const [movies, setMovies] = useState();
    const [loading, setLoading] = useState();
    const makeRequest = (str) => {
        setLoading(true);
        fetch(str)
            .then((response) => response.json())
            .then((data) => {
                setMovies(data.Search);
                setLoading(false);
            })
            .catch((err) => {
                console.error(err);
                setLoading(false);
            });
    };
    useEffect(() => {
        makeRequest(`https://www.omdbapi.com/?apikey=${API_KEY}&s=matrix`);
    }, []);
    const searchMovies = (str, type = 'all') => {
        makeRequest(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${str}${type !== 'all' ? `&type=${type}` : ''}`);
    };
    return (
        <main className='main-container content'>
            <Search searchMovies={searchMovies} />
            {loading ? <Preloader /> : <Movies movies={movies} />}
        </main>
    );
}

export { Main };
