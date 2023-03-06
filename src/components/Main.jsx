import { Grid } from './Grid';

export const Main = ({ singlePage, setSinglePage }) => {
  return (
    <main className='main'>
      <Grid singlePage={singlePage} setSinglePage={setSinglePage} />
    </main>
  );
};
