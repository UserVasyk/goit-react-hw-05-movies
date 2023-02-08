import { useState, useEffect } from 'react';
import { MovieList } from 'components/MovieList/MovieList';
import fetchMovie from '../../fetchMovieAPI';

export const Movies = () => {
  const [trendMovies, setTrendMovies] = useState([]);
  useEffect(() => {
    const fetchTrendMovies = async () => {
      const { data } = await fetchMovie.get('trending/all/day');

      setTrendMovies(data.results);
    };
    fetchTrendMovies();
  }, []);

  return (
    <form>
      <label>
        <input />
      </label>
      <button type="submit">Search</button>
      <MovieList trendMovies={trendMovies} />
    </form>
  );
};
