import React, { useState } from 'react';
import { X, Calendar, Users, CheckCircle2, ShieldCheck, Ticket, Sparkles, MapPin, ArrowRight } from 'lucide-react';
import { DESTINATIONS, TOUR_PACKAGES } from '../data/mockData';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialItem?: { id: string; title: string; type: 'destination' | 'package' };
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  initialItem,
}) => {
  if (!isOpen) return null;

  // Selected item state
  const [selectedType, setSelectedType] = useState<'destination' | 'package'>(
    initialItem?.type || 'destination'
  );
  const [selectedId, setSelectedId] = useState<string>(
    initialItem?.id || (selectedType === 'destination' ? DESTINATIONS[0].id : TOUR_PACKAGES[0].id)
  );

  const [guests, setGuests] = useState<number>(2);
  const [startDate, setStartDate] = useState<string>('2026-09-15');
  const [selectedAddOns, setSelectedAddOns] = useState<string[]>(['airport-transfer']);
  
  // Contact info
  const [contactName, setContactName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactPhone, setContactPhone] = useState('');
  const [specialRequests, setSpecialRequests] = useState('');

  // Confirmation state
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [bookingRefCode, setBookingRefCode] = useState('');

  // Calculate base price
  let basePrice = 0;
  let title = '';

  if (selectedType === 'destination') {
    const d = DESTINATIONS.find(item => item.id === selectedId) || DESTINATIONS[0];
    basePrice = d.startPriceINR;
    title = d.name;
  } else {
    const p = TOUR_PACKAGES.find(item => item.id === selectedId) || TOUR_PACKAGES[0];
    basePrice = p.priceINR;
    title = p.title;
  }

  const addOnOptions = [
    { id: 'airport-transfer', label: 'Roundtrip Airport Van Transfer', price: 1800 },
    { id: 'private-guide', label: 'Dedicated Private Local Tour Guide', price: 3000 },
    { id: 'seafood-feast', label: 'Authentic Seafood Boodle Fight Feast', price: 2200 },
    { id: 'drone-photo', label: 'Professional Drone Photography & Video', price: 3500 },
  ];

  const addOnsTotal = selectedAddOns.reduce((sum, addOnId) => {
    const option = addOnOptions.find(o => o.id === addOnId);
    return sum + (option ? option.price : 0);
  }, 0);

  const totalAmountINR = (basePrice * guests) + addOnsTotal;

  const toggleAddOn = (id: string) => {
    if (selectedAddOns.includes(id)) {
      setSelectedAddOns(selectedAddOns.filter(item => item !== id));
    } else {
      setSelectedAddOns([...selectedAddOns, id]);
    }
  };

  const handleSubmitBooking = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactName || !contactEmail || !contactPhone) return;

    const randomCode = 'WNDR-' + Math.floor(100000 + Math.random() * 900000);
    setBookingRefCode(randomCode);

    // Format selected add-ons text
    const chosenAddOnsText = selectedAddOns.length > 0
      ? selectedAddOns.map(id => {
          const opt = addOnOptions.find(o => o.id === id);
          return opt ? `  • ${opt.label} (+₹${opt.price.toLocaleString('en-IN')})` : '';
        }).filter(Boolean).join('\n')
      : '  • None';

    // Construct detailed WhatsApp message
    const message = `🌴 *NEW TRAVEL BOOKING REQUEST* 🌴

📍 *Selected Trip:* ${title} (${selectedType === 'destination' ? 'Destination' : 'Tour Package'})
📅 *Travel Start Date:* ${startDate}
👥 *Number of Guests:* ${guests} ${guests === 1 ? 'Guest' : 'Guests'}

✨ *Selected Add-Ons:*
${chosenAddOnsText}

👤 *Lead Guest Information:*
• Name: ${contactName}
• Email: ${contactEmail}
• Phone: ${contactPhone}
${specialRequests.trim() ? `• Special Requests: ${specialRequests}` : ''}

💰 *Total Estimated Fare:* ₹${totalAmountINR.toLocaleString('en-IN')}

Ref Code: ${randomCode}

Hello! I would like to confirm my booking with these details. Please assist me.`;

    const whatsappNumber = '916232373630';
    const waUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    // Open WhatsApp in a new window/tab
    window.open(waUrl, '_blank');

    setIsSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative border border-slate-100">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 text-slate-400 hover:text-slate-800 bg-slate-100 hover:bg-slate-200 rounded-full transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSubmitted ? (
          <div className="p-6 sm:p-8">
            <div className="mb-6">
              <span className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200/60 mb-2">
                <Sparkles className="w-3.5 h-3.5 text-emerald-600" /> Go Safar Holidays Direct Booking
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Reserve Your Indian Holiday Experience
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Lock in your rates with zero booking fees and free cancellation options.
              </p>
            </div>

            <form onSubmit={handleSubmitBooking} className="space-y-6">
              
              {/* Type Switcher */}
              <div className="flex bg-slate-100 p-1 rounded-xl">
                <button
                  type="button"
                  onClick={() => {
                    setSelectedType('destination');
                    setSelectedId(DESTINATIONS[0].id);
                  }}
                  className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all ${
                    selectedType === 'destination'
                      ? 'bg-white text-slate-900 shadow-sm'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  By Destination
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setSelectedType('package');
                    setSelectedId(TOUR_PACKAGES[0].id);
                  }}
                  className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all ${
                    selectedType === 'package'
                      ? 'bg-white text-slate-900 shadow-sm'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  By Tour Package
                </button>
              </div>

              {/* Selection Dropdown */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1.5">
                  Select {selectedType === 'destination' ? 'Destination' : 'Package'}
                </label>
                <select
                  value={selectedId}
                  onChange={e => setSelectedId(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 text-slate-900 text-sm rounded-xl px-4 py-3 focus:bg-white focus:ring-2 focus:ring-slate-900 focus:outline-none"
                >
                  {selectedType === 'destination'
                    ? DESTINATIONS.map(d => (
                        <option key={d.id} value={d.id}>
                          {d.name} ({d.region}) — Starts at ₹{d.startPriceINR.toLocaleString('en-IN')} / person
                        </option>
                      ))
                    : TOUR_PACKAGES.map(p => (
                        <option key={p.id} value={p.id}>
                          {p.title} ({p.duration}) — ₹{p.priceINR.toLocaleString('en-IN')} / person
                        </option>
                      ))}
                </select>
              </div>

              {/* Dates & Guest Count */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1.5 flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-slate-500" /> Start Date
                  </label>
                  <input
                    type="date"
                    value={startDate}
                    onChange={e => setStartDate(e.target.value)}
                    required
                    className="w-full bg-slate-50 border border-slate-200 text-slate-900 text-sm rounded-xl px-4 py-2.5 focus:bg-white focus:ring-2 focus:ring-slate-900 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1.5 flex items-center gap-1">
                    <Users className="w-3.5 h-3.5 text-slate-500" /> Number of Guests
                  </label>
                  <div className="flex items-center gap-3 bg-slate-50 border border-slate-200 rounded-xl px-3 py-1.5">
                    <button
                      type="button"
                      onClick={() => setGuests(Math.max(1, guests - 1))}
                      className="w-8 h-8 rounded-lg bg-white border border-slate-200 text-slate-800 font-bold hover:bg-slate-100"
                    >
                      -
                    </button>
                    <span className="flex-1 text-center font-bold text-sm text-slate-900">
                      {guests} {guests === 1 ? 'Guest' : 'Guests'}
                    </span>
                    <button
                      type="button"
                      onClick={() => setGuests(guests + 1)}
                      className="w-8 h-8 rounded-lg bg-white border border-slate-200 text-slate-800 font-bold hover:bg-slate-100"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>

              {/* Add-ons */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-2">
                  Recommended Add-Ons
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {addOnOptions.map(addon => {
                    const isChecked = selectedAddOns.includes(addon.id);
                    return (
                      <div
                        key={addon.id}
                        onClick={() => toggleAddOn(addon.id)}
                        className={`p-3 rounded-xl border text-xs font-semibold cursor-pointer transition-all flex items-center justify-between ${
                          isChecked
                            ? 'bg-emerald-50/80 border-emerald-500 text-emerald-950'
                            : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                        }`}
                      >
                        <span>{addon.label}</span>
                        <span className="text-slate-900 font-bold ml-2">
                          +₹{addon.price.toLocaleString('en-IN')}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Contact Details */}
              <div className="border-t border-slate-100 pt-4 space-y-3">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Lead Guest Contact Information
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input
                    type="text"
                    placeholder="Full Name"
                    value={contactName}
                    onChange={e => setContactName(e.target.value)}
                    required
                    className="w-full bg-slate-50 border border-slate-200 text-slate-900 text-sm rounded-xl px-4 py-2.5 focus:bg-white focus:ring-2 focus:ring-slate-900 focus:outline-none"
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    value={contactEmail}
                    onChange={e => setContactEmail(e.target.value)}
                    required
                    className="w-full bg-slate-50 border border-slate-200 text-slate-900 text-sm rounded-xl px-4 py-2.5 focus:bg-white focus:ring-2 focus:ring-slate-900 focus:outline-none"
                  />
                </div>
                <input
                  type="tel"
                  placeholder="Mobile Phone (+91 9XX XXX XXXX)"
                  value={contactPhone}
                  onChange={e => setContactPhone(e.target.value)}
                  required
                  className="w-full bg-slate-50 border border-slate-200 text-slate-900 text-sm rounded-xl px-4 py-2.5 focus:bg-white focus:ring-2 focus:ring-slate-900 focus:outline-none"
                />
                <textarea
                  placeholder="Special Requests or Dietary Requirements (Optional)"
                  value={specialRequests}
                  onChange={e => setSpecialRequests(e.target.value)}
                  rows={2}
                  className="w-full bg-slate-50 border border-slate-200 text-slate-900 text-sm rounded-xl px-4 py-2 focus:bg-white focus:ring-2 focus:ring-slate-900 focus:outline-none resize-none"
                />
              </div>

              {/* Total Calculation & Submit */}
              <div className="bg-slate-900 text-white p-5 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <div className="text-xs text-slate-400 font-medium">Total Calculated Fare</div>
                  <div className="text-2xl font-black text-white">
                    ₹{totalAmountINR.toLocaleString('en-IN')}
                  </div>
                  <div className="text-[11px] text-slate-400">Includes all taxes, fees, and permits</div>
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold px-8 py-3.5 rounded-xl transition-all shadow-lg hover:shadow-emerald-500/20 flex items-center justify-center gap-2"
                >
                  <span>Book Now on WhatsApp</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </form>
          </div>
        ) : (
          /* Confirmation Ticket View */
          <div className="p-8 text-center space-y-6">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-sm">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div>
              <span className="text-xs font-bold text-emerald-600 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full uppercase tracking-wider">
                Booking Confirmed
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mt-2">
                Pack Your Bags! You're Going to {title}!
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 mt-1 max-w-md mx-auto">
                We've sent your official booking e-voucher and detailed itinerary to <strong className="text-slate-800">{contactEmail}</strong>.
              </p>
            </div>

            {/* Simulated Voucher Card */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 text-left space-y-3 relative overflow-hidden">
              <div className="flex justify-between items-center border-b border-slate-200 pb-3">
                <span className="text-xs font-bold uppercase text-slate-400">e-Voucher Ref</span>
                <span className="text-sm font-mono font-bold text-slate-900 bg-slate-200 px-2.5 py-1 rounded">
                  {bookingRefCode}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-2 text-xs">
                <div>
                  <span className="text-slate-400 block">Lead Traveler:</span>
                  <span className="font-bold text-slate-800">{contactName}</span>
                </div>
                <div>
                  <span className="text-slate-400 block">Travel Date:</span>
                  <span className="font-bold text-slate-800">{startDate}</span>
                </div>
                <div>
                  <span className="text-slate-400 block">Guests:</span>
                  <span className="font-bold text-slate-800">{guests} Persons</span>
                </div>
                <div>
                  <span className="text-slate-400 block">Paid Amount:</span>
                  <span className="font-bold text-emerald-600">₹{totalAmountINR.toLocaleString('en-IN')}</span>
                </div>
              </div>

              <div className="text-[11px] text-slate-500 bg-white p-3 rounded-xl border border-slate-200/80 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>Your dedicated 24/7 travel assistant will contact you via WhatsApp/Viber 48 hours prior to arrival.</span>
              </div>
            </div>

            <button
              onClick={onClose}
              className="bg-slate-900 hover:bg-slate-800 text-white font-bold px-8 py-3 rounded-full text-sm transition-all"
            >
              Done & Close
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
