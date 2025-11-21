import React from "react";
import { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard";
import Search from "../components/Search";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const BASE_URL = import.meta.env.BASE_URL + "data.json";

  const [searchterm, setSearchTerm] = useState("");
  const [allMovies, setAllMovies] = useState([]);

  useEffect(() => {
    const loadMovies = async () => {
      setLoading(true);
      try {
        const response = await fetch(BASE_URL);
        const data = await response.json();
        setMovies(data);
        setAllMovies(data);
      } catch (err) {
        setError("unable to fetch data", err);
      } finally {
        setLoading(false);
      }
    };
    loadMovies();
  }, []);

  function handleSearch() {
    if (!searchterm.trim()) {
      movies;
    }
    const filteredMovies = allMovies.filter((movie) =>
      movie.title.toLowerCase().includes(searchterm.toLowerCase())
    );
    setMovies(filteredMovies);
  }
  return (
    <>
      <Search
        searchterm={searchterm}
        setSearchTerm={setSearchTerm}
        handleSearch={handleSearch}
      />

      <div className="movie-grid p-2">
        {error ? (
          <div className="error-message text-red-500">
            <p>{error}</p>
          </div>
        ) : loading ? (
          <div className="spinner-container ">
            <div className="spinner w-12 h-12 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
          </div>
        ) : (
          <div className="movie-grid grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {movies.map((movie) => (
              <MovieCard movie={movie} key={movie.id} />
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Home;
