import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import fetchMovie from '../../fetchMovieAPI';
import { ListReviews, AuthorReview } from './Reviews.styled';
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
    <ListReviews>
      {reviews.length > 0 ? (
        reviews.map(({ id, author, content }) => {
          return (
            <li key={id}>
              <AuthorReview>Author: {author}</AuthorReview>
              <p>{content}</p>
            </li>
          );
        })
      ) : (
        <p>There are no feedback</p>
      )}
    </ListReviews>
  );
};
