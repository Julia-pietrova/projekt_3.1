import React from 'react';
import Header from './components/Header';
import OffersList from './components/OffersList';
import SpecialistsList from './components/SpecialistsList';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  return (
    <div>
      <Header />
      <main>
        <SpecialistsList />
        <OffersList />
      </main>
      <Footer />
    </div>
  );
};

export default App;
