import { URL } from './constants';

export const fetchData = async (page = '', limit = '') => {
  try {
    const fetchedData = await fetch(`${URL}?_page=${page}&_limit=${limit}`);
    const dataToJSON = await fetchedData.json();
    return dataToJSON;
  } catch (error) {
    /* Error handler coming soon */
  }
};
