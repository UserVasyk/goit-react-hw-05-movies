import { useParams, useLocation, Link, Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react';
import fetchMovie from '../../fetchMovieAPI';
export const MovieDetails = () => {
  const [movie, setMovie] = useState({});
  const { id } = useParams();
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/movies';

  useEffect(() => {
    const fetchMovieById = async () => {
      const { data } = await fetchMovie
        .get(`movie/${id}`)
        .catch(error => console.error(error));
      console.log('data: ', data);
      return setMovie(data);
    };
    fetchMovieById();
  }, [id]);

  return (
    <main>
      {Object.keys(movie).length > 0 ? (
        <>
          <Link to={backLinkHref}>Back to movies</Link>
          <img
            height={400}
            src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
            alt=""
          />
          <h2>
            {`${movie.name || movie.original_title} (${movie.release_date.slice(
              0,
              4
            )})`}
          </h2>
          <p>User Score: {Math.ceil(movie.vote_average * 10)}%</p>
          <h3>Overview</h3>
          <p>{movie.overview}</p>
          <h3>Genres</h3>
          <ul>
            {movie.genres.map(({ id, name }) => (
              <li key={id}>{name}</li>
            ))}
          </ul>
          <div>
            <p>Additional Information</p>
            <ul>
              <li>
                {' '}
                <Link to="cast">Cast</Link>
              </li>
              <li>
                <Link to="reviews">Reviews</Link>
              </li>
            </ul>
          </div>

          <Outlet />
        </>
      ) : (
        <h2>Sorry but we didn't find this film</h2>
      )}
    </main>
  );
};
