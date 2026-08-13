import React from 'react';
import { HeroSection } from '../components/HeroSection';
import { WhyChooseSection } from '../components/WhyChooseSection';
import { TopDestinationsSection } from '../components/TopDestinationsSection';
import { TourPackagesSection } from '../components/TourPackagesSection';
import { Destination, TourPackage } from '../types';
import { REVIEWS } from '../data/mockData';
import { Star } from 'lucide-react';

interface HomePageProps {
  onSelectDestination: (dest: Destination) => void;
  onSelectPackage: (pkg: TourPackage) => void;
  onNavigateTab: (tab: string) => void;
  onOpenBooking: (item?: { id: string; title: string; type: 'destination' | 'package' }) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onSelectDestination,
  onSelectPackage,
  onNavigateTab,
  onOpenBooking,
}) => {
  return (
    <div className="space-y-4">
      {/* Hero Banner Section matching reference design */}
      <HeroSection
        onPlanTrip={() => onOpenBooking()}
        onExploreDestinations={() => onNavigateTab('destinations')}
        onSelectTag={() => onNavigateTab('destinations')}
      />

      {/* Why Thousands Choose WANDER.ph Section matching reference design */}
      <WhyChooseSection />

      {/* Top Destinations Section matching reference design */}
      <TopDestinationsSection
        onSelectDestination={onSelectDestination}
        onViewMore={() => onNavigateTab('destinations')}
      />

      {/* Tour Packages Section matching reference design */}
      <TourPackagesSection
        onSelectPackage={onSelectPackage}
        onBrowseAllPackages={() => onNavigateTab('packages')}
      />

      {/* Traveler Testimonials Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-slate-50 border border-slate-100 rounded-[2.5rem] p-8 sm:p-12">
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Verified Traveler Stories
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
              Loved by Explorers Worldwide
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {REVIEWS.map((rev) => (
              <div
                key={rev.id}
                className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-1 text-amber-400 mb-3">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed italic mb-4">
                    "{rev.comment}"
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100">
                  <div className="text-xs font-bold text-slate-900">{rev.author}</div>
                  <div className="text-[11px] text-slate-500">{rev.location} • {rev.tripTaken}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
