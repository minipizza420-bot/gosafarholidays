import React from 'react';
import { HERO_DATA } from '../data/mockData';
import { Compass, MapPin } from 'lucide-react';

interface HeroSectionProps {
  onPlanTrip: () => void;
  onExploreDestinations: () => void;
  onSelectTag?: (tag: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onPlanTrip,
  onExploreDestinations,
  onSelectTag,
}) => {
  return (
    <section className="relative w-full h-screen min-h-[650px] overflow-hidden group">
      {/* Background Video - Full Screen Silent Auto-Playing Drone Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover object-center transform scale-100 group-hover:scale-105 transition-transform duration-1000 ease-out pointer-events-none"
      >
        <source src={HERO_DATA.heroVideo} type="video/mp4" />
        <source src={HERO_DATA.fallbackVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Gradient Overlay for visual hierarchy & legibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-black/30 pointer-events-none" />

      {/* Content Container */}
      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center text-center px-4 sm:px-8 md:px-12 pt-16">
        
        {/* Main Giant Overlay Title */}
        <div className="relative mb-3">
          <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tight text-white drop-shadow-xl select-none">
            {HERO_DATA.title}
            <span className="text-xl sm:text-2xl md:text-3xl font-bold tracking-normal uppercase ml-1 sm:ml-2 align-super opacity-90 text-slate-200">
              {HERO_DATA.suffix}
            </span>
          </h1>
        </div>

        {/* Subtitle Paragraph */}
        <p className="max-w-xl md:max-w-2xl text-sm sm:text-base md:text-lg text-slate-100/90 font-normal leading-relaxed drop-shadow-md mb-8">
          {HERO_DATA.tagline}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          <button
            onClick={onPlanTrip}
            className="bg-white hover:bg-slate-100 text-slate-900 px-6 sm:px-8 py-3.5 rounded-full font-semibold text-xs sm:text-sm tracking-wide transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:scale-95"
          >
            Plan Your Trip
          </button>
          <button
            onClick={onExploreDestinations}
            className="bg-white/15 hover:bg-white/25 text-white border border-white/40 backdrop-blur-md px-6 sm:px-8 py-3.5 rounded-full font-semibold text-xs sm:text-sm tracking-wide transition-all hover:-translate-y-0.5 active:scale-95"
          >
            Explore Destinations
          </button>
        </div>

        {/* Quick Tags row - 4 custom locations from user's list */}
        <div className="mt-8 hidden sm:flex items-center gap-2 bg-black/40 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
          <span className="text-xs font-semibold text-white/90 mr-2">
            Trending:
          </span>
          {['Manali Kasol', 'Kedarnath', 'Kashmir', 'Spiti Valley'].map((tag) => (
            <button
              key={tag}
              onClick={() => onSelectTag?.(tag)}
              className="text-xs font-medium text-white/90 hover:text-white bg-white/10 hover:bg-white/20 px-3 py-1 rounded-full transition-colors flex items-center gap-1"
            >
              <MapPin className="w-3 h-3 text-emerald-400" />
              {tag}
            </button>
          ))}
        </div>

      </div>

      {/* Bottom subtle edge indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/70 text-xs font-medium tracking-widest uppercase flex items-center gap-2 z-10">
        <Compass className="w-4 h-4 animate-spin-slow" /> Go Safar Holidays • Incredible India
      </div>
    </section>
  );
};

