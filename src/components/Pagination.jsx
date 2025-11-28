const Pagination = ({
  totalPosts,
  postPerPage,
  setCurrentPage,
  currentPage,
}) => {
  const totalPages = Math.ceil(totalPosts / postPerPage);

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
  return (
    <div className="flex justify-center gap-2 mt-5">
      <button
        className="disabled:opacity-40 rounded px-3 py-1 bg-gray-200"
        onClick={() => setCurrentPage(1)}
        disabled={currentPage === 1}
      >
        First
      </button>

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
      <button
        className="disabled:opacity-40 rounded px-3 py-1 bg-gray-200"
        onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
        disabled={currentPage === totalPages}
      >
        Next
      </button>

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
