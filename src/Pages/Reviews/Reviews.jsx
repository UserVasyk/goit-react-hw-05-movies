import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import fetchMovie from '../../fetchMovieAPI';
export const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { id } = useParams();
  console.log(reviews);
  useEffect(() => {
    const fetchMovieById = async () => {
      const { data } = await fetchMovie.get(`movie/${id}/reviews`);
      console.log(data);
      return setReviews(data);
    };
    fetchMovieById();
  }, [id]);

  return <h1>hiiiiiiiiiiiiiiiiiiiiiiiiii</h1>;
};
