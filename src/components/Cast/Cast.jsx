import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import * as MovieAPI from '../../services/moviedbAPI';

import Loader from 'components/Loader/Loader';
import { CastItem } from './Cast.styled';
import DefaultAvatar from '../../images/default-avatar.jpg';

export default function Cast() {
  const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState([]);
    const { movieId } = useParams();

    useEffect(() => {
      if (!movieId) return;
      const fetchCast = async (movieId) => {
      setIsLoading(true);
      try {
      const response = await MovieAPI.movieCredits(movieId);
      setData(response);
    } catch (e) {
      setError(e);
    } finally {
        setIsLoading(false);
    }
    }
    
    fetchCast(movieId);

    }, [movieId]);

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
