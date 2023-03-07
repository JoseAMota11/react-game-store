import { useState } from 'react';
import { Main } from './components/Main';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';

function App() {
  const [singlePage, setSinglePage] = useState(false);

  return (
    <>
      <Navbar setSinglePage={setSinglePage} singlePage={singlePage} />
      <Main singlePage={singlePage} setSinglePage={setSinglePage} />
      <Footer />
    </>
  );
}

export default App;
