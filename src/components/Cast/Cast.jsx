import React, {useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { useAxios } from 'hooks/useAxios';
import * as Configs from '../../services/moviedbConfigs';

import Loader from 'components/Loader/Loader';
import { CastItem } from './Cast.styled';
import DefaultAvatar from '../../images/default-avatar.jpg';

export default function Cast() {
    const { isLoading, data, error, fetchData } = useAxios();
    const { movieId } = useParams();

    useEffect(() => {
        if (!movieId) return;

        fetchData(Configs.movieCredits(movieId));
    }, [movieId, fetchData]);

  return (
    <div>
          {isLoading && <Loader />}
          {error && <div>Error: {error.message}</div>}
          <ul>
              {data?.cast?.map(actor => <CastItem key={actor.id}>
                  <h4>{actor.name}</h4>
                  <img src={actor.profile_path ? `https://image.tmdb.org/t/p/w200${actor.profile_path}` : DefaultAvatar} alt={actor.name} />
                  <p>{ actor.character }</p>
              </CastItem>)}
          </ul>
    </div>
  )
}
