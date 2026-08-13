import React, { useState } from 'react';
import { DESTINATIONS } from '../data/mockData';
import { Destination } from '../types';
import { Search, MapPin, Star, Filter, ArrowRight } from 'lucide-react';

interface DestinationsPageProps {
  onSelectDestination: (dest: Destination) => void;
  onBookNow: (item: { id: string; title: string; type: 'destination' | 'package' }) => void;
}

export const DestinationsPage: React.FC<DestinationsPageProps> = ({
  onSelectDestination,
  onBookNow,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRegion, setSelectedRegion] = useState<string>('All');
  const [sortBy, setSortBy] = useState<'rating' | 'priceLow' | 'priceHigh'>('rating');

  const regions = [
    'All',
    'Himachal Pradesh',
    'Uttarakhand',
    'Rajasthan',
    'Jammu & Kashmir',
    'Ladakh',
    'Goa',
    'Kerala',
    'Meghalaya',
    'Madhya Pradesh'
  ];

  // Filtering
  const filteredDestinations = DESTINATIONS.filter(dest => {
    const matchesSearch =
      dest.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      dest.region.toLowerCase().includes(searchQuery.toLowerCase()) ||
      dest.description.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesRegion =
      selectedRegion === 'All' || dest.region === selectedRegion;

    return matchesSearch && matchesRegion;
  }).sort((a, b) => {
    if (sortBy === 'rating') return b.rating - a.rating;
    if (sortBy === 'priceLow') return a.startPriceINR - b.startPriceINR;
    if (sortBy === 'priceHigh') return b.startPriceINR - a.startPriceINR;
    return 0;
  });

  return (
    <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-8 animate-in fade-in duration-300">
      
      {/* Proper Search Bar */}
      <div className="relative w-full">
        <input
          type="text"
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
          placeholder="Search destinations, islands, activities..."
          className="w-full bg-white text-slate-900 pl-12 pr-12 py-4 text-sm sm:text-base rounded-none border border-slate-300 focus:outline-none focus:border-slate-900 font-medium shadow-sm"
        />
        <Search className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
        {searchQuery && (
          <button
            onClick={() => setSearchQuery('')}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-500 hover:text-slate-900 uppercase"
          >
            Clear
          </button>
        )}
      </div>

      {/* Filter Tabs & Controls */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200 pb-6">
        
        {/* Region Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
          <span className="text-xs font-bold uppercase text-slate-400 mr-2 flex items-center gap-1">
            <Filter className="w-3.5 h-3.5" /> State/Region:
          </span>
          {regions.map(r => (
            <button
              key={r}
              onClick={() => setSelectedRegion(r)}
              className={`px-4 py-2 rounded-none text-xs font-bold transition-all whitespace-nowrap ${
                selectedRegion === r
                  ? 'bg-slate-900 text-white'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200'
              }`}
            >
              {r}
            </button>
          ))}
        </div>

        {/* Sorting Controls */}
        <div className="flex items-center gap-3">
          {/* Sort By */}
          <select
            value={sortBy}
            onChange={e => setSortBy(e.target.value as any)}
            className="bg-slate-100 text-slate-800 text-xs font-semibold rounded-none px-4 py-2 border border-slate-200 focus:outline-none cursor-pointer"
          >
            <option value="rating">Sort: Highest Rated</option>
            <option value="priceLow">Sort: Price Low to High</option>
            <option value="priceHigh">Sort: Price High to Low</option>
          </select>
        </div>

      </div>

      {/* Grid of Destinations */}
      {filteredDestinations.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredDestinations.map(dest => (
            <div
              key={dest.id}
              className="bg-white rounded-none border border-slate-200 overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                {/* Image Box */}
                <div className="relative h-56 overflow-hidden cursor-pointer" onClick={() => onSelectDestination(dest)}>
                  <img
                    src={dest.image}
                    alt={dest.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-md px-3 py-1 rounded-none text-[11px] font-bold text-slate-900 shadow-sm border border-slate-200">
                    starts at ₹{dest.startPriceINR.toLocaleString('en-IN')}
                  </div>
                  <div className="absolute bottom-3 left-3 bg-slate-900 text-white px-2.5 py-0.5 rounded-none text-[11px] font-semibold">
                    {dest.badge}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 space-y-2">
                  <div className="flex items-center justify-between">
                    <h3
                      onClick={() => onSelectDestination(dest)}
                      className="text-lg font-bold text-slate-900 cursor-pointer hover:text-emerald-600 transition-colors"
                    >
                      {dest.name}
                    </h3>
                    <span className="flex items-center gap-1 text-xs font-bold text-amber-500">
                      <Star className="w-3.5 h-3.5 fill-amber-400" /> {dest.rating}
                    </span>
                  </div>

                  <div className="flex items-center gap-1 text-xs text-slate-500">
                    <MapPin className="w-3.5 h-3.5 text-rose-500" />
                    <span>{dest.region}</span>
                  </div>

                  <p className="text-xs text-slate-600 line-clamp-2 pt-1 leading-relaxed">
                    {dest.description}
                  </p>
                </div>
              </div>

              {/* Card Actions */}
              <div className="p-5 pt-0 flex items-center gap-2">
                <button
                  onClick={() => onSelectDestination(dest)}
                  className="flex-1 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold py-2.5 rounded-none border border-slate-200 transition-colors"
                >
                  View Details
                </button>
                <button
                  onClick={() => onBookNow({ id: dest.id, title: dest.name, type: 'destination' })}
                  className="bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold px-4 py-2.5 rounded-none transition-colors flex items-center gap-1"
                >
                  <span>Book</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-16 bg-slate-50 rounded-none border border-slate-200">
          <p className="text-base font-semibold text-slate-700">No matching destinations found</p>
          <p className="text-xs text-slate-400 mt-1">Try resetting your filters or search terms.</p>
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedRegion('All');
            }}
            className="mt-4 bg-slate-900 text-white px-5 py-2 rounded-none text-xs font-bold"
          >
            Reset Filters
          </button>
        </div>
      )}

    </div>
  );
};
