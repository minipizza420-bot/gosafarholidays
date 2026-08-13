import React, { useState } from 'react';
import { MapPin, Sliders, CheckCircle2, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import { DESTINATIONS } from '../data/mockData';

interface HowItWorksSectionProps {
  onQuickBook: (destId: string, guests: number) => void;
}

export const HowItWorksSection: React.FC<HowItWorksSectionProps> = ({ onQuickBook }) => {
  const [selectedDestId, setSelectedDestId] = useState(DESTINATIONS[0].id);
  const [guestCount, setGuestCount] = useState(2);
  const [selectedDuration, setSelectedDuration] = useState(3);

  const currentDest = DESTINATIONS.find(d => d.id === selectedDestId) || DESTINATIONS[0];
  const estimatedTotalINR = currentDest.startPriceINR * guestCount * (selectedDuration / 3);

  const steps = [
    {
      num: "01",
      icon: MapPin,
      title: "Pick Your Destination",
      desc: "Explore top Indian spots from Manali & Kasol in the Himalayas to Rajasthan forts, Kashmir, and Kerala backwaters."
    },
    {
      num: "02",
      icon: Sliders,
      title: "Customize Your Tour",
      desc: "Tailor travel dates, group size, Volvo/Cab routes, and add local guides or bonfire campfires."
    },
    {
      num: "03",
      icon: CheckCircle2,
      title: "Confirm & Travel",
      desc: "Get instant voucher confirmation, complete itinerary breakdown, and 24/7 dedicated Go Safar support."
    }
  ];

  return (
    <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Title */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <div className="inline-flex items-center gap-1.5 bg-slate-100 text-slate-800 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
          <Sparkles className="w-3.5 h-3.5 text-amber-500" /> Hassle-Free Planning
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
          Booking made as easy as 1-2-3.
        </h2>
      </div>

      {/* Steps Cards Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {steps.map((step) => {
          const IconComp = step.icon;
          return (
            <div
              key={step.num}
              className="bg-white border border-slate-100 p-6 sm:p-8 rounded-3xl shadow-sm hover:shadow-md transition-all relative overflow-hidden group"
            >
              <div className="absolute top-4 right-6 text-5xl font-black text-slate-100 group-hover:text-slate-200/80 transition-colors select-none">
                {step.num}
              </div>

              <div className="w-12 h-12 rounded-2xl bg-slate-900 text-white flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
                <IconComp className="w-6 h-6 text-emerald-400" />
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2">
                {step.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {step.desc}
              </p>
            </div>
          );
        })}
      </div>

      {/* Embedded Interactive Quick Tour Estimator Widget */}
      <div className="bg-[#202b3c] rounded-[2.5rem] p-6 sm:p-10 text-white shadow-xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-6">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 bg-emerald-950/60 border border-emerald-800/60 px-3 py-1 rounded-full">
              Live Fare Estimator
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold mt-3 mb-3 text-white">
              Plan Your Custom Itinerary in Seconds
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
              Select your dream destination, number of travelers, and trip length to generate an instant estimate with zero hidden fees.
            </p>

            {/* Form Fields */}
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                  Select Destination
                </label>
                <select
                  value={selectedDestId}
                  onChange={(e) => setSelectedDestId(e.target.value)}
                  className="w-full bg-slate-800/90 border border-slate-700 text-white text-sm rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                >
                  {DESTINATIONS.map((d) => (
                    <option key={d.id} value={d.id} className="bg-slate-900 text-white">
                      {d.name} ({d.region}) - starts ₹{d.startPriceINR.toLocaleString('en-IN')}
                    </option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Travelers
                  </label>
                  <div className="flex items-center gap-2 bg-slate-800/90 border border-slate-700 rounded-xl p-1.5">
                    <button
                      onClick={() => setGuestCount(Math.max(1, guestCount - 1))}
                      className="w-8 h-8 rounded-lg bg-slate-700 text-white font-bold hover:bg-slate-600 transition-colors"
                    >
                      -
                    </button>
                    <span className="flex-1 text-center font-bold text-sm text-white">
                      {guestCount} {guestCount === 1 ? 'Guest' : 'Guests'}
                    </span>
                    <button
                      onClick={() => setGuestCount(guestCount + 1)}
                      className="w-8 h-8 rounded-lg bg-slate-700 text-white font-bold hover:bg-slate-600 transition-colors"
                    >
                      +
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Duration
                  </label>
                  <select
                    value={selectedDuration}
                    onChange={(e) => setSelectedDuration(Number(e.target.value))}
                    className="w-full bg-slate-800/90 border border-slate-700 text-white text-sm rounded-xl px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  >
                    <option value={3} className="bg-slate-900">3 Days / 2 Nights</option>
                    <option value={4} className="bg-slate-900">4 Days / 3 Nights</option>
                    <option value={5} className="bg-slate-900">5 Days / 4 Nights</option>
                    <option value={7} className="bg-slate-900">7 Days Grand Tour</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* Estimator Result Box */}
          <div className="lg:col-span-6 bg-slate-800/80 border border-slate-700/80 rounded-2xl p-6 flex flex-col justify-between h-full">
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-700">
              <span className="text-xs text-slate-400 uppercase font-semibold">Package Summary</span>
              <span className="text-xs font-bold text-emerald-400 bg-emerald-950/80 px-2.5 py-1 rounded-md">
                ★ {currentDest.rating} Rated
              </span>
            </div>

            <div className="space-y-2 mb-6 text-xs sm:text-sm">
              <div className="flex justify-between text-slate-300">
                <span>Destination:</span>
                <span className="font-bold text-white">{currentDest.name}</span>
              </div>
              <div className="flex justify-between text-slate-300">
                <span>Included Perks:</span>
                <span className="font-semibold text-emerald-300">Hotel/Camp + Transfers + Sightseeing</span>
              </div>
              <div className="flex justify-between text-slate-300">
                <span>Flexible Cancellation:</span>
                <span className="text-slate-200">Free up to 72hrs before trip</span>
              </div>
            </div>

            <div className="bg-slate-900/90 p-4 rounded-xl border border-slate-700/60 mb-5">
              <div className="text-xs text-slate-400 mb-1">Estimated Total Price</div>
              <div className="text-2xl sm:text-3xl font-black text-white flex items-baseline gap-2">
                ₹{estimatedTotalINR.toLocaleString('en-IN')}
                <span className="text-xs font-normal text-slate-400">
                  (₹{Math.round(estimatedTotalINR / guestCount).toLocaleString('en-IN')} / person)
                </span>
              </div>
            </div>

            <button
              onClick={() => onQuickBook(selectedDestId, guestCount)}
              className="w-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold py-3.5 px-6 rounded-xl transition-all shadow-lg hover:shadow-emerald-500/20 flex items-center justify-center gap-2 active:scale-98"
            >
              <span>Instant Reserve This Rate</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </div>

    </section>
  );
};
