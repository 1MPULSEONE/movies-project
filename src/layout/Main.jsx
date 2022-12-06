import React from 'react';
import { Movies } from '../components/Movies';
import { Preloader } from '../components/Preloader';
import { Search } from '../components/Search';

class Main extends React.Component {
    state = {
        movies: [],
        loading: true,
    };
    searchMovies = (str, type = 'all') => {
        this.setState({ loading: true });
        if (str) {
            fetch(`http://www.omdbapi.com/?apikey=fa56eac5&s=${str}${type !== 'all' ? `&type=${type}` : ''}`)
                .then((response) => response.json())
                .then((data) => this.setState({ movies: data.Search, loading: false }));
        }
    };
    render() {
        const { movies, loading } = this.state;
        return (
            <main className='main-container content'>
                <Search searchMovies={this.searchMovies} />
                {loading ? <Preloader /> : <Movies movies={movies} />}
            </main>
        );
    }
}

export { Main };
