import { useState } from 'react';
import { Main } from './components/Main';
import { Navbar } from './components/Navbar';

function App() {
  const [singlePage, setSinglePage] = useState(false);

  return (
    <>
      <Navbar setSinglePage={setSinglePage} singlePage={singlePage} />
      <Main singlePage={singlePage} setSinglePage={setSinglePage} />
    </>
  );
}

export default App;
