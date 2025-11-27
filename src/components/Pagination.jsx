import React from "react";

const Pagination = ({
  totalPosts,
  postPerPage,
  setCurrentPage,
  currentPage,
}) => {
  let pages = [];
  const totalPages = Math.ceil(totalPosts / postPerPage);
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }
  return (
    <div className="flex justify-center gap-2 mt-5">
      {/* first Page  */}
      <button
        className="disabled:opacity-40 rounded px-3 py-1 bg-gray-200"
        onClick={() => setCurrentPage(1)}
        disabled={currentPage === 1}
      >
        First
      </button>

      {/* Previous  */}
      <button
        className="disabled:opacity-40 rounded px-3 py-1 bg-gray-200"
        onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
        disabled={currentPage === 1}
      >
        Prev
      </button>
      {pages.map((page, index) => (
        <button
          key={index}
          className={`px-3 py-1 rounded ${
            currentPage == page ? "bg-blue-500 text-white" : "bg-gray-500"
          }`}
          onClick={() => setCurrentPage(page)}
        >
          {page}
        </button>
      ))}
      {/* next  */}
      <button
        className="disabled:opacity-40 rounded px-3 py-1 bg-gray-200"
        onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
        disabled={currentPage === totalPages}
      >
        Next
      </button>

      {/* last Page  */}
      <button
        className="disabled:opacity-40 rounded px-3 py-1 bg-gray-200"
        onClick={() => setCurrentPage(totalPages)}
        disabled={currentPage === totalPages}
      >
        Last
      </button>
    </div>
  );
};

export default Pagination;
