import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import fetchMovie from '../../fetchMovieAPI';
export const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchMovieById = async () => {
      const { data } = await fetchMovie.get(`movie/${id}/reviews`);

      return setReviews(data.results);
    };
    fetchMovieById();
  }, [id]);

  return (
    <ul>
      {reviews.length > 0 ? (
        reviews.map(({ id, author, content }) => {
          return (
            <li key={id}>
              <h3>Author: {author}</h3>
              <p>{content}</p>
            </li>
          );
        })
      ) : (
        <p>There are no feedback</p>
      )}
    </ul>
  );
};
