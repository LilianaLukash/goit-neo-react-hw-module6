import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCredits } from '../../services/api';
import styles from './MovieCast.module.css';

function MovieCast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    getMovieCredits(movieId).then(data => setCast(data.cast)).catch(console.log);
  }, [movieId]);

  return (
    <div>
      <ul className={styles.castList}>
        {cast.map(actor => (
          <li key={actor.id}>
            {actor.profile_path && (
              <img
                src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
                alt={actor.name}
                width="100"
              />
            )}
            <p>{actor.name}</p>
            <p>Character: {actor.character}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MovieCast;
