import React, {useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { useAxios } from 'hooks/useAxios';
import * as Configs from '../../services/moviedbConfigs';

import Loader from 'components/Loader/Loader';

export default function Reviews() {
    const { isLoading, data, error, fetchData } = useAxios();
    const { movieId } = useParams();

    useEffect(() => {
        if (!movieId) return;

        fetchData(Configs.movieReviews(movieId));
    }, [movieId, fetchData]);

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
