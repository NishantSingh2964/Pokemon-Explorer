export default function Pagination({
    currentPage,
    totalPages,
    setCurrentPage,
  }) {
    const handlePrevious = () => {
      if (currentPage > 1) setCurrentPage(currentPage - 1);
    };
  
    const handleNext = () => {
      if (currentPage < totalPages) setCurrentPage(currentPage + 1);
    };
  
    return (
      <div className="flex justify-center items-center mt-6">
        {/* Previous Button */}
        <button
          onClick={handlePrevious}
          disabled={currentPage === 1}
          className={`${
            currentPage === 1
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-600"
          } text-white text-lg font-semibold py-2 px-4 rounded-lg mr-4 transition-colors duration-300`}
        >
          Previous
        </button>
  
        {/* Page Indicator */}
        <span className="text-lg font-semibold text-gray-700">
        {currentPage} of {totalPages}
        </span>
  
        {/* Next Button */}
        <button
          onClick={handleNext}
          disabled={currentPage === totalPages}
          className={`${
            currentPage === totalPages
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-600"
          } text-white text-lg font-semibold py-2 px-4 rounded-lg ml-4 transition-colors duration-300`}
        >
          Next
        </button>
      </div>
    );
  }
  