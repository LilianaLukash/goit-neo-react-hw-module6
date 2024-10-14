import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from '../../services/api';

function MovieReviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    getMovieReviews(movieId).then(data => setReviews(data.results)).catch(console.log);
  }, [movieId]);

  if (reviews.length === 0) {
    return <p>We don't have any reviews for this movie.</p>;
  }

  return (
    <ul>
      {reviews.map(review => (
        <li key={review.id}>
          <h4>Author: {review.author}</h4>
          <p>{review.content}</p>
        </li>
      ))}
    </ul>
  );
}

export default MovieReviews;
