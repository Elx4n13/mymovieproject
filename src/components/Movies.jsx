import React, { useState } from 'react';
import { api } from '../api';
import MoviesList from './MoviesList'
import SearchBar from './SearchBar'
import './global.scss'
const Movies = () => {
    const [movies, setMovies] = useState([]);
    const handleSearch = async (searchString) => {
        const result =  await api.searchAsync(searchString);

        if (result.Response === 'True') {
            setMovies(result.Search);
        } else {
            setMovies([]);
            console.error(result.Error);
        }

    }
    return (
        <div className='left'>
            <SearchBar onSubmit={handleSearch} />
            <MoviesList movies={movies}  />
        </div>
    );
}

export default Movies;
