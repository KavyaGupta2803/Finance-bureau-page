import React, { useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import { createInfoBoxes } from '../utils';

const Home = () => {
  useEffect(() => {
    createInfoBoxes();
  }, []);

  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" id="infoBoxes">
          {/* Info boxes will be dynamically inserted */}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Home;
