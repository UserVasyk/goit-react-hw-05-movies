import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import fetchMovie from '../../fetchMovieAPI';
import defaultImage from '../../images/defaultImage.jpg';
export const Cast = () => {
  const [cast, setCast] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchMovieById = async () => {
      const { data } = await fetchMovie.get(`movie/${id}/credits`);

      return setCast(data.cast);
    };
    fetchMovieById();
  }, [id]);

  return (
    <ul>
      {cast.map(({ cast_id, profile_path, name, character }, index) => {
        let image = '';
        if (index > 14) {
          return;
        }
        if (profile_path === null) {
          image = defaultImage;
        } else {
          image = 'https://image.tmdb.org/t/p/original' + profile_path;
        }

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
