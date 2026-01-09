
import React from 'react';
import { Translations } from '../types';

interface ContactProps {
  t: Translations;
}

const Contact: React.FC<ContactProps> = ({ t }) => {
  return (
    <section id="contact" className="py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-red-600 font-bold uppercase tracking-widest text-sm mb-4">{t.navContact}</h2>
          <h3 className="text-4xl md:text-5xl font-black font-oswald uppercase text-gray-900 tracking-tight">{t.contactTitle}</h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-12">
          <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 text-center">
            <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white">
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <h4 className="text-xl font-bold mb-2 uppercase font-oswald">{t.phoneLabel}</h4>
            <a href="tel:+905366850647" className="text-2xl font-black text-red-600 hover:text-red-700 transition-colors">0 536 685 06 47</a>
          </div>

          <div className="lg:col-span-2 bg-white p-8 rounded-2xl shadow-xl border border-gray-100 flex flex-col md:flex-row items-center gap-8">
            <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center shrink-0 text-white">
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-2 uppercase font-oswald">{t.addressLabel}</h4>
              <p className="text-gray-600 text-lg">Değirmendere Mah. Sanayi Cad. 20sk. No: 3 Kuşadası/Aydın</p>
            </div>
          </div>
        </div>

        {/* Map Embed - Using a representative location for Kuşadası Sanayi */}
        <div className="w-full h-[500px] rounded-2xl shadow-2xl overflow-hidden border-4 border-white">
           <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12663.9542018868!2d27.2721!3d37.8384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14be8007a3c75905%3A0xc66578051df98621!2sDe%C4%9Firmendere%2C%20Sanayi%20Cd.%2C%2009400%20Ku%C5%9Fadas%C4%B1%2FAyd%C4%B1n!5e0!3m2!1str!2str!4v1710000000000!5m2!1str!2str" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={true} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Öz Adalı Hurdacılık Konum"
           ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;
