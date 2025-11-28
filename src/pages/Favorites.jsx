import React from "react";
import { useMovieContext } from "../context/MovieContext";
import MovieCard from "../components/MovieCard";

const Favorites = () => {
  const { favorites } = useMovieContext();
  console.log(favorites.length);

  return (
    <div>
      {favorites.length === 0 ? (
        <p className="text-center text-blue-500 h-screen items-center flex justify-center text-2xl">
          No favorites yet... add some to favorites by clicking the heart sign
        </p>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 p-2">
          {favorites.map((m) => (
            <MovieCard movie={m} key={m.id} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Favorites;
