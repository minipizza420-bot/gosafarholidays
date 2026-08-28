import React from 'react';
import { Phone, Building2 } from 'lucide-react';

export const AboutPage: React.FC = () => {
  return (
    <div className="pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto animate-in fade-in duration-300">
      <div className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-12 shadow-sm text-center space-y-6">
        <div className="w-16 h-16 bg-slate-100 text-slate-900 rounded-2xl flex items-center justify-center mx-auto">
          <Building2 className="w-8 h-8" />
        </div>

        <div className="space-y-2">
          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 uppercase tracking-tight">
            Go Safar Holidays
          </h1>
          <p className="text-sm text-slate-500 font-medium">
            Accredited Indian Travel & Tour Services
          </p>
        </div>

        <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://wa.me/916232373630"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-6 py-3.5 rounded-full text-sm transition-all shadow-md"
          >
            <Phone className="w-4 h-4 text-white" />
            <span>WhatsApp Booking: +91 6232373630</span>
          </a>
        </div>
      </div>
    </div>
  );
};

