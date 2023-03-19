import React from 'react';
import PropTypes from 'prop-types';

import Loader from 'components/Loader/Loader';
import MovieItem from 'components/MovieItem/MovieItem';
import { StyledMovieList } from './MoviesList.styled';

export default function MoviesList({ movies = [], isLoading = false, error = '' }) {

    return (
        <>
            <StyledMovieList>
                {movies?.length > 0 && movies.map(item => <MovieItem key={item.id} id={item.id} name={item.name ?? item.title} />)}
            </StyledMovieList>
            {isLoading && <Loader />}
            {error && <div>Error: {error.message}</div>}
      </>
  )
}

MoviesList.propTypes = {
    movies: PropTypes.array,
    isLoading: PropTypes.bool,
    error: PropTypes.string,
}
