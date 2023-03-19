import React, { useEffect } from 'react';
import { useParams, Outlet, useLocation } from 'react-router-dom';
import { useAxios } from 'hooks/useAxios';
import * as Configs from '../services/moviedbConfigs';

import Loader from 'components/Loader/Loader';
import MovieCard from 'components/MovieCard/MovieCard';
import { StyledNavLink, LinksContainer } from 'components/StyledNavLink/StyledNavLink';
import BackButton from 'components/BackButton/BackButton';

function MoviePage() {
    const { isLoading, data, error, fetchData } = useAxios();
    const { movieId } = useParams();
    const location = useLocation();
    const backLinkHref = location.state?.from ?? "/";

    useEffect(() => {
        if (!movieId) return;

        fetchData(Configs.movieById(movieId));
    }, [movieId, fetchData]);

  return (
      <>
          <BackButton backLinkHref={backLinkHref}>◄ Go back</BackButton>
          {isLoading && <Loader />}
          {error && <div>Error: {error.message}</div>}
          {data && <MovieCard data={data} />}
          <LinksContainer>
              <h3>Additional Information:</h3>
              <StyledNavLink to="cast" state={{from: backLinkHref}}>Cast</StyledNavLink>
              <StyledNavLink to="reviews" state={{from: backLinkHref}}>Reviews</StyledNavLink>
          </LinksContainer>
          <Outlet />
    </>)
}

export default MoviePage;