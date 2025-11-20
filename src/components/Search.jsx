import React from "react";

const Search = ({ searchterm, setSearchTerm, handleSearch }) => {
  return (
    <div className="search box mx-auto placeholder:text-gray-500 my-3  items-center w-96 flex rounded-md gap-2 ">
      <input
        type="text"
        placeholder="search..."
        value={searchterm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="flex-1 px-3 py-2 border-2 border-gray-900 rounded-md"
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleSearch();
          }
        }}
      />
      <button
        onClick={handleSearch}
        className="search-btn bg-gray-900 text-white border-none px-3 py-2 rounded-md"
      >
        Search
      </button>
    </div>
  );
};

export default Search;
