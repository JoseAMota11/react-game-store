import { useRef } from 'react';

export const Pagination = ({
  currentPage,
  setCurrentPage,
  dataLength,
  postPerPage,
}) => {
  const lastPage = Math.ceil(dataLength / postPerPage);
  let buttonsNumber = [];

  const previousPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const takeMeToPage = (page) => {
    setCurrentPage((currentPage = page));
  };

  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  for (let i = 1; i <= lastPage; i++) {
    buttonsNumber.push(i);
  }

  return (
    <div className='pagination'>
      <button
        className='pagination__btn'
        onClick={previousPage}
        disabled={currentPage === 1}
      >
        Previous
      </button>
      {buttonsNumber.map((button) => (
        <button
          key={button}
          className='pagination__btn-2'
          onClick={() => takeMeToPage(button)}
        >
          {button}
        </button>
      ))}
      <button
        className='pagination__btn'
        onClick={nextPage}
        disabled={currentPage === lastPage}
      >
        Next
      </button>
    </div>
  );
};
