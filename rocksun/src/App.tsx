import React from 'react';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Benefits } from './components/Benefits';
import { Calculator } from './components/Calculator';
import { Contact } from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <Services />
      <Benefits />
      <Calculator />
      <Contact />
    </div>
  );
}

export default App;