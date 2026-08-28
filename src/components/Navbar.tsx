import React, { useState, useEffect, useRef } from 'react';
import { Search, Menu, X, Compass, MapPin, Package, ArrowRight, PhoneCall } from 'lucide-react';
import { DESTINATIONS, TOUR_PACKAGES } from '../data/mockData';
import { Destination, TourPackage } from '../types';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onOpenBooking: (item?: { id: string; title: string; type: 'destination' | 'package' }) => void;
  onSelectDestination: (dest: Destination) => void;
  onSelectPackage: (pkg: TourPackage) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  onOpenBooking,
  onSelectDestination,
  onSelectPackage,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
        setIsSearching(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const filteredDestinations = searchQuery.trim()
    ? DESTINATIONS.filter(
        d =>
          d.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          d.region.toLowerCase().includes(searchQuery.toLowerCase()) ||
          d.badge.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  const filteredPackages = searchQuery.trim()
    ? TOUR_PACKAGES.filter(
        p =>
          p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.destinationName.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'destinations', label: 'Destinations' },
    { id: 'packages', label: 'Packages' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'about', label: 'About Us' },
  ];

  const handleNavClick = (id: string) => {
    setActiveTab(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-3' : 'bg-white py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          
          {/* Logo Brand - Small logo icon next to text */}
          <div className="flex items-center gap-2.5 cursor-pointer" onClick={() => handleNavClick('home')}>
            <img
              src="/logooooo.png"
              alt="Go Safar Holidays Logo"
              className="h-10 w-10 sm:h-11 sm:w-11 object-contain"
            />
            <span className="text-xl sm:text-2xl font-black tracking-tight text-slate-900 uppercase">
              Go Safar Holidays
            </span>
          </div>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-sm font-medium text-slate-700">
            {navLinks.map(link => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`transition-colors relative py-1 hover:text-slate-900 ${
                  activeTab === link.id ? 'text-slate-900 font-semibold' : 'text-slate-600'
                }`}
              >
                {link.label}
                {activeTab === link.id && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-slate-900 rounded-full" />
                )}
              </button>
            ))}
          </nav>

          {/* Search Bar & Book Now Button */}
          <div className="hidden sm:flex items-center gap-3 relative" ref={searchRef}>
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={e => {
                  setSearchQuery(e.target.value);
                  setIsSearching(true);
                }}
                onFocus={() => setIsSearching(true)}
                placeholder="Search for a place, city, or destination..."
                className="w-64 lg:w-72 pl-4 pr-10 py-2 text-xs sm:text-sm bg-slate-100 hover:bg-slate-200/80 focus:bg-white focus:ring-2 focus:ring-slate-900 focus:outline-none rounded-full transition-all text-slate-800 border border-slate-200/60"
              />
              <Search className="w-4 h-4 absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400" />

              {/* Live Search Results Popover */}
              {isSearching && searchQuery.trim().length > 0 && (
                <div className="absolute top-full mt-2 right-0 w-80 sm:w-96 bg-white rounded-2xl shadow-2xl border border-slate-100 p-3 z-50 max-h-96 overflow-y-auto">
                  <div className="text-xs font-semibold uppercase text-slate-400 px-3 py-1 mb-1">
                    Destinations
                  </div>
                  {filteredDestinations.length > 0 ? (
                    filteredDestinations.map(dest => (
                      <div
                        key={dest.id}
                        onClick={() => {
                          onSelectDestination(dest);
                          setIsSearching(false);
                          setSearchQuery('');
                        }}
                        className="flex items-center gap-3 p-2 hover:bg-slate-50 rounded-xl cursor-pointer transition-colors"
                      >
                        <img
                          src={dest.image}
                          alt={dest.name}
                          className="w-12 h-12 rounded-lg object-cover"
                        />
                        <div className="flex-1 min-w-0">
                          <div className="text-sm font-semibold text-slate-900 truncate">
                            {dest.name}
                          </div>
                          <div className="text-xs text-slate-500 flex items-center gap-1">
                            <MapPin className="w-3 h-3 text-slate-400" />
                            {dest.region}
                          </div>
                        </div>
                        <span className="text-xs font-bold text-slate-800 bg-slate-100 px-2 py-1 rounded-md">
                          ₹{dest.startPriceINR.toLocaleString('en-IN')}
                        </span>
                      </div>
                    ))
                  ) : (
                    <div className="text-xs text-slate-400 px-3 py-2">
                      No matching destinations found
                    </div>
                  )}

                  <div className="text-xs font-semibold uppercase text-slate-400 px-3 py-1 mt-3 mb-1 border-t border-slate-100 pt-2">
                    Tour Packages
                  </div>
                  {filteredPackages.length > 0 ? (
                    filteredPackages.map(pkg => (
                      <div
                        key={pkg.id}
                        onClick={() => {
                          onSelectPackage(pkg);
                          setIsSearching(false);
                          setSearchQuery('');
                        }}
                        className="flex items-center gap-3 p-2 hover:bg-slate-50 rounded-xl cursor-pointer transition-colors"
                      >
                        <img
                          src={pkg.image}
                          alt={pkg.title}
                          className="w-12 h-12 rounded-lg object-cover"
                        />
                        <div className="flex-1 min-w-0">
                          <div className="text-sm font-semibold text-slate-900 truncate">
                            {pkg.title}
                          </div>
                          <div className="text-xs text-slate-500">{pkg.duration}</div>
                        </div>
                        <span className="text-xs font-bold text-slate-800 bg-slate-100 px-2 py-1 rounded-md">
                          ₹{pkg.priceINR.toLocaleString('en-IN')}
                        </span>
                      </div>
                    ))
                  ) : (
                    <div className="text-xs text-slate-400 px-3 py-2">
                      No matching tour packages found
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Book Now Button */}
            <button
              onClick={() => onOpenBooking()}
              className="bg-[#202b3c] hover:bg-[#131b27] text-white px-5 py-2 text-xs sm:text-sm font-medium rounded-full transition-all shadow-sm hover:shadow-md active:scale-95 whitespace-nowrap"
            >
              Book now
            </button>
          </div>

          {/* Mobile Right Controls - Hamburger */}
          <div className="flex items-center gap-2 sm:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-slate-900 hover:bg-slate-100 rounded-full transition-colors"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu / Sidebar */}
      {mobileMenuOpen && (
        <div className="sm:hidden border-t border-slate-100 bg-white px-4 pt-3 pb-6 shadow-xl animate-in slide-in-from-top duration-200">
          <div className="mb-4 relative">
            <input
              type="text"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              placeholder="Search destinations, tours..."
              className="w-full pl-4 pr-10 py-2.5 text-sm bg-slate-100 rounded-xl focus:outline-none border border-slate-200"
            />
            <Search className="w-4 h-4 absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
          </div>

          <div className="flex flex-col gap-2">
            {navLinks.map(link => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`flex items-center justify-between px-4 py-3 rounded-xl text-left text-sm font-semibold transition-colors ${
                  activeTab === link.id
                    ? 'bg-slate-900 text-white'
                    : 'text-slate-700 hover:bg-slate-100'
                }`}
              >
                <span>{link.label}</span>
                <ArrowRight className="w-4 h-4 opacity-70" />
              </button>
            ))}
          </div>

          {/* Book Now Button in Mobile Sidebar */}
          <div className="mt-4 pt-3 border-t border-slate-100">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full bg-[#202b3c] hover:bg-[#131b27] text-white font-bold py-3 rounded-xl text-sm transition-all shadow-md flex items-center justify-center gap-2"
            >
              Book Now
            </button>
          </div>

          <div className="mt-4 pt-3 border-t border-slate-100 flex flex-col gap-1.5 text-xs text-slate-500">
            <span className="flex items-center gap-1">
              <PhoneCall className="w-3.5 h-3.5 text-emerald-600" /> WhatsApp: +91 6232373630
            </span>
          </div>
        </div>
      )}
    </header>
  );
};
