import { useState, useEffect, useRef } from 'react';

export const Pagination = ({
  currentPage,
  setCurrentPage,
  dataLength,
  postPerPage,
}) => {
  const [toggle, setToggle] = useState({
    activeObject: null,
    objects: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }],
  });
  const ref = useRef();
  const lastPage = Math.ceil(dataLength / postPerPage);

  const toggleActive = (index) => {
    setToggle({ ...toggle, activeObject: toggle.objects[index] });
  };

  // useEffect(() => {
  //   ref.current.children.item(1).click();
  // }, []);

  const toggleActiveStyles = (index) => {
    if (toggle.objects[index] === toggle.activeObject) {
      return 'btn--active';
    } else {
      return 'btn--inactive';
    }
  };

  const previousPage = () => {
    setCurrentPage(currentPage - 1);
    toggleActive(currentPage - 1);
  };

  const takeMeToPage = (page) => {
    setCurrentPage((currentPage = page));
    toggleActive(page);
  };

  const nextPage = () => {
    setCurrentPage(currentPage + 1);
    toggleActive(currentPage + 1);
  };

  return (
    <div className='pagination__container' ref={ref}>
      <button
        className='btn'
        onClick={previousPage}
        disabled={currentPage === 1}
      >
        Previous
      </button>
      {toggle.objects.map(({ id }) => (
        <button
          key={id}
          className={toggleActiveStyles(id)}
          onClick={() => takeMeToPage(id)}
          id={id}
        >
          {id}
        </button>
      ))}
      <button
        className='btn'
        onClick={nextPage}
        disabled={currentPage === lastPage}
      >
        Next
      </button>
    </div>
  );
};
