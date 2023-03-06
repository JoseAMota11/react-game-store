import { useEffect, useState } from 'react';
import { fetchData } from '../helpers/fetchData';
import { Loading } from './Loading';
import { Card } from './Card';
import { SinglePage } from './SinglePage';

export const Grid = ({ singlePage, setSinglePage }) => {
  const [data, setData] = useState([]);
  const [singleData, setSingleData] = useState([]);
  const [id, setId] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [error, setError] = useState(false);

  useEffect(() => {
    (async function () {
      try {
        const gottenData = await fetchData(currentPage);

        setData(gottenData);
      } catch (e) {
        setError('Error: That post is deleted or does not exit.');
      }
    })();
  }, []);

  useEffect(() => {
    if (id) {
      (async function () {
        try {
          const fetchedData = await fetchData('', id);
          setSingleData(fetchedData);

          setSinglePage(true);
        } catch (e) {
          setError(
            'Error: It maybe an internet connection issue. Refresh the page or come back later.'
          );
        }
      })();
    }
  }, [id]);

  useEffect(() => setId(null), [singlePage]);

  if (singlePage)
    return (
      <div className='container'>
        <SinglePage singleData={singleData} />
      </div>
    );

  if (error) {
    return <Error error={error} />;
  }

  return (
    <>
      <section className='grid'>
        {data?.length > 0 ? <Card data={data} setId={setId} /> : <Loading />}
      </section>
    </>
  );
};
