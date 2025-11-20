const BASE_URL = "/data.json";

export const getPopularMovies = async () => {
  const response = await fetch(BASE_URL);
  const data = await response.json();
  return data; // return the whole list
};

export const searchMovies = async (query) => {
  const response = await fetch(
    `${BASE_URL}/search/movie&query=${encodeURIComponent(query)}`
  );
  const data = await response.json();
  return data.results;
};
