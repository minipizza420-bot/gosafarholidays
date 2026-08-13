export interface BookingItemDetails {
  id?: string;
  title?: string;
  type?: 'destination' | 'package' | string;
  region?: string;
  duration?: string;
  priceINR?: number;
  startPriceINR?: number;
}

export function openWhatsAppBooking(item?: BookingItemDetails) {
  const whatsappNumber = '916232373630';
  
  let message = '';
  
  if (item && item.title) {
    const itemTitle = item.title;
    const itemType = item.type === 'destination' ? 'Destination' : item.type === 'package' ? 'Tour Package' : 'Trip';
    const location = item.region ? `📌 Location: ${item.region}\n` : '';
    const duration = item.duration ? `⏱️ Duration: ${item.duration}\n` : '';
    const price = item.priceINR || item.startPriceINR;
    const priceText = price ? `💰 Starting Price: ₹${price.toLocaleString('en-IN')}\n` : '';

    message = `🌴 *NEW TRAVEL INQUIRY* 🌴\n\n` +
      `📍 *Selected ${itemType}:* ${itemTitle}\n` +
      `${location}` +
      `${duration}` +
      `${priceText}` +
      `\nHello! I am interested in booking this ${itemType.toLowerCase()}. Please share further details, availability, and payment process. Thank you!`;
  } else {
    message = `Hello! I would like to inquire about booking a travel package or destination with Go Safar Holidays. Please assist me!`;
  }

  const encodedMsg = encodeURIComponent(message);
  const waUrl = `https://wa.me/${whatsappNumber}?text=${encodedMsg}`;
  window.open(waUrl, '_blank');
}
