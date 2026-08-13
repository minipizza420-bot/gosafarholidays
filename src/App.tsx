import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { DestinationsPage } from './pages/DestinationsPage';
import { PackagesPage } from './pages/PackagesPage';
import { GalleryPage } from './pages/GalleryPage';
import { BlogPage } from './pages/BlogPage';
import { AboutPage } from './pages/AboutPage';
import { DetailModal } from './components/DetailModal';
import { Destination, TourPackage } from './types';
import { openWhatsAppBooking } from './utils/whatsapp';
import { DESTINATIONS, TOUR_PACKAGES } from './data/mockData';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');

  // Modal state
  const [detailModalOpen, setDetailModalOpen] = useState(false);
  const [selectedDestination, setSelectedDestination] = useState<Destination | null>(null);
  const [selectedPackage, setSelectedPackage] = useState<TourPackage | null>(null);

  // Scroll to top when tab changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeTab]);

  const handleOpenBooking = (item?: { id?: string; title?: string; type?: 'destination' | 'package' | string }) => {
    if (item && item.id) {
      if (item.type === 'destination') {
        const dest = DESTINATIONS.find(d => d.id === item.id);
        openWhatsAppBooking({
          title: dest?.name || item.title,
          type: 'destination',
          region: dest?.region,
          startPriceINR: dest?.startPriceINR,
        });
        return;
      } else if (item.type === 'package') {
        const pkg = TOUR_PACKAGES.find(p => p.id === item.id);
        openWhatsAppBooking({
          title: pkg?.title || item.title,
          type: 'package',
          region: pkg?.region,
          duration: pkg?.duration,
          priceINR: pkg?.priceINR,
        });
        return;
      }
    }
    
    // Default or fallback
    openWhatsAppBooking(item ? { title: item.title, type: item.type } : undefined);
  };

  const handleSelectDestination = (dest: Destination) => {
    setSelectedDestination(dest);
    setSelectedPackage(null);
    setDetailModalOpen(true);
  };

  const handleSelectPackage = (pkg: TourPackage) => {
    setSelectedPackage(pkg);
    setSelectedDestination(null);
    setDetailModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans flex flex-col selection:bg-slate-900 selection:text-white antialiased">
      
      {/* Top Header Navigation */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenBooking={handleOpenBooking}
        onSelectDestination={handleSelectDestination}
        onSelectPackage={handleSelectPackage}
      />

      {/* Main View Router based on active tab */}
      <main className="flex-1">
        {activeTab === 'home' && (
          <HomePage
            onSelectDestination={handleSelectDestination}
            onSelectPackage={handleSelectPackage}
            onNavigateTab={setActiveTab}
            onOpenBooking={handleOpenBooking}
          />
        )}

        {activeTab === 'destinations' && (
          <DestinationsPage
            onSelectDestination={handleSelectDestination}
            onBookNow={handleOpenBooking}
          />
        )}

        {activeTab === 'packages' && (
          <PackagesPage
            onSelectPackage={handleSelectPackage}
            onBookNow={handleOpenBooking}
          />
        )}

        {activeTab === 'gallery' && <GalleryPage />}

        {activeTab === 'blog' && <BlogPage />}

        {activeTab === 'about' && <AboutPage />}
      </main>

      {/* Global Footer */}
      <Footer onNavClick={setActiveTab} />

      {/* Detail Modal */}
      <DetailModal
        isOpen={detailModalOpen}
        onClose={() => setDetailModalOpen(false)}
        destination={selectedDestination}
        tourPackage={selectedPackage}
        onBookNow={handleOpenBooking}
      />

    </div>
  );
}

