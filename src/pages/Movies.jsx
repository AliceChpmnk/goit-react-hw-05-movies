import React, { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import { useAxios } from 'hooks/useAxios';
import * as Configs from '../services/moviedbConfigs';

import MoviesList from 'components/MoviesList/MoviesList';
import SearchForm from 'components/Search/SearchForm';

function Movies() {
    const [searchParams, setSearchParams] = useSearchParams();
    const { isLoading, data, error, fetchData } = useAxios();
    const query = searchParams.get('query');

    useEffect(() => {
        if (!query) return;
        fetchData(Configs.moviesByQuery(query));
    }, [query, fetchData]);

    const handleFormSubmit = (name) => {
        setSearchParams({ query: name });
    }
        
    const movies = data?.results;

  return (
      <>
          <SearchForm onSubmit={handleFormSubmit} />
          {movies && <MoviesList error={error} isLoading={isLoading} movies={movies}/>}
      </>
  )
}

export default Movies;
