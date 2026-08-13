import React, { useState } from 'react';
import { X, MapPin, Check, Sparkles, ArrowRight } from 'lucide-react';
import { Destination, TourPackage } from '../types';

interface DetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  destination?: Destination | null;
  tourPackage?: TourPackage | null;
  onBookNow: (item: { id: string; title: string; type: 'destination' | 'package' }) => void;
}

export const DetailModal: React.FC<DetailModalProps> = ({
  isOpen,
  onClose,
  destination,
  tourPackage,
  onBookNow,
}) => {
  if (!isOpen || (!destination && !tourPackage)) return null;

  const isDest = !!destination;
  const [activeImageIdx, setActiveImageIdx] = useState(0);

  const images = isDest
    ? destination?.gallery || [destination?.image || '']
    : [tourPackage?.image || ''];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-black text-white rounded-none max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative border border-neutral-800 font-sans">
        
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2.5 text-white bg-black/70 hover:bg-white hover:text-black border border-neutral-700 transition-colors rounded-none"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Hero Image */}
        <div className="relative h-64 sm:h-80 w-full overflow-hidden bg-neutral-900">
          <img
            src={images[activeImageIdx]}
            alt={isDest ? destination?.name : tourPackage?.title}
            className="w-full h-full object-cover transition-all duration-500 grayscale hover:grayscale-0"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

          <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
            <span className="inline-flex items-center gap-1.5 text-[10px] font-extrabold bg-white text-black px-3 py-1 uppercase tracking-widest">
              <Sparkles className="w-3 h-3 text-black" />
              {isDest ? destination?.badge : tourPackage?.duration}
            </span>
            <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-white uppercase">
              {isDest ? destination?.name : tourPackage?.title}
            </h2>
            <div className="flex flex-wrap items-center gap-3 text-xs text-neutral-300 font-medium pt-1 uppercase">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-white" />
                <span>{isDest ? destination?.region : tourPackage?.region}</span>
              </span>
            </div>
          </div>
        </div>

        {/* Gallery Thumbnails */}
        {images.length > 1 && (
          <div className="flex gap-2 p-3 bg-neutral-950 border-b border-neutral-800 overflow-x-auto">
            {images.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt="Gallery thumbnail"
                onClick={() => setActiveImageIdx(idx)}
                className={`w-16 h-12 object-cover cursor-pointer transition-all border ${
                  activeImageIdx === idx ? 'border-white opacity-100' : 'border-neutral-800 opacity-50 hover:opacity-100 grayscale'
                }`}
              />
            ))}
          </div>
        )}

        {/* Modal Details Body */}
        <div className="p-6 sm:p-8 space-y-8 bg-black">
          
          {/* Overview */}
          <div className="space-y-2">
            <h3 className="text-[11px] font-bold uppercase tracking-widest text-neutral-400 border-b border-neutral-800 pb-2">
              Overview & Details
            </h3>
            <p className="text-sm text-neutral-300 leading-relaxed font-light pt-1">
              {isDest ? destination?.description : tourPackage?.description}
            </p>
          </div>

          {/* Highlights or Itinerary */}
          {isDest ? (
            <div className="space-y-3">
              <h3 className="text-[11px] font-bold uppercase tracking-widest text-neutral-400 border-b border-neutral-800 pb-2">
                Top Highlights
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {destination?.highlights.map((hl, i) => (
                  <div key={i} className="flex items-center gap-2.5 text-xs text-neutral-200 bg-neutral-900 p-3 border border-neutral-800">
                    <Check className="w-4 h-4 text-white flex-shrink-0" />
                    <span>{hl}</span>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="space-y-3">
              <h3 className="text-[11px] font-bold uppercase tracking-widest text-neutral-400 border-b border-neutral-800 pb-2">
                Day-by-Day Itinerary
              </h3>
              <div className="space-y-2.5">
                {tourPackage?.itinerary.map((item) => (
                  <div key={item.day} className="bg-neutral-900 p-4 border border-neutral-800 space-y-1">
                    <span className="text-[10px] font-extrabold uppercase tracking-widest bg-white text-black px-2 py-0.5 inline-block">
                      Day {item.day}
                    </span>
                    <h4 className="text-sm font-bold text-white">
                      {item.title}
                    </h4>
                    <p className="text-xs text-neutral-400 leading-relaxed">
                      {item.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Black and White Modern Booking Footer */}
          <div className="bg-neutral-900 border border-neutral-800 p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <div className="text-[10px] uppercase font-bold tracking-widest text-neutral-400">
                {isDest ? 'Starting Rate per Person' : 'Package Rate per Person'}
              </div>
              <div className="text-2xl sm:text-3xl font-black text-white">
                ₹{(isDest ? destination?.startPriceINR : tourPackage?.priceINR)?.toLocaleString('en-IN')}
              </div>
            </div>

            <button
              onClick={() => {
                onClose();
                onBookNow({
                  id: isDest ? destination!.id : tourPackage!.id,
                  title: isDest ? destination!.name : tourPackage!.title,
                  type: isDest ? 'destination' : 'package',
                });
              }}
              className="w-full sm:w-auto bg-white hover:bg-neutral-200 text-black font-extrabold px-8 py-3.5 uppercase tracking-wider text-xs transition-all flex items-center justify-center gap-2"
            >
              <span>Book This Trip</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};

