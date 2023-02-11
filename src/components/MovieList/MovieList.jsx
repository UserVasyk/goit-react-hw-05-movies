import { useLocation } from 'react-router-dom';
import defaultMoviePoster from '../../images/defaultMoviePoster.jpg';
import {
  MovieListStyled,
  Image,
  LinkStyled,
  NameBox,
} from './MovieList.styled';
export const MovieList = ({ movies }) => {
  const location = useLocation();
  console.log(movies);
  return (
    <MovieListStyled>
      {movies.map(movie => (
        <li key={movie.id}>
          <LinkStyled to={`/movies/${movie.id}`} state={{ from: location }}>
            <Image
              alt={movie.name}
              src={
                movie.poster_path === null
                  ? defaultMoviePoster
                  : `https://image.tmdb.org/t/p/original${movie.poster_path}`
              }
            ></Image>
            <NameBox>{movie.name || movie.original_title}</NameBox>
          </LinkStyled>
        </li>
      ))}
    </MovieListStyled>
  );
};
