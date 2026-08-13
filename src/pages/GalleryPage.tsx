import React, { useState } from 'react';
import { X } from 'lucide-react';

const GALLERY_IMAGES = [
  '/1.png',
  '/2.png',
  '/3.png',
  '/4.png',
  '/5.png',
  '/6.png',
  '/7.png',
  '/8.png',
  '/9.png',
  '/10.png',
  '/11.png',
  '/12.png',
  '/13.png',
  '/14.png',
];

export const GalleryPage: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="pt-28 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-6 animate-in fade-in duration-300">
      
      {/* Simple Title Header */}
      <div className="text-center space-y-1">
        <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-slate-900 uppercase">
          Our Batch
        </h1>
        <div className="w-12 h-1 bg-emerald-500 mx-auto rounded-full" />
      </div>

      {/* Clean Photo Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
        {GALLERY_IMAGES.map((img, idx) => (
          <div
            key={idx}
            onClick={() => setSelectedImage(img)}
            className="group relative h-48 sm:h-64 rounded-xl overflow-hidden bg-slate-100 cursor-pointer shadow-xs hover:shadow-md transition-all duration-300"
          >
            <img
              src={img}
              alt={`Batch photo ${idx + 1}`}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        ))}
      </div>

      {/* Simple Image Modal */}
      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200"
        >
          <div className="relative max-w-4xl w-full flex items-center justify-center">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-2 right-2 z-10 w-10 h-10 rounded-full bg-slate-900/80 hover:bg-slate-800 text-white flex items-center justify-center transition-colors border border-slate-700"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            <img
              src={selectedImage}
              alt="Batch photo full view"
              className="max-h-[85vh] w-auto max-w-full object-contain rounded-lg shadow-2xl"
            />
          </div>
        </div>
      )}

    </div>
  );
};

