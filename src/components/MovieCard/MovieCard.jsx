import React from 'react';
import { StyledMovieCard } from './MovieCard.styled';

export default function MovieCard({data}) {
    return (
      <StyledMovieCard>
            <div>
                  <img src={`https://image.tmdb.org/t/p/w400${data.poster_path}`} alt={data.name ?? data.title} />
              </div>
              <div>
                  <h1>{data.name ?? data.title}</h1>
                  <p>User Score: { data.vote_average}</p>
                  <h2>Overview</h2>
                  <p>{ data.overview }</p>
                  {data.genres?.length > 0 && <>
                      <h2>Genres</h2>
                      <p>{data.genres.map(genre => genre.name).join(', ')}</p>
                  </>}
            </div>
        </StyledMovieCard>
  )
}
