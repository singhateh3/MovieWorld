import React from "react";
import { useMovieContext } from "../context/MovieContext";
const MovieCard = ({ movie }) => {
  const { isFavorite, addToFavorites, removeFromFavorites } = useMovieContext();

  const favorite = isFavorite(movie.id);

  const onFavoriteClick = (e) => {
    e.preventDefault();

    if (favorite) {
      removeFromFavorites(movie.id);
    } else {
      addToFavorites(movie);
    }
  };

  return (
    <div className="relative bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300">
      {/* Movie Poster */}
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        className="w-full h-80 object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-60 transition duration-300 flex justify-center items-center">
        <button
          onClick={onFavoriteClick}
          className={`favorite-btn text-3xl opacity-0 hover:scale-110 hover:text-red-500 transition-all duration-300 hover:opacity-100 ${
            favorite ? "active" : ""
          }`}
        >
          🤍
        </button>
      </div>

      {/* Movie Info */}
      <div className="p-4 text-center">
        <h3 className="text-lg font-semibold text-white truncate">
          {movie.title}
        </h3>
        <p className="text-gray-400 text-sm mt-1">{movie.release_date}</p>
      </div>
    </div>
  );
};

export default MovieCard;
