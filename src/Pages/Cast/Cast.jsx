import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import fetchMovie from '../../fetchMovieAPI';
export const Cast = () => {
  const [cast, setCast] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchMovieById = async () => {
      const { data } = await fetchMovie.get(`movie/${id}/credits`);
      console.log(data);
      return setCast(data.cast);
    };
    fetchMovieById();
  }, [id]);

  return (
    <ul>
      {cast.map(({ cast_id, profile_path, original_name }) => (
        <li key={cast_id}>
          <p>{original_name}</p>
          <img src={profile_path} alt={original_name} />
        </li>
      ))}
    </ul>
  );
};
