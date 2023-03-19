import React, { useEffect } from 'react';
import { useAxios } from 'hooks/useAxios';
import * as Configs from '../services/moviedbConfigs';

import MoviesList from 'components/MoviesList/MoviesList';

function HomePage() {
    const { isLoading, data, error, fetchData } = useAxios();

    useEffect(() => {
        fetchData(Configs.trendingMovies());
    }, [fetchData]);
        
    const movies = data?.results;

  return (
    <MoviesList movies={movies} error={error} isLoading={isLoading}/>
  );
}

export default HomePage;