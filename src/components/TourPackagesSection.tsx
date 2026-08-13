import React from 'react';
import { TOUR_PACKAGES } from '../data/mockData';
import { TourPackage } from '../types';
import { Anchor, Mountain, Clock, Sparkles } from 'lucide-react';

interface TourPackagesSectionProps {
  onSelectPackage: (pkg: TourPackage) => void;
  onBrowseAllPackages: () => void;
}

export const TourPackagesSection: React.FC<TourPackagesSectionProps> = ({
  onSelectPackage,
  onBrowseAllPackages,
}) => {
  const package1 = TOUR_PACKAGES[0];
  const package2 = TOUR_PACKAGES[2] || TOUR_PACKAGES[1];

  return (
    <section className="py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
        
        {/* Card 1: Intro Card matching screenshot */}
        <div className="lg:col-span-4 bg-[#8292a4] rounded-none p-8 sm:p-10 text-white flex flex-col justify-between h-[380px] lg:h-[420px] shadow-sm">
          <div>
            <div className="inline-flex items-center gap-1.5 bg-white/20 backdrop-blur-md px-3.5 py-1 rounded-none text-xs font-semibold mb-6 text-white uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-amber-300" /> Handpicked Experiences
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4 text-white">
              Tour Packages
            </h2>
            <p className="text-sm sm:text-base text-slate-100/90 font-medium leading-relaxed max-w-xs">
              Affordable, customizable, and unforgettable holiday packages across India.
            </p>
          </div>

          <div className="pt-6">
            <button
              onClick={onBrowseAllPackages}
              className="bg-[#202b3c] hover:bg-[#151e2b] text-white px-6 py-3 rounded-none text-xs sm:text-sm font-semibold transition-all shadow-md hover:shadow-lg active:scale-95 uppercase tracking-wider"
            >
              Browse all packages
            </button>
          </div>
        </div>

        {/* Card 2: Package 1 */}
        {package1 && (
          <div
            onClick={() => onSelectPackage(package1)}
            className="lg:col-span-4 relative h-[380px] lg:h-[420px] rounded-none overflow-hidden group cursor-pointer shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-slate-200"
          >
            <img
              src={package1.image}
              alt={package1.title}
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
            />

            {/* Icon Badge Top Left */}
            <div className="absolute top-4 left-4 w-11 h-11 bg-white/25 backdrop-blur-md rounded-none border border-white/30 flex items-center justify-center text-white">
              <Anchor className="w-5 h-5" />
            </div>

            {/* Price Badge Top Right */}
            <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md px-3 py-1 rounded-none text-xs font-bold text-slate-900 shadow-sm flex items-center gap-1">
              <Clock className="w-3 h-3 text-slate-500" />
              <span>₹{package1.priceINR.toLocaleString('en-IN')}</span>
            </div>

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

            {/* Content Bottom */}
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight mb-2 text-white">
                {package1.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-200/90 leading-relaxed font-normal">
                {package1.subtitle}
              </p>
            </div>
          </div>
        )}

        {/* Card 3: Package 2 */}
        {package2 && (
          <div
            onClick={() => onSelectPackage(package2)}
            className="lg:col-span-4 relative h-[380px] lg:h-[420px] rounded-none overflow-hidden group cursor-pointer shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-slate-200"
          >
            <img
              src={package2.image}
              alt={package2.title}
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
            />

            {/* Icon Badge Top Left */}
            <div className="absolute top-4 left-4 w-11 h-11 bg-white/25 backdrop-blur-md rounded-none border border-white/30 flex items-center justify-center text-white">
              <Mountain className="w-5 h-5" />
            </div> 

            {/* Price Badge Top Right */}
            <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md px-3 py-1 rounded-none text-xs font-bold text-slate-900 shadow-sm flex items-center gap-1">
              <Clock className="w-3 h-3 text-slate-500" />
              <span>₹{package2.priceINR.toLocaleString('en-IN')}</span>
            </div>

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

            {/* Content Bottom */}
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight mb-2 text-white">
                {package2.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-200/90 leading-relaxed font-normal">
                {package2.subtitle}
              </p>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};