import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StatsSection from './components/StatsSection';
import Manifesto from './components/Manifesto';
import TheologySection from './components/TheologySection';
import SanctuaryGrid from './components/SanctuaryGrid';
import FeaturedInitiative from './components/FeaturedInitiative';
import FreedomWall from './components/FreedomWall';
import CTA from './components/CTA';
import References from './components/References';
import Footer from './components/Footer';

function App(): React.JSX.Element {
  return (
    <div className="bg-white text-stone-900 font-body selection:bg-primary/20 selection:text-primary overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <FreedomWall />
        <StatsSection />
        <Manifesto />
        <TheologySection />
        <SanctuaryGrid />
        <FeaturedInitiative />
        <CTA />
        <References />
      </main>
      <Footer />
    </div>
  );
}

export default App;
