import axios from 'axios';
const TRAND_URL = 'https://api.themoviedb.org/3/trending/all/day';
const SEARCH_URL = 'https://api.themoviedb.org/3/search/movie';
const searchQuery = 'batman';
async function fetchMovieAPI(BASE_URL, searchQuery) {
  const KEY_API = '3230ff1c700de8d039224f45161518d9';
  const options = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  const fetchMovieAPI = await axios
    .get(
      `${BASE_URL}?api_key=${KEY_API}&language=en-US&query=${searchQuery}&page=1&include_adult=false`,
      options
    )
    .then(({ data }) => console.log(data.results));
  return fetchMovieAPI;
}

export const getTrendMovies = () => {
  return fetchMovieAPI(TRAND_URL);
};
export const getSearchMovies = () => {
  return fetchMovieAPI(SEARCH_URL, searchQuery);
};
