import React, { useEffect, useState } from 'react';
import * as MovieAPI from '../services/moviedbAPI';

import MoviesList from 'components/MoviesList/MoviesList';

function HomePage() {
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      setIsLoading(true);
      try {
      const response = await MovieAPI.trendingMovies();
      setMovies(response.results);
    } catch (e) {
      setError(e);
    } finally {
        setIsLoading(false);
    }
    }
    
    fetchMovies();
    }, []);

  return (
    <MoviesList movies={movies} error={error} isLoading={isLoading}/>
  );
}

export default HomePage;