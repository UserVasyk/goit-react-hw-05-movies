import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import fetchMovie from '../../fetchMovieAPI';
import { ListCast, ItemCast, PhotoCast, NamesBoxCast } from './Cast.styled';
const Cast = () => {
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
    <>
      {cast.length > 0 ? (
        <ListCast>
          {cast.map(({ cast_id, profile_path, name, character }) => {
            if (profile_path !== null) {
              return (
                <ItemCast key={cast_id}>
                  <PhotoCast
                    src={'https://image.tmdb.org/t/p/original' + profile_path}
                    alt={name}
                  />
                  <NamesBoxCast>
                    <p>Name: {name}</p>
                    <p>Character: {character}</p>
                  </NamesBoxCast>
                </ItemCast>
              );
            }
            return null;
          })}
        </ListCast>
      ) : (
        <h3>We don't have any casts for this movie.</h3>
      )}
    </>
  );
};
export default Cast;
