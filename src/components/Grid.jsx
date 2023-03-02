import { useEffect, useState } from 'react';
import { fetchData } from '../helpers/fetchData';
import { Loading } from './Loading';
import { Card } from './Card';

export const Grid = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getDataFromAnAPI = async () => {
      const gottenData = await fetchData(1, 9);
      setData(gottenData);
    };
    getDataFromAnAPI();
  }, []);

  return (
    <section className='grid'>
      {data.length > 0 ? <Card data={data} /> : <Loading />}
    </section>
  );
};
