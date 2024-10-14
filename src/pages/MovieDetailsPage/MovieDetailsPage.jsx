import React, { useState, useEffect } from 'react';
import { useParams, Link, Outlet, useNavigate, useLocation } from 'react-router-dom';
import { getMovieDetails } from '../../services/api';
import styles from './MovieDetailsPage.module.css';

function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    getMovieDetails(movieId).then(setMovie).catch(console.log);
  }, [movieId]);

  const handleGoBack = () => {
    navigate(location.state?.from || '/movies');
  };

  if (!movie) {
    return null;
  }

  const { title, overview, genres, poster_path, vote_average } = movie;

  return (
    <div>
      <button onClick={handleGoBack}>Go back</button>
      <div className={styles.movieDetails}>
        <img
          src={`https://image.tmdb.org/t/p/w300${poster_path}`}
          alt={title}
        />
        <div>
          <h2>{title}</h2>
          <p>User Score: {vote_average * 10}%</p>
          <h3>Overview</h3>
          <p>{overview}</p>
          <h4>Genres</h4>
          <p>{genres.map(genre => genre.name).join(', ')}</p>
        </div>
      </div>
      <hr />
      <div>
        <h4>Additional information</h4>
        <ul>
          <li>
            <Link to="cast" state={{ from: location.state?.from }}>Cast</Link>
          </li>
          <li>
            <Link to="reviews" state={{ from: location.state?.from }}>Reviews</Link>
          </li>
        </ul>
      </div>
      <hr />
      <Outlet />
    </div>
  );
}

export default MovieDetailsPage;
