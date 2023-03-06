import { useEffect, useState } from 'react';
import { fetchData } from '../helpers/fetchData';
import { Loading } from './Loading';
import { Card } from './Card';
import { Error } from './Error';
import { SinglePage } from './SinglePage';
import { Pagination } from './Pagination';
import { getDataLength } from '../helpers/getDataLength';

export const Grid = ({ singlePage, setSinglePage }) => {
  const [data, setData] = useState([]);
  const [singleData, setSingleData] = useState([]);
  const [id, setId] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(9);
  const [dataLength, setDataLength] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    (async function () {
      try {
        const gottenData = await fetchData(currentPage, postPerPage);
        const dataLength = await getDataLength();
        setData(gottenData);
        setDataLength(dataLength.length);
      } catch (e) {
        setError(
          'Error: It maybe an internet connection issue. Refresh the page or come back later.'
        );
      }
    })();
  }, [currentPage]);

  useEffect(() => {
    if (id) {
      (async function () {
        try {
          const fetchedData = await fetchData('', postPerPage, id);
          setSingleData(fetchedData);

          setSinglePage(true);
          setId(null);
        } catch (e) {
          setError('Error: That post is deleted or does not exit.');
        }
      })();
    }
  }, [id]);

  if (singlePage)
    return (
      <div className='container'>
        <SinglePage singleData={singleData} />
      </div>
    );

  if (error) return <Error error={error} />;

  return (
    <>
      <section className='grid'>
        {data?.length > 0 ? <Card data={data} setId={setId} /> : <Loading />}
      </section>
      <section className='pagination'>
        <Pagination
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          dataLength={dataLength}
          postPerPage={postPerPage}
        />
      </section>
    </>
  );
};
