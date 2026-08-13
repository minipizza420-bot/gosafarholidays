import React, { useState } from 'react';
import { TOUR_PACKAGES } from '../data/mockData';
import { TourPackage } from '../types';
import { Clock, Check, Sparkles, MapPin, ArrowRight, ShieldCheck, ChevronDown, ChevronUp } from 'lucide-react';

interface PackagesPageProps {
  onSelectPackage: (pkg: TourPackage) => void;
  onBookNow: (item: { id: string; title: string; type: 'destination' | 'package' }) => void;
}

export const PackagesPage: React.FC<PackagesPageProps> = ({
  onSelectPackage,
  onBookNow,
}) => {
  const [expandedPackageId, setExpandedPackageId] = useState<string | null>(TOUR_PACKAGES[0].id);

  const toggleExpand = (id: string) => {
    setExpandedPackageId(expandedPackageId === id ? null : id);
  };

  return (
    <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-8 animate-in fade-in duration-300">
      
      {/* Package List View */}
      <div className="space-y-6">
        {TOUR_PACKAGES.map(pkg => {
          const isExpanded = expandedPackageId === pkg.id;

          return (
            <div
              key={pkg.id}
              className="bg-white rounded-none border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-all"
            >
              {/* Mobile View: ONLY Photo, Description, Price & View Details Button */}
              <div className="sm:hidden p-4 space-y-3">
                <div className="h-44 w-full rounded-none overflow-hidden" onClick={() => onSelectPackage(pkg)}>
                  <img
                    src={pkg.image}
                    alt={pkg.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="space-y-1" onClick={() => onSelectPackage(pkg)}>
                  <h3 className="text-lg font-bold text-slate-900 leading-snug">
                    {pkg.title}
                  </h3>
                  <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                    {pkg.subtitle}
                  </p>
                </div>

                <div className="pt-2 flex items-center justify-between border-t border-slate-100">
                  <div>
                    <div className="text-xl font-black text-slate-900">
                      ₹{pkg.priceINR.toLocaleString('en-IN')}
                    </div>
                  </div>

                  <button
                    onClick={() => onSelectPackage(pkg)}
                    className="bg-slate-900 text-white font-bold px-4 py-2 text-xs uppercase tracking-wider rounded-none flex items-center gap-1"
                  >
                    <span>View Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Desktop / Tablet View (sm and above) */}
              <div className="hidden sm:block">
                <div className="p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                  
                  {/* Thumbnail */}
                  <div className="lg:col-span-4 h-52 sm:h-60 rounded-none overflow-hidden relative group cursor-pointer" onClick={() => onSelectPackage(pkg)}>
                    <img
                      src={pkg.image}
                      alt={pkg.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 bg-slate-900/90 text-white text-xs font-bold px-3 py-1 rounded-none flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-emerald-400" />
                      <span>{pkg.duration}</span>
                    </div>
                  </div>

                  {/* Details Mid */}
                  <div className="lg:col-span-5 space-y-3">
                    <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 uppercase tracking-wider">
                      <MapPin className="w-3.5 h-3.5 text-rose-500" />
                      <span>{pkg.region}</span>
                    </div>

                    <h3
                      onClick={() => onSelectPackage(pkg)}
                      className="text-2xl font-bold text-slate-900 cursor-pointer hover:text-emerald-600 transition-colors"
                    >
                      {pkg.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {pkg.subtitle}
                    </p>

                    <div className="flex flex-wrap gap-2 pt-1">
                      {pkg.inclusions.slice(0, 3).map((inc, i) => (
                        <span key={i} className="text-[11px] bg-slate-100 text-slate-700 px-2.5 py-1 rounded-none border border-slate-200 font-medium flex items-center gap-1">
                          <Check className="w-3 h-3 text-emerald-600" /> {inc}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Pricing & CTA Right */}
                  <div className="lg:col-span-3 bg-slate-50 p-6 rounded-none border border-slate-200 flex flex-col justify-between h-full space-y-4 text-center lg:text-right">
                    <div>
                      {pkg.originalPriceINR && (
                        <div className="text-xs text-slate-400 line-through">
                          ₹{pkg.originalPriceINR.toLocaleString('en-IN')}
                        </div>
                      )}
                      <div className="text-2xl sm:text-3xl font-black text-slate-900">
                        ₹{pkg.priceINR.toLocaleString('en-IN')}
                      </div>
                      <div className="text-[11px] text-slate-500">per guest • all inclusive</div>
                    </div>

                    <div className="space-y-2">
                      <button
                        onClick={() => onBookNow({ id: pkg.id, title: pkg.title, type: 'package' })}
                        className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-3 px-4 rounded-none text-xs transition-all shadow-md flex items-center justify-center gap-1 uppercase tracking-wider"
                      >
                        <span>Book Package</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>

                      <button
                        onClick={() => toggleExpand(pkg.id)}
                        className="w-full text-xs font-semibold text-slate-600 hover:text-slate-900 py-1 flex items-center justify-center gap-1 uppercase"
                      >
                        <span>{isExpanded ? 'Hide Itinerary' : 'View Full Itinerary'}</span>
                        {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                      </button>
                    </div>
                  </div>

                </div>

                {/* Expanded Itinerary Drawer */}
                {isExpanded && (
                  <div className="border-t border-slate-200 bg-slate-50/70 p-6 sm:p-8 animate-in slide-in-from-top-2 duration-200">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">
                      Day-by-Day Itinerary Breakdown
                    </h4>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                      {pkg.itinerary.map(item => (
                        <div key={item.day} className="bg-white p-4 rounded-none border border-slate-200 shadow-2xs">
                          <span className="text-xs font-bold text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded-none border border-emerald-200">
                            Day {item.day}
                          </span>
                          <h5 className="text-sm font-bold text-slate-900 mt-1 mb-1">
                            {item.title}
                          </h5>
                          <p className="text-xs text-slate-600 leading-relaxed">
                            {item.detail}
                          </p>
                        </div>
                      ))}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-slate-200/60 text-xs">
                      <div>
                        <span className="font-bold text-slate-900 block mb-2">Package Inclusions:</span>
                        <ul className="space-y-1.5 text-slate-600">
                          {pkg.inclusions.map((inc, idx) => (
                            <li key={idx} className="flex items-center gap-2">
                              <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                              <span>{inc}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <span className="font-bold text-slate-900 block mb-2">Package Exclusions:</span>
                        <ul className="space-y-1.5 text-slate-500">
                          {pkg.exclusions.map((exc, idx) => (
                            <li key={idx}>• {exc}</li>
                          ))}
                        </ul>
                      </div>
                    </div>

                  </div>
                )}
              </div>

            </div>
          );
        })}
      </div>

    </div>
  );
};

