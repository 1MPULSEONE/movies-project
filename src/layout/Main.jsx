import React from 'react';
import { Movies } from '../components/Movies';
import { Preloader } from '../components/Preloader';
import { Search } from '../components/Search';

class Main extends React.Component {
    state = {
        movies: [],
    };
    searchMovies = (str, type = 'all') => {
        if (str) {
            fetch(`http://www.omdbapi.com/?apikey=fa56eac5&s=${str}${type !== 'all' ? `&type=${type}` : ''}`)
                .then((response) => response.json())
                .then((data) => this.setState({ movies: data.Search }));
        }
    };
    render() {
        const { movies } = this.state;
        return (
            <main className='main-container content'>
                <Search searchMovies={this.searchMovies} />
                {movies.length ? <Movies movies={movies} /> : <Preloader />}
            </main>
        );
    }
}

export { Main };
