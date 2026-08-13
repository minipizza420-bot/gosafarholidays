export interface Destination {
  id: string;
  name: string;
  region: string;
  islandGroup: 'Luzon' | 'Visayas' | 'Mindanao';
  badge: string;
  tagline: string;
  rating: number;
  reviewCount: number;
  startPriceINR: number;
  image: string;
  gallery: string[];
  description: string;
  highlights: string[];
  bestTimeToVisit: string;
  popularActivities: string[];
  featured?: boolean;
}

export interface TourPackage {
  id: string;
  title: string;
  subtitle: string;
  duration: string;
  durationDays: number;
  destinationId: string;
  destinationName: string;
  region: string;
  priceINR: number;
  originalPriceINR?: number;
  image: string;
  description: string;
  itinerary: { day: number; title: string; detail: string }[];
  inclusions: string[];
  exclusions: string[];
  featured?: boolean;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  category: string;
  readTime: string;
  date: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  image: string;
  summary: string;
  content: string[];
  tags: string[];
}

export interface Review {
  id: string;
  author: string;
  location: string;
  rating: number;
  date: string;
  comment: string;
  avatar: string;
  tripTaken: string;
}

export interface BookingFormData {
  destinationOrPackageId: string;
  title: string;
  type: 'destination' | 'package';
  guests: number;
  startDate: string;
  endDate: string;
  addOns: string[];
  contactName: string;
  contactEmail: string;
  contactPhone: string;
  specialRequests: string;
  totalAmountINR: number;
}
