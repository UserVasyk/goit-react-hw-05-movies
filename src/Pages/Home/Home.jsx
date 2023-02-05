import { getTrendMovies, getSearchMovies } from '../../fetchMovieAPI';
export const Home = () => {
  getTrendMovies();
  getSearchMovies();
  return (
    <main>
      <h1>Trending today</h1>
    </main>
  );
};
