import { useState, useEffect } from 'react';
import { MovieList } from 'components/MovieList/MovieList';
import fetchMovie from '../../fetchMovieAPI';
import { Title } from './Home.styled';
const Home = () => {
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
      <Title>Trending today</Title>
      <MovieList movies={trendMovies} />
    </main>
  );
};
export default Home;
