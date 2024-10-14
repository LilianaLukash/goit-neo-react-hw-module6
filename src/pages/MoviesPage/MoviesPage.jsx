import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import MovieList from '../../components/MovieList/MovieList';
import { searchMovies } from '../../services/api';

function MoviesPage() {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') || '';

  useEffect(() => {
    if (query) {
      searchMovies(query).then(setMovies).catch(console.log);
    }
  }, [query]);

  const handleSubmit = e => {
    e.preventDefault();
    const value = e.target.elements.query.value.trim();
    if (value) {
      setSearchParams({ query: value });
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input name="query" defaultValue={query} />
        <button type="submit">Search</button>
      </form>
      <MovieList movies={movies} />
    </div>
  );
}

export default MoviesPage;
