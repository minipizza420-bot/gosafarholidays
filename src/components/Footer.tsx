import React from 'react';
import { Compass, Mail, Phone, MapPin, Instagram, Facebook, Heart } from 'lucide-react';

interface FooterProps {
  onNavClick: (tab: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavClick }) => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2 cursor-pointer" onClick={() => onNavClick('home')}>
              <span className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight">
                Go Safar Holidays
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              Discover breathtaking destinations across India with customized tour packages, alpine treks, spiritual yatras, and hassle-free travel support.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://www.instagram.com/gosafar.holidays?igsh=MTcxN3UzeDVoNWt0cQ=="
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-slate-800 hover:bg-emerald-500 hover:text-slate-950 flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://www.facebook.com/share/14jzrcBdTCk/"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-slate-800 hover:bg-emerald-500 hover:text-slate-950 flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Explore
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <button onClick={() => onNavClick('home')} className="hover:text-white transition-colors">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => onNavClick('destinations')} className="hover:text-white transition-colors">
                  Top Destinations
                </button>
              </li>
              <li>
                <button onClick={() => onNavClick('packages')} className="hover:text-white transition-colors">
                  Tour Packages
                </button>
              </li>
              <li>
                <button onClick={() => onNavClick('gallery')} className="hover:text-white transition-colors">
                  Photo Gallery
                </button>
              </li>
              <li>
                <button onClick={() => onNavClick('about')} className="hover:text-white transition-colors">
                  About Go Safar Holidays
                </button>
              </li>
            </ul>
          </div>

          {/* Destinations Quick Nav */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Top Regions
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-400">
              <li>Himachal Pradesh (Manali, Kasol, Spiti)</li>
              <li>Uttarakhand (Kedarnath, Chopta, Rishikesh)</li>
              <li>Rajasthan (Udaipur, Jaisalmer, Jaipur)</li>
              <li>Jammu & Kashmir (Srinagar, Gulmarg)</li>
              <li>Ladakh (Leh, Pangong Lake)</li>
              <li>Goa & Kerala Backwaters</li>
            </ul>
          </div>

          {/* Contact & Support */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              24/7 Support HQ
            </h4>
            <div className="space-y-3 text-xs sm:text-sm text-slate-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                <span>Go Safar Holidays Head Office, India</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Helpline: +91 7049468433</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>WhatsApp: +91 6232373630</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>gosafarholidaysofficial@gmail.com</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} Go Safar Holidays • All Rights Reserved. Accredited Indian Travel & Tour Agency.</p>
          <p>
            Made by{' '}
            <a
              href="https://www.ventoratech.tech/"
              target="_blank"
              rel="noreferrer"
              className="text-emerald-400 hover:text-emerald-300 font-semibold underline transition-colors"
            >
              ventotech.tech
            </a>
          </p>
        </div>

      </div>
    </footer>
  );
};
