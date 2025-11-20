const Favorites = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[80vh] text-center px-6">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-200 mb-3">
        No Favorite Movies Yet 🎞️
      </h2>
      <p className="text-gray-400 text-lg max-w-md">
        Start adding your favorite movies, and they’ll appear here for easy
        access.
      </p>
      <button
        onClick={() => (window.location.href = "/")}
        className="mt-6 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg shadow-md transition-transform transform hover:scale-105"
      >
        Browse Movies
      </button>
    </div>
  );
};

export default Favorites;
