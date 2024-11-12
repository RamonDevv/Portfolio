import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { SpeedInsights } from "@vercel/speed-insights/next"

const App: React.FC = () => {
  return (
    <div className="font-sans">
      <Header />
      <main>
        <About />
        <Projects />
        <Contact />
        <SpeedInsights />
      </main>
      <Footer />
    </div>
  );
};

export default App;
