import { Link, useLocation } from 'react-router-dom';

export const MovieList = ({ trendMovies }) => {
  const location = useLocation();
  return (
    <ul>
      {trendMovies.map(movie => (
        <li key={movie.id}>
          <Link to={`movies/${movie.id}`} state={{ from: location }}>
            {movie.original_title || movie.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};
