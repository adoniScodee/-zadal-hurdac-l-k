
import React from 'react';
import { Translations } from '../types';

interface ServicesProps {
  t: Translations;
}

const Services: React.FC<ServicesProps> = ({ t }) => {
  const services = [
    { title: t.service1, desc: t.service1Desc, icon: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" },
    { title: t.service2, desc: t.service2Desc, icon: "M13 10V3L4 14h7v7l9-11h-7z" },
    { title: t.service3, desc: t.service3Desc, icon: "M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" }
  ];

  return (
    <section id="services" className="py-24 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-red-600 font-bold uppercase tracking-widest text-sm mb-4">{t.navServices}</h2>
          <h3 className="text-4xl md:text-5xl font-black font-oswald uppercase tracking-tight">{t.servicesTitle}</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((s, idx) => (
            <div key={idx} className="bg-gray-800 p-8 rounded-2xl hover:bg-gray-700 transition-all group border border-gray-700 hover:border-red-600 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-red-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-red-600/20">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={s.icon} />
                </svg>
              </div>
              <h4 className="text-2xl font-bold mb-4 font-oswald uppercase tracking-wide">{s.title}</h4>
              <p className="text-gray-400 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
