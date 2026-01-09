
import React from 'react';
import { Translations } from '../types';

interface AboutProps {
  t: Translations;
}

const About: React.FC<AboutProps> = ({ t }) => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative group">
            <div className="absolute -inset-4 bg-red-600 rounded-lg blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
            <img 
              src="https://picsum.photos/id/119/800/600" 
              alt="Hurdacılık İşi" 
              className="relative rounded-lg shadow-2xl object-cover h-[400px] w-full"
            />
            <div className="absolute bottom-6 right-6 bg-red-600 text-white p-6 rounded-lg shadow-xl animate-float">
                <span className="block text-3xl font-bold">15+</span>
                <span className="text-xs uppercase tracking-widest font-bold">Yıllık Deneyim</span>
            </div>
          </div>
          
          <div>
            <h2 className="text-red-600 font-bold tracking-widest uppercase text-sm mb-4">{t.aboutTitle}</h2>
            <h3 className="text-4xl md:text-5xl font-black mb-8 text-gray-900 font-oswald uppercase">
              Güvenilir Çözüm Ortağınız
            </h3>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              {t.aboutText}
            </p>
            <div className="bg-gray-100 p-6 rounded-xl border-l-4 border-red-600">
               <ul className="space-y-4">
                  <li className="flex items-center gap-3 font-semibold text-gray-800">
                    <svg className="w-5 h-5 text-red-600" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                    Her türlü hurdanız değerinde alınır
                  </li>
                  <li className="flex items-center gap-3 font-semibold text-gray-800">
                    <svg className="w-5 h-5 text-red-600" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                    Kesim ve söküm işleri itina ile yapılır
                  </li>
                  <li className="flex items-center gap-3 font-semibold text-gray-800">
                    <svg className="w-5 h-5 text-red-600" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                    Güvenilir • Profesyonel • Hızlı
                  </li>
               </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
