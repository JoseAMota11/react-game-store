import { URL } from './constants';

export const fetchData = async (page = '', limit = '', id = '') => {
  try {
    const fetchedData = await fetch(`${URL}/games/${id}?_page=${page}&_limit=${limit}`);
    const dataToJSON = await fetchedData.json();
    return dataToJSON;
  } catch (error) {
    console.error(error);
  }
};
