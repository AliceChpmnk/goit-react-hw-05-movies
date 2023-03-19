import React from 'react';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { StyledMovieItem } from './MovieItem.styled';

export default function MovieItem({ name, id }) {
    const location = useLocation();
    return (
        <li>
            <StyledMovieItem key={id} to={`/movies/${id}`} state={{from: location}}>{name}</StyledMovieItem>
      </li>
  )
}

MovieItem.propTypes = {
    name: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
}
