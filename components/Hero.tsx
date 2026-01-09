
import React from 'react';
import { Translations } from '../types';

interface HeroProps {
  t: Translations;
}

const Hero: React.FC<HeroProps> = ({ t }) => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/id/111/1920/1080" 
          alt="Scrap Yard" 
          className="w-full h-full object-cover filter brightness-50 contrast-125"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto pt-20">
        <div className="mb-6 inline-block animate-float">
          <div className="bg-red-600/20 backdrop-blur-md border border-red-500 rounded-full px-4 py-1 text-red-500 font-bold text-sm tracking-widest uppercase mb-4">
             {t.aboutBadge}
          </div>
        </div>
        
        <h1 className="text-5xl md:text-8xl font-black text-white mb-6 font-oswald uppercase tracking-tight leading-none drop-shadow-2xl">
          {t.heroTitle.split(' ').map((word, i) => (
            <span key={i} className={i >= 2 ? "text-red-600" : ""}>{word} </span>
          ))}
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-2xl mx-auto font-light">
          {t.heroSubtitle}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="tel:+905366850647" 
            className="px-10 py-4 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg transition-all transform hover:scale-105 shadow-2xl shadow-red-600/30 flex items-center justify-center gap-2"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/></svg>
            0 536 685 06 47
          </a>
          <a 
            href="#contact" 
            className="px-10 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 font-bold rounded-lg transition-all"
          >
            {t.navContact}
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
        <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7-7-7m14-8l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
