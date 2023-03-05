import { useEffect, useState } from 'react';
import { fetchData } from '../helpers/fetchData';
import { Loading } from './Loading';
import { Card } from './Card';
import { SinglePage } from './SinglePage';

export const Grid = () => {
  const [data, setData] = useState([]);
  const [singleData, setSingleData] = useState([]);
  const [id, setId] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [singlePage, setSinglePage] = useState(false);

  useEffect(() => {
    (async function () {
      try {
        const gottenData = await fetchData(currentPage);

        setData(gottenData);
      } catch (error) {
        console.error(error);
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
        } catch (error) {
          console.error(error);
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

  return (
    <>
      <section className='grid'>
        {data?.length > 0 ? <Card data={data} setId={setId} /> : <Loading />}
      </section>
    </>
  );
};
