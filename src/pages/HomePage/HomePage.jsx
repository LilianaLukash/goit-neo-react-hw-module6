import React, { useState, useEffect } from 'react';
import MovieList from '../../components/MovieList/MovieList';
import { getTrendingMovies } from '../../services/api';

function HomePage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getTrendingMovies().then(setMovies).catch(console.log);
  }, []);

  return (
    <div>
      <h1>Trending today</h1>
      <MovieList movies={movies} />
    </div>
  );
}

export default HomePage;
