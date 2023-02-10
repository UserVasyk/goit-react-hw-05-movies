import { useState, useEffect } from 'react';
import { MovieList } from 'components/MovieList/MovieList';
import { useSearchParams } from 'react-router-dom';
import { SearchBox } from 'components/SearchBox/SearchBox';
import fetchMovie from '../../fetchMovieAPI';
export const Movies = () => {
  const [searchMovies, setSearchMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useSearchParams();
  const query = searchQuery.get('query') ?? '';
  useEffect(() => {
    if (query === '') {
      return;
    }
    const fetchSearchMovies = async () => {
      const { data } = await fetchMovie.get(
        `/search/movie?&query=${query}&language=en-US&page=1&include_adult=false`
      );

      return setSearchMovies(data.results);
    };

    fetchSearchMovies();
  }, [query]);
  const onSubmit = query => {
    setSearchQuery({ query });
  };
  return (
    <>
      <SearchBox onSubmit={onSubmit} />
      {searchMovies.length > 0 && <MovieList movies={searchMovies} />}
    </>
  );
};
