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
      const { data } = await fetchMovie.get(`movie/${id}`);

      return setMovie(data);
    };
    fetchMovieById();
  }, [id]);

  return (
    <main>
      <Link to={backLinkHref}>Back to movies</Link>
      <img src="https://via.placeholder.com/960x240" alt="" />
      <div>
        <h2>Product - - {movie.original_title || movie.name}</h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus
          sunt excepturi nesciunt iusto dignissimos assumenda ab quae cupiditate
          a, sed reprehenderit? Deleniti optio quasi, amet natus reiciendis
          atque fuga dolore? Lorem, ipsum dolor sit amet consectetur adipisicing
          elit. Impedit suscipit quisquam incidunt commodi fugiat aliquam
          praesentium ipsum quos unde voluptatum?
        </p>
      </div>
      <Link to="cast">Cast</Link>
      <Link to="reviews">Reviews</Link>

      <Outlet />
    </main>
  );
};
