
import React from 'react';
import { Translations } from '../types';

interface FooterProps {
  t: Translations;
}

const Footer: React.FC<FooterProps> = ({ t }) => {
  return (
    <footer className="bg-gray-900 text-white py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-8">
          <div className="text-center md:text-left">
            <h4 className="text-2xl font-bold font-oswald uppercase tracking-tighter mb-2">Öz Adalı <span className="text-red-600">Hurdacılık</span></h4>
            <p className="text-gray-400 text-sm max-w-xs">{t.aboutBadge}</p>
          </div>
          
          <div className="flex gap-6">
            <a href="#home" className="text-gray-400 hover:text-white transition-colors">{t.navHome}</a>
            <a href="#about" className="text-gray-400 hover:text-white transition-colors">{t.navAbout}</a>
            <a href="#services" className="text-gray-400 hover:text-white transition-colors">{t.navServices}</a>
            <a href="#contact" className="text-gray-400 hover:text-white transition-colors">{t.navContact}</a>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-xs">
            © {new Date().getFullYear()} Öz Adalı Hurdacılık. Tüm Hakları Saklıdır.
          </p>
          <p className="text-gray-600 text-[10px] uppercase tracking-widest font-bold">
            {t.footerCredit}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
