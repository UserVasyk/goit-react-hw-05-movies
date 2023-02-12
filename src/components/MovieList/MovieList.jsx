import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import defaultMoviePoster from '../../images/defaultMoviePoster.jpg';
import {
  MovieListStyled,
  Image,
  LinkStyled,
  NameBox,
} from './MovieList.styled';
export const MovieList = ({ movies }) => {
  const location = useLocation();
  return (
    <MovieListStyled>
      {movies.map(({ id, name, poster_path, original_title }) => (
        <li key={id}>
          <LinkStyled to={`/movies/${id}`} state={{ from: location }}>
            <Image
              alt={name}
              src={
                poster_path === null
                  ? defaultMoviePoster
                  : `https://image.tmdb.org/t/p/original${poster_path}`
              }
            ></Image>
            <NameBox>{name || original_title}</NameBox>
          </LinkStyled>
        </li>
      ))}
    </MovieListStyled>
  );
};
MovieList.propTypes = {
  movies: PropTypes.array.isRequired,
};
