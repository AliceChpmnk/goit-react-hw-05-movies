import React, { useEffect, useState } from 'react';
import { useParams, Outlet, useLocation } from 'react-router-dom';
import * as MovieAPI from '../services/moviedbAPI';

import Loader from 'components/Loader/Loader';
import MovieCard from 'components/MovieCard/MovieCard';
import { StyledNavLinkBtn, ButtonsContainer } from 'components/MovieCard/MovieCard.styled';
import BackButton from 'components/BackButton/BackButton';

function MoviePage() {
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState([]);
    const { movieId } = useParams();
    const location = useLocation();
    const backLinkHref = location.state?.from ?? "/";

    useEffect(() => {
        if (!movieId) return;
    const fetchData = async (movieId) => {
      setIsLoading(true);
      try {
      const response = await MovieAPI.movieById(movieId);
      setData(response);
    } catch (e) {
      setError(e);
    } finally {
        setIsLoading(false);
    }
    }
    
    fetchData(movieId);

    }, [movieId]);

  return (
      <>
          <BackButton backLinkHref={backLinkHref}>◄ Go back</BackButton>
          {isLoading && <Loader />}
          {error && <div>Error: {error.message}</div>}
          {data && <MovieCard data={data} />}
          <ButtonsContainer>
              <h3>Additional Information:</h3>
              <StyledNavLinkBtn to="cast" state={{from: backLinkHref}}>Cast</StyledNavLinkBtn>
              <StyledNavLinkBtn to="reviews" state={{from: backLinkHref}}>Reviews</StyledNavLinkBtn>
          </ButtonsContainer>
          <Outlet />
    </>)
}

export default MoviePage;