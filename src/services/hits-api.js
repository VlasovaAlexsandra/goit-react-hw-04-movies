import axios from 'axios';

const BASE_URL =
  'https://api.themoviedb.org/3/search/movie?api_key=2986a356ef3a214eb0a4615eddf8ffa1&query=';

export const searchData = query => {
  return axios.get(`${BASE_URL}${query}`);
};

// export default fetchHits;
