import React from 'react';

function Pagination(props) {
  const { goPrev, goNext, currentPage, totalItems, itemsPerPage } = props;
  const isFirstPage = currentPage < 2;
  const isLastPage = currentPage * itemsPerPage >= totalItems;

  return (
    <div className="pagination">
      <button className="btn" onClick={goPrev} disabled={isFirstPage}>
        {isFirstPage ? '' : '←'}
      </button>
      <span className="pagination__page">{currentPage}</span>
      <button className="btn" onClick={goNext} disabled={isLastPage}>
        {isLastPage ? '' : '→'}
      </button>
    </div>
  );
}

export default Pagination;

// goPref - ф-я для переключения на предыдущую страницу
// goNext - ф-я для переключения на следущую страницу
// currentPage - ф-я для переключения на текущую страницу
// totalItems - всего елементов в списке
// itemsPerPage - к-во элеиентов на странице
