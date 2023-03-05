import { URL } from './constants';

export const fetchData = async (page = '', id = '') => {
  try {
    const fetchedData = await fetch(`${URL}/${id}?_page=${page}&_limit=9`);
    const dataToJSON = await fetchedData.json();
    return dataToJSON;
  } catch (error) {
    /* Error handler coming soon */
  }
};
