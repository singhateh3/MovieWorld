import React, { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import { searchMovies, getPopularMovies } from "../services/api";

const Home = () => {
  const [searchQuerry, setSearchQuerry] = useState("");
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPopularMovies = async () => {
      try {
        const popularMovies = await getPopularMovies();
        setMovies(popularMovies);
      } catch (err) {
        console.log(err);
        setError("Failed to load movies...");
      } finally {
        setLoading(false);
      }
    };
    loadPopularMovies();
  }, []);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchQuerry.trim()) return;
    if (loading) return;
    setLoading(true);
    try {
      const searchResults = await searchMovies(searchQuerry);
      setMovies(searchResults);
      setError(null);
    } catch (err) {
      console.log(err);
      setError("Failed to search movies");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      {/* App Header */}
      <h1 className="text-3xl sm:text-4xl font-bold text-center mb-10 text-blue-400 tracking-wide">
        🎬 MovieBox
      </h1>

      {/* Search Form */}
      <form
        onSubmit={handleSearch}
        className="flex justify-center mb-8 gap-3 flex-wrap"
      >
        <div className="relative w-72 sm:w-96">
          <div className="absolute left-3 top-3 text-gray-400" />
          <input
            type="text"
            placeholder="Search for movies..."
            onChange={(e) => setSearchQuerry(e.target.value)}
            className="w-full pl-10 pr-4 py-2 rounded-xl bg-gray-800 text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
          />
        </div>
        <button
          type="submit"
          className="px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-xl font-medium transition duration-300"
        >
          Search
        </button>
      </form>

      {/* Error Message */}
      {error && (
        <div className="text-center text-red-400 font-semibold mb-6">
          {error}
        </div>
      )}

      {/* Loading Spinner */}
      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="w-12 h-12 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {movies.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
