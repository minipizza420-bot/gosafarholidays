import React from 'react';
import { FEATURES_DATA, STATS_DATA } from '../data/mockData';
import { Instagram, Facebook, Smile, Award, MapPin, Users, CalendarCheck, Headphones } from 'lucide-react';

export const WhyChooseSection: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Users':
        return <Users className="w-8 h-8 text-slate-800" />;
      case 'CalendarCheck':
        return <CalendarCheck className="w-8 h-8 text-slate-800" />;
      case 'Headphones':
        return <Headphones className="w-8 h-8 text-slate-800" />;
      default:
        return <Users className="w-8 h-8 text-slate-800" />;
    }
  };

  const getStatIcon = (statName: string) => {
    switch (statName) {
      case 'Smile':
        return <Smile className="w-6 h-6 text-slate-800" />;
      case 'Award':
        return <Award className="w-6 h-6 text-slate-800" />;
      case 'MapPin':
        return <MapPin className="w-6 h-6 text-slate-800" />;
      default:
        return <Smile className="w-6 h-6 text-slate-800" />;
    }
  };

  return (
    <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        
        {/* Left Column: Heading, Paragraph, Socials, Stats */}
        <div className="lg:col-span-6 flex flex-col justify-between h-full">
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-slate-900 leading-tight mb-4">
              Why Thousands of Travelers Choose Go Safar Holidays for Their Adventures
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6 max-w-xl">
              From snow peaks to cultural hotspots, we make exploring India easier, safer, and more exciting with expert-crafted itineraries and round-the-clock support.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-4 mb-10 text-slate-700">
              <a
                href="https://www.instagram.com/gosafar.holidays?igsh=MTcxN3UzeDVoNWt0cQ=="
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full border border-slate-300 flex items-center justify-center hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://www.facebook.com/share/14jzrcBdTCk/"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full border border-slate-300 flex items-center justify-center hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Stats Row with circle icons matching screenshot */}
          <div className="grid grid-cols-3 gap-4 border-t border-slate-100 pt-8 mt-auto">
            {STATS_DATA.map((stat, idx) => (
              <div key={idx} className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center mb-3 text-slate-800">
                  {getStatIcon(stat.icon)}
                </div>
                <span className="text-xl sm:text-2xl font-black text-slate-900">
                  {stat.value}
                </span>
                <span className="text-[11px] sm:text-xs text-slate-500 font-medium leading-tight mt-1">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

        </div>

        {/* Right Column: 3 Feature Cards (Proper Rectangles with 25% Opacity Background Image) */}
        <div className="lg:col-span-6 flex flex-col gap-4">
          {FEATURES_DATA.map((feat) => (
            <div
              key={feat.id}
              className="relative overflow-hidden bg-slate-900 text-white p-6 sm:p-7 rounded-none border border-slate-800 shadow-md transition-all duration-300 flex items-start gap-5 group"
            >
              {/* Background image with 45% opacity */}
              <div
                className="absolute inset-0 bg-cover bg-center opacity-45 z-0 group-hover:scale-105 transition-transform duration-700"
                style={{ backgroundImage: `url(${feat.bgImage})` }}
              />

              {/* Dark gradient overlay for text legibility */}
              <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-900/60 to-slate-950/70 z-0" />

              {/* Content */}
              <div className="relative z-10 w-14 h-14 bg-white/90 backdrop-blur-md flex items-center justify-center flex-shrink-0 shadow-sm group-hover:scale-105 transition-transform">
                {getIcon(feat.icon)}
              </div>
              <div className="relative z-10">
                <h3 className="text-lg sm:text-xl font-bold text-white mb-1.5 tracking-wide">
                  {feat.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                  {feat.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
