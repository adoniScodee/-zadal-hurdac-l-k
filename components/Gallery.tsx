
import React from 'react';
import { Translations } from '../types';

interface GalleryProps {
  t: Translations;
}

const Gallery: React.FC<GalleryProps> = ({ t }) => {
  const images = [
    { src: "https://picsum.photos/id/111/600/400", title: "Metal Yığını" },
    { src: "https://picsum.photos/id/112/600/400", title: "Söküm Sahası" },
    { src: "https://picsum.photos/id/113/600/400", title: "İş Makinesi" },
    { src: "https://picsum.photos/id/114/600/400", title: "Bakır Hurda" },
    { src: "https://picsum.photos/id/115/600/400", title: "Demir Kesimi" },
    { src: "https://picsum.photos/id/116/600/400", title: "Nakliyat" }
  ];

  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-red-600 font-bold uppercase tracking-widest text-sm mb-4">{t.navGallery}</h2>
          <h3 className="text-4xl md:text-5xl font-black font-oswald uppercase text-gray-900 tracking-tight">{t.galleryTitle}</h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((img, idx) => (
            <div key={idx} className="group relative overflow-hidden rounded-xl shadow-lg aspect-[3/2]">
              <img 
                src={img.src} 
                alt={img.title} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 brightness-90 group-hover:brightness-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                <p className="text-white font-bold uppercase tracking-widest">{img.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
