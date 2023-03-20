import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import * as MovieAPI from '../../services/moviedbAPI';

import Loader from 'components/Loader/Loader';

export default function Reviews() {
  const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState([]);
    const { movieId } = useParams();

    useEffect(() => {
      if (!movieId) return;
      const fetchReviews = async (movieId) => {
      setIsLoading(true);
      try {
      const response = await MovieAPI.movieReviews(movieId);
      setData(response);
    } catch (e) {
      setError(e);
    } finally {
        setIsLoading(false);
    }
    }
    
    fetchReviews(movieId);

    }, [movieId]);

  return (
      <div>
          {isLoading && <Loader />}
        {error && <div>Error: {error.message}</div>}
          <ul>
            {data?.results?.length === 0 && <li>There are no reviews yet</li>}
            {data?.results?.map(review => <li key={review.id}>
                <h4>Author: {review.author}</h4>
                <p>{ review.content }</p>
            </li>)}
        </ul>
    </div>
  )
}
