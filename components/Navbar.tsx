
import React, { useState } from 'react';
import { Language, Translations } from '../types';

interface NavbarProps {
  lang: Language;
  setLang: (l: Language) => void;
  t: Translations;
}

const Navbar: React.FC<NavbarProps> = ({ lang, setLang, t }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-gray-900/90 backdrop-blur-md text-white border-b border-gray-800 shadow-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center p-2 border-2 border-white/20">
               <svg className="w-full h-full text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
               </svg>
            </div>
            <span className="text-xl font-bold tracking-tighter font-oswald uppercase">Öz Adalı <span className="text-red-600">Hurdacılık</span></span>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-6">
              <a href="#home" className="hover:text-red-500 transition-colors px-3 py-2 text-sm font-medium uppercase">{t.navHome}</a>
              <a href="#about" className="hover:text-red-500 transition-colors px-3 py-2 text-sm font-medium uppercase">{t.navAbout}</a>
              <a href="#services" className="hover:text-red-500 transition-colors px-3 py-2 text-sm font-medium uppercase">{t.navServices}</a>
              <a href="#gallery" className="hover:text-red-500 transition-colors px-3 py-2 text-sm font-medium uppercase">{t.navGallery}</a>
              <a href="#contact" className="hover:text-red-500 transition-colors px-3 py-2 text-sm font-medium uppercase">{t.navContact}</a>
              
              <button 
                onClick={() => setLang(lang === 'TR' ? 'EN' : 'TR')}
                className="bg-red-600 hover:bg-red-700 text-xs px-3 py-1 rounded font-bold transition-all ml-4 border border-red-500 shadow-lg shadow-red-900/20"
              >
                {lang === 'TR' ? 'EN' : 'TR'}
              </button>
            </div>
          </div>

          <div className="md:hidden flex items-center gap-4">
             <button 
                onClick={() => setLang(lang === 'TR' ? 'EN' : 'TR')}
                className="bg-red-600 px-2 py-1 rounded text-xs font-bold"
              >
                {lang === 'TR' ? 'EN' : 'TR'}
              </button>
            <button onClick={() => setIsOpen(!isOpen)} className="text-white hover:text-red-500">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16v12M4 18h16"} />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-900 border-b border-gray-800 animate-slide-down">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#home" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-800">{t.navHome}</a>
            <a href="#about" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-800">{t.navAbout}</a>
            <a href="#services" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-800">{t.navServices}</a>
            <a href="#gallery" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-800">{t.navGallery}</a>
            <a href="#contact" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-800">{t.navContact}</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
