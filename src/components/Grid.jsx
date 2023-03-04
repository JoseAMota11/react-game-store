import { useEffect, useState } from 'react';
import { fetchData } from '../helpers/fetchData';
import { Loading } from './Loading';
import { Card } from './Card';
import { Pagination } from './Pagination';

export const Grid = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [cardPerPage, setCardPerPage] = useState(9);
  const [amountOfPages, setAmountOfPages] = useState(null);

  useEffect(() => {
    (async function () {
      try {
        const dataLength = await fetchData();
        const gottenData = await fetchData(currentPage, cardPerPage);

        setAmountOfPages(dataLength.length);
        setData(gottenData);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  return (
    <>
      <section className='grid'>
        {data?.length > 0 ? <Card data={data} /> : <Loading />}
      </section>
      {amountOfPages !== null ? (
        <Pagination
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          cardPerPage={cardPerPage}
          setCardPerPage={setCardPerPage}
          amountOfPages={amountOfPages}
          setAmountOfPages={setAmountOfPages}
        />
      ) : null}
    </>
  );
};
