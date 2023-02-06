import { useState, useEffect } from 'react';
import { MovieList } from 'components/MovieList/MovieList';
import fetchMovie from '../../fetchMovieAPI';

export const Home = () => {
  const [trendMovies, setTrendMovies] = useState([]);
  useEffect(() => {
    const fetchTrendMovies = async () => {
      const { data } = await fetchMovie.get('trending/all/day');

      setTrendMovies(data.results);
    };
    fetchTrendMovies();
  }, []);

  return (
    <main>
      <h1>Trending today</h1>
      <MovieList trendMovies={trendMovies} />
    </main>
  );
};
