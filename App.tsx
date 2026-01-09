
import React, { useState, useEffect } from 'react';
import { Language, translations } from './types';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import WhatsAppButton from './components/WhatsAppButton';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('TR');
  const t = translations[lang];

  return (
    <div className="min-h-screen flex flex-col relative">
      <Navbar lang={lang} setLang={setLang} t={t} />
      
      <main className="flex-grow">
        <Hero t={t} />
        <About t={t} />
        <Services t={t} />
        <Gallery t={t} />
        <Contact t={t} />
      </main>

      <WhatsAppButton />
      <Footer t={t} />
    </div>
  );
};

export default App;
