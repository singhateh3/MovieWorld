import React from "react";

const Search = ({ searchterm, setSearchTerm, handleSearch }) => {
  return (
    <div className="search-box mx-auto placeholder:text-gray-500 items-center w-96 flex rounded-md gap-2 bg-transparent">
      <input
        type="text"
        placeholder="search..."
        value={searchterm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full px-2 py-2 my-2 rounded-xl bg-gray-800 text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleSearch();
          }
        }}
      />
      <button
        onClick={handleSearch}
        className="search-btn px-2 py-2 bg-blue-600 hover:bg-blue-700 rounded-xl font-medium transition duration-300"
      >
        Search
      </button>
    </div>
  );
};

export default Search;
