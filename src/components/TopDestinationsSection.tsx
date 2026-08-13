import React from 'react';
import { DESTINATIONS } from '../data/mockData';
import { Destination } from '../types';
import { MapPin, ArrowRight } from 'lucide-react';

interface TopDestinationsSectionProps {
  onSelectDestination: (dest: Destination) => void;
  onViewMore?: () => void;
}

export const TopDestinationsSection: React.FC<TopDestinationsSectionProps> = ({
  onSelectDestination,
  onViewMore,
}) => {
  // Take top 8 destinations
  const top8Destinations = DESTINATIONS.slice(0, 8);

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header without background container */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10 pb-4 border-b border-slate-200">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
            Featured Destinations
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-slate-900 mt-1">
            Top Destinations
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 max-w-md font-medium leading-relaxed mt-1">
            Discover our top 8 featured Indian holiday destinations, alpine valleys, royal forts, and holy pilgrimages.
          </p>
        </div>

        {/* Upside Button */}
        {onViewMore && (
          <button
            onClick={onViewMore}
            className="bg-slate-900 hover:bg-slate-800 text-white px-5 py-2.5 rounded-none text-xs font-bold transition-all shadow-sm flex items-center gap-1.5 hover:scale-105 active:scale-95 self-start md:self-auto whitespace-nowrap"
          >
            <span>View All Destinations</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        )}
      </div>

      {/* 8 Destination Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {top8Destinations.map((dest) => (
          <div
            key={dest.id}
            onClick={() => onSelectDestination(dest)}
            className="group bg-white rounded-none border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col justify-between hover:-translate-y-1"
          >
            <div>
              {/* Photo on Top */}
              <div className="relative h-52 w-full overflow-hidden bg-slate-100">
                <img
                  src={dest.image}
                  alt={dest.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />
                <span className="absolute top-3 left-3 bg-black/85 text-white text-[11px] font-bold px-3 py-1 rounded-none uppercase tracking-wider">
                  {dest.badge}
                </span>
              </div>

              {/* Details Downside */}
              <div className="p-5 space-y-2">
                <div className="flex items-center gap-1 text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
                  <MapPin className="w-3.5 h-3.5 text-rose-500 flex-shrink-0" />
                  <span className="truncate">{dest.region}</span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 group-hover:text-black transition-colors leading-snug">
                  {dest.name}
                </h3>

                <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                  {dest.description}
                </p>
              </div>
            </div>

            {/* Price & Action Downside Footer */}
            <div className="p-5 pt-3 border-t border-slate-100 flex items-center justify-between mt-2 bg-slate-50/50">
              <div>
                <span className="block text-[10px] uppercase font-bold text-slate-400">Starts from</span>
                <span className="text-base font-extrabold text-slate-900">
                  ₹{dest.startPriceINR.toLocaleString('en-IN')}
                </span>
              </div>

              <span className="inline-flex items-center gap-1 text-xs font-bold text-slate-900 group-hover:translate-x-1 transition-transform uppercase">
                Details <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Downside Button */}
      {onViewMore && (
        <div className="mt-10 text-center flex justify-center">
          <button
            onClick={onViewMore}
            className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-3.5 rounded-none text-xs sm:text-sm font-bold tracking-wide transition-all shadow-md hover:shadow-lg hover:scale-105 active:scale-95 flex items-center gap-2"
          >
            <span>View All Destinations</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      )}
    </section>
  );
};

