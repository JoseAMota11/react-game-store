import { URL } from './constants';

export const getDataLength = async () => {
  try {
    const fetchedData = await fetch(`${URL}/information/`);
    const dataToJSON = await fetchedData.json();
    return dataToJSON;
  } catch (error) {
    console.error(error);
  }
};
