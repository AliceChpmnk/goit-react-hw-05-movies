import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import * as MovieAPI from '../services/moviedbAPI';

import MoviesList from 'components/MoviesList/MoviesList';
import SearchForm from 'components/Search/SearchForm';

function Movies() {
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [movies, setMovies] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const query = searchParams.get('query');

    useEffect(() => {
        if (!query) return;
    const fetchMovies = async (query) => {
      setIsLoading(true);
      try {
      const response = await MovieAPI.moviesByQuery(query);
      setMovies(response.results);
    } catch (e) {
      setError(e);
    } finally {
        setIsLoading(false);
    }
    }
    
    fetchMovies(query);
    }, [query]);

    const handleFormSubmit = (name) => {
        setSearchParams({ query: name });
    }

  return (
      <>
          <SearchForm onSubmit={handleFormSubmit} />
          {movies && <MoviesList error={error} isLoading={isLoading} movies={movies}/>}
      </>
  )
}

export default Movies;
