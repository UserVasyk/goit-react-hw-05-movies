import { useParams, useLocation, Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { useEffect, useState, useRef } from 'react';
import fetchMovie from '../../fetchMovieAPI';
import defaultMoviePoster from '../../images/defaultMoviePoster.jpg';
import {
  MovieDetailsContainer,
  LinkStyled,
  TitleLink,
  ListLinks,
  BackLinkStyled,
  MovieInfo,
  MovieDetailsBox,
} from './MovieDetails.styled';
const MovieDetails = () => {
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
    <MovieDetailsContainer>
      {Object.keys(movie).length > 0 && (
        <>
          <BackLinkStyled to={backLinkHref.current}>
            Back to movies
          </BackLinkStyled>
          <MovieDetailsBox>
            <img
              height={400}
              src={
                poster_path === null
                  ? defaultMoviePoster
                  : `https://image.tmdb.org/t/p/original${poster_path}`
              }
              alt=""
            />
            <MovieInfo>
              <h2>{`${name || original_title} (${release_date.slice(
                0,
                4
              )})`}</h2>
              <p>User Score: {Math.ceil(vote_average * 10)}%</p>
              <h3>Overview</h3>
              <p>{overview}</p>
              <h3>Genres</h3>
              <ul>
                {genres.map(({ id, name }) => (
                  <li key={id}>{name}</li>
                ))}
              </ul>
            </MovieInfo>
          </MovieDetailsBox>
          <div>
            <TitleLink>Additional Information</TitleLink>
            <ListLinks>
              <li>
                {' '}
                <LinkStyled to="cast">Cast</LinkStyled>
              </li>
              <li>
                <LinkStyled to="reviews">Reviews</LinkStyled>
              </li>
            </ListLinks>
          </div>
          <Suspense fallback={<div>Loading page...</div>}>
            <Outlet />
          </Suspense>
        </>
      )}
    </MovieDetailsContainer>
  );
};
export default MovieDetails;
