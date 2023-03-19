import React, { useState } from 'react';
import PropTypes from 'prop-types';

export default function SearchForm({ onSubmit }) {
    const [query, setQuery] = useState('');

    const handleQueryChange = e => {
        setQuery(e.currentTarget.value.toLowerCase());
    }

    const handleSubmit = e => {
        e.preventDefault();
        
    if (query.trim() === '') {
      alert('Please enter the name of the movie');
      return;
    }

    onSubmit(query);
    setQuery('');
    };

  return (
    <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Search movies" value={query} onChange={ handleQueryChange } />
          <button type="submit">Search</button>
    </form>
  )
}

SearchForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
}
