import { useParams, useLocation, Link, Outlet } from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';
import fetchMovie from '../../fetchMovieAPI';
import defaultMoviePoster from '../../images/defaultMoviePoster.jpg';
export const MovieDetails = () => {
  const [movie, setMovie] = useState({});
  const { id } = useParams();
  const location = useLocation();
  const backLinkHref = useRef(location.state?.from ?? '/');

  useEffect(() => {
    const fetchMovieById = async () => {
      const { data } = await fetchMovie
        .get(`movie/${id}`)
        .catch(error => console.error(error));

      return setMovie(data);
    };
    fetchMovieById();
  }, [id]);
  const {
    poster_path,
    original_title,
    name,
    release_date,
    vote_average,
    overview,
    genres,
  } = movie;
  return (
    <main>
      {Object.keys(movie).length > 0 ? (
        <>
          <Link to={backLinkHref.current}>Back to movies</Link>
          <img
            height={400}
            src={
              poster_path === null
                ? defaultMoviePoster
                : `https://image.tmdb.org/t/p/original${poster_path}`
            }
            alt=""
          />
          <h2>{`${name || original_title} (${release_date.slice(0, 4)})`}</h2>
          <p>User Score: {Math.ceil(vote_average * 10)}%</p>
          <h3>Overview</h3>
          <p>{overview}</p>
          <h3>Genres</h3>
          <ul>
            {genres.map(({ id, name }) => (
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
