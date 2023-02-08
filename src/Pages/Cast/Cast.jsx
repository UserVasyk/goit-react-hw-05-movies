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
      {cast.map(({ cast_id, profile_path, name, character }) => {
        if (profile_path === null) {
          return;
        }
        const image = 'https://image.tmdb.org/t/p/original' + profile_path;
        return (
          <li key={cast_id}>
            <p>{name}</p>
            <p>Character: {character}</p>
            <img width="200" src={image} alt={name} />
          </li>
        );
      })}
    </ul>
  );
};
