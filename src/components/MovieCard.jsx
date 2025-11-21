import React from "react";
import { useMovieContext } from "../context/MovieContext";
import movieImage from "../assets/image/default.jpg";

const MovieCard = ({ movie }) => {
  const { isFavorite, toggleFavorite } = useMovieContext();

  const defaultPoster = movieImage;

  // const poster =
  //   movie.image && movie.image !== "N/A" ? movie.image : defaultPoster;

  const favorite = isFavorite(movie.id);

  const onFavoriteClick = (e) => {
    e.stopPropagation(); // prevents outer click handlers from firing
    toggleFavorite(movie);
  };

  return (
    <div className="relative bg-gray-700 rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300">
      <img
        src={movie.image || defaultPoster}
        alt={movie.title}
        className="w-full h-80 object-cover"
        onError={(e) => (e.currentTarget.src = defaultPoster)}
      />

      <div className="absolute right-3 top-3">
        <button
          onClick={onFavoriteClick}
          aria-label={favorite ? "Remove from favorites" : "Add to favorites"}
          title={favorite ? "Remove from favorites" : "Add to favorites"}
          className="text-2xl p-2 rounded-full hover:scale-110 transition"
        >
          {favorite ? "❤️" : "🤍"}
        </button>
      </div>

      <div className="p-3 text-white items-center text-center">
        <h3 className="font-bold">{movie.title}</h3>
        <p className="text-sm opacity-70 ">{movie.release_date.slice(0, 4)}</p>
      </div>
    </div>
  );
};

export default MovieCard;
