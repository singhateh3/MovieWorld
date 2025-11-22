import React, { useState, useContext, useEffect, createContext } from "react";

const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
  const LOCAL_KEY = "favorites";

  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem(LOCAL_KEY);
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem(LOCAL_KEY, JSON.stringify(favorites));
  }, [favorites]);

  const addToFavorites = (movie) => {
    setFavorites([...favorites, movie]);
  };

  const removeFromFavorites = (id) => {
    setFavorites(favorites.filter((m) => m.id !== id));
  };

  const isFavorite = (id) => {
    return favorites.some((m) => m.id === id);
  };
  const toggleFavorite = (movie) => {
    if (isFavorite(movie.id)) removeFromFavorites(movie.id);
    else {
      addToFavorites(movie);
    }
  };

  return (
    <MovieContext.Provider
      value={{
        isFavorite,
        removeFromFavorites,
        addToFavorites,
        favorites,
        toggleFavorite,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};

export const useMovieContext = () => useContext(MovieContext);
