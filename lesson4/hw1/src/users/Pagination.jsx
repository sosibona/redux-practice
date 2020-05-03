import React from "react";

const Pagination = ({
  goPrev,
  goNext,
  totalItems,
  currentPage,
  itemsPerPage,
}) => {
  const isPrevPageAvailable = currentPage < 1;
  const isNextPageAvailable =
    Math.ceil(totalItems / itemsPerPage) === currentPage + 1;
  
    console.log('pag props')
    console.log({
      goPrev,
      goNext,
      totalItems,
      currentPage,
      itemsPerPage,
    })
  return (
    <div className="pagination">
      <button className="btn" disabled={isPrevPageAvailable} onClick={goPrev}>
        {isPrevPageAvailable || "←"}
      </button>
      <span className="pagination__page">{currentPage + 1}</span>
      <button className="btn" disabled={isNextPageAvailable} onClick={goNext}>
        {isNextPageAvailable || "→"}
      </button>
    </div>
  );
};

export default Pagination;
