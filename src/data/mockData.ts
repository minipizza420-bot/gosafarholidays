import { Destination, TourPackage, BlogPost, Review } from '../types';

export const HERO_DATA = {
  title: "Go Safar",
  suffix: "Holidays",
  tagline: "Explore incredible India with Go Safar Holidays! Customized tour packages, alpine treks, spiritual yatras, and hassle-free travel planning all in one place.",
  heroVideo: "/hero-video.mp4",
  fallbackVideo: "https://vjs.zencdn.net/v/oceans.mp4",
  posterImage: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1920&q=80"
};

export const STATS_DATA = [
  {
    icon: "Smile",
    value: "8k+",
    label: "Happy & Satisfied Travelers"
  },
  {
    icon: "Award",
    value: "5+ Yrs",
    label: "Trusted Industry Experience"
  },
  {
    icon: "MapPin",
    value: "20+",
    label: "Curated Indian Destinations"
  }
];

export const FEATURES_DATA = [
  {
    id: "local-guides",
    icon: "Users",
    title: "Expert Local Guides",
    description: "Our experienced local trip leaders craft seamless itineraries with insider tips you won't find anywhere else.",
    bgImage: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "all-inclusive-booking",
    icon: "CalendarCheck",
    title: "All-in-One Tour Packages",
    description: "Book complete packages including transfers, stays, meals, treks, and sightseeing hassle-free.",
    bgImage: "https://images.unsplash.com/photo-1597074866923-dc0589150358?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "support-247",
    icon: "Headphones",
    title: "24/7 Travel Assistance",
    description: "We are available round-the-clock before, during, and after your trip to ensure maximum peace of mind.",
    bgImage: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80"
  }
];

export const DESTINATIONS: Destination[] = [
  {
    id: "manali-kasol",
    name: "Manali Kasol",
    region: "Himachal Pradesh",
    islandGroup: "Luzon",
    badge: "5N / 6D",
    tagline: "Snow peaks, Parvati river, Old Manali cafes & Kasol vibes",
    rating: 4.9,
    reviewCount: 2400,
    startPriceINR: 5499,
    image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&w=1200&q=80"
    ],
    description: "Experience the magic of Himachal with snow-capped mountain views of Manali, Hadimba Temple, Solang Valley adventures, and peaceful Parvati valley vibes at Kasol.",
    highlights: ["Solang Valley sports", "Atal Tunnel & Sissu visit", "Kasol Parvati River walk", "Manikaran Sahib Hot Springs"],
    bestTimeToVisit: "Throughout the year (Best snow Dec-Feb, pleasant Mar-Jun)",
    popularActivities: ["Solang Paragliding", "Cafe Hopping in Old Manali", "Kasol Flea Market Walking", "Campfire Nights"],
    featured: true
  },
  {
    id: "manali",
    name: "Manali",
    region: "Himachal Pradesh",
    islandGroup: "Luzon",
    badge: "4N / 5D",
    tagline: "The valley of gods with snow mountains and pine forests",
    rating: 4.8,
    reviewCount: 1950,
    startPriceINR: 4999,
    image: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&w=1200&q=80"
    ],
    description: "Quick getaway to Manali covering Mall Road shopping, Hadimba Devi Temple, Vashisht Hot Water Springs, and snow activities in Solang Valley.",
    highlights: ["Hadimba Temple", "Solang Valley Snow Point", "Jogini Waterfalls Trek", "Mall Road Food Crawl"],
    bestTimeToVisit: "October to June",
    popularActivities: ["River Rafting in Beas", "Skiing", "Ziplining", "Old Manali Cafes"],
    featured: true
  },
  {
    id: "udaipur-mount-abu",
    name: "Udaipur Mount Abu",
    region: "Rajasthan",
    islandGroup: "Visayas",
    badge: "4N / 5D",
    tagline: "City of Lakes and Rajasthan's premier hill station",
    rating: 4.7,
    reviewCount: 1420,
    startPriceINR: 6999,
    image: "https://images.unsplash.com/photo-1615836245337-f5b9b2303f10?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1615836245337-f5b9b2303f10?auto=format&fit=crop&w=1200&q=80"
    ],
    description: "Royal getaway combining the magnificent lake palaces of Udaipur with cool breezes, Dilwara Jain temples, and Nakki Lake in Mount Abu.",
    highlights: ["Lake Pichola Boat Ride", "Udaipur City Palace", "Dilwara Temples Architecture", "Sunset Point Mount Abu"],
    bestTimeToVisit: "October to March",
    popularActivities: ["Sunset Boat Cruise", "Royal Palace Tour", "Nakki Lake Boating"],
    featured: true
  },
  {
    id: "jibhi-tirthan",
    name: "Jibhi Tirthan",
    region: "Himachal Pradesh",
    islandGroup: "Luzon",
    badge: "4N / 5D",
    tagline: "Unspoiled green valley, wooden cottages & Jalori Pass",
    rating: 4.9,
    reviewCount: 1100,
    startPriceINR: 5499,
    image: "https://images.unsplash.com/photo-1597074866923-dc0589150358?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1597074866923-dc0589150358?auto=format&fit=crop&w=1200&q=80"
    ],
    description: "Discover Himachal's best kept secret. Walk through wooden bridge streams, relax by Tirthan river, visit Jibhi Waterfall, and trek to Serolsar Lake via Jalori Pass.",
    highlights: ["Jibhi Waterfall & Hidden Pool", "Jalori Pass Trek", "Serolsar Lake Walk", "Chehni Kothi Fort"],
    bestTimeToVisit: "March to June & September to November",
    popularActivities: ["Trout Fishing", "Trekking", "Bonfire Nights", "Nature Walks"],
    featured: true
  },
  {
    id: "chopta-tungnath",
    name: "Chopta Tungnath",
    region: "Uttarakhand",
    islandGroup: "Luzon",
    badge: "4N / 5D",
    tagline: "Mini Switzerland of India & highest Shiva Temple",
    rating: 4.85,
    reviewCount: 1680,
    startPriceINR: 4999,
    image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1200&q=80"
    ],
    description: "Trek to Tungnath—the world's highest Lord Shiva temple—and ascend to Chandrashila Peak for a 360-degree view of Himalayan snow giants including Nanda Devi.",
    highlights: ["Chopta Bugyal Meadows", "Tungnath Temple Trek", "Chandrashila Summit View", "Deoriatal Lake Trek"],
    bestTimeToVisit: "April to June & September to November (Winter snow trek Dec-Feb)",
    popularActivities: ["Summit Trekking", "Himalayan Photography", "Star Gazing Camping"],
    featured: true
  },
  {
    id: "ujjain",
    name: "Ujjain",
    region: "Madhya Pradesh",
    islandGroup: "Mindanao",
    badge: "2N / 3D",
    tagline: "Holy Mahakaleshwar Jyotirlinga & Shipra River ghats",
    rating: 4.9,
    reviewCount: 2800,
    startPriceINR: 5499,
    image: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=1200&q=80"
    ],
    description: "Spiritual yatra to Ujjain for VIP Mahakaleshwar Bhasma Aarti darshan, Mahakal Lok Corridor, Kal Bhairav temple, and Shipra River Sandhya Aarti.",
    highlights: ["Mahakaleshwar Bhasma Aarti", "Mahakal Lok Corridor", "Kal Bhairav Temple", "Ram Ghat Aarti"],
    bestTimeToVisit: "October to March",
    popularActivities: ["Bhasma Aarti Darshan", "Ghat Evening Aarti", "Temple Corridor Exploration"],
    featured: true
  },
  {
    id: "rajasthan",
    name: "Rajasthan",
    region: "Rajasthan",
    islandGroup: "Visayas",
    badge: "10N / 11D",
    tagline: "Grand Royal Forts, Palaces, Desert Safaris & Lakes",
    rating: 4.9,
    reviewCount: 3100,
    startPriceINR: 14999,
    image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1200&q=80"
    ],
    description: "The ultimate royal Indian experience covering Pink City Jaipur, Sun City Jodhpur, Golden City Jaisalmer Thar desert safari, Udaipur lakes, and Pushkar.",
    highlights: ["Amber Fort Jaipur", "Mehrangarh Fort Jodhpur", "Sam Sand Dunes Safari", "Udaipur Lake Pichola"],
    bestTimeToVisit: "October to March",
    popularActivities: ["Desert Camel & Quad Safari", "Rajasthani Cultural Folk Dance", "Palace Heritage Tours"],
    featured: true
  },
  {
    id: "manali-kasol-shimla",
    name: "Manali Kasol Shimla",
    region: "Himachal Pradesh",
    islandGroup: "Luzon",
    badge: "6N / 7D",
    tagline: "The complete Himachal hill stations & valley tour",
    rating: 4.8,
    reviewCount: 1750,
    startPriceINR: 14999,
    image: "https://images.unsplash.com/photo-1588714477688-cf28a50e94f7?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1588714477688-cf28a50e94f7?auto=format&fit=crop&w=1200&q=80"
    ],
    description: "Grand Himachal holiday covering colonial Ridge & Kufri in Shimla, snow points in Manali, Atal Tunnel, and serene Parvati river walk in Kasol.",
    highlights: ["Shimla Mall Road & Ridge", "Kufri Adventure Park", "Manali Solang Valley", "Kasol Parvati River"],
    bestTimeToVisit: "October to June",
    popularActivities: ["Toy Train Ride", "Snow Sports", "Cafe Hopping"],
    featured: true
  },
  {
    id: "mcleodganj-triund",
    name: "Mcleodganj + Triund",
    region: "Himachal Pradesh",
    islandGroup: "Luzon",
    badge: "4N / 5D",
    tagline: "Little Lhasa, monastery peace & iconic Triund hilltop trek",
    rating: 4.75,
    reviewCount: 1320,
    startPriceINR: 5999,
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    gallery: ["https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80"],
    description: "Explore Tibetan culture in Dharamshala, visit His Holiness Dalai Lama Temple, Bhagsu Falls, and trek to Triund for starry night camping under Dhauladhar ranges.",
    highlights: ["Dalai Lama Temple", "Bhagsu Waterfall & Cafe", "Triund Top Trek & Camping", "Dharamkot Boho Cafes"],
    bestTimeToVisit: "March to June & September to December",
    popularActivities: ["Himalayan Trekking", "Tibetan Food Crawl", "Stargazing Camping"]
  },
  {
    id: "chakrata",
    name: "Chakrata",
    region: "Uttarakhand",
    islandGroup: "Luzon",
    badge: "3N / 4D",
    tagline: "Quiet cantonment hill station, Tiger Falls & pine woods",
    rating: 4.7,
    reviewCount: 890,
    startPriceINR: 5499,
    image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=800&q=80",
    gallery: ["https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1200&q=80"],
    description: "A tranquil hill station nestled between Yamuna and Tons rivers. Swim under Tiger Falls, explore ancient Budher Limestone Caves, and enjoy sunset at Chilmiri Neck.",
    highlights: ["Tiger Falls Swim & Trek", "Chilmiri Neck Sunset", "Budher Caves Exploration", "Kanasar Deodar Meadows"],
    bestTimeToVisit: "March to June & October to December",
    popularActivities: ["Cave Exploration", "Waterfall Trekking", "Nature Photography"]
  },
  {
    id: "jaisalmer",
    name: "Jaisalmer",
    region: "Rajasthan",
    islandGroup: "Visayas",
    badge: "4N / 5D",
    tagline: "The Golden City, living fort & Thar Desert luxury camping",
    rating: 4.85,
    reviewCount: 1650,
    startPriceINR: 8499,
    image: "https://images.unsplash.com/photo-1572445271230-a78b5944a659?auto=format&fit=crop&w=800&q=80",
    gallery: ["https://images.unsplash.com/photo-1572445271230-a78b5944a659?auto=format&fit=crop&w=1200&q=80"],
    description: "Step into Arabian Nights in Jaisalmer. Tour the golden sandstone fort, Patwon Ki Haveli, and stay in Swiss desert tents at Sam Sand Dunes with folk dance.",
    highlights: ["Golden Fort Walk", "Patwon Ki Haveli", "Sam Sand Dunes Camel Safari", "Desert Camp Folk Show"],
    bestTimeToVisit: "October to March",
    popularActivities: ["Quad Biking in Dunes", "Desert Parasailing", "Rajasthani Thali Dining"]
  },
  {
    id: "kedarnath",
    name: "Kedarnath",
    region: "Uttarakhand",
    islandGroup: "Luzon",
    badge: "4N / 5D",
    tagline: "Sacred Himalayan pilgrimage to Lord Shiva shrine",
    rating: 4.95,
    reviewCount: 4200,
    startPriceINR: 7999,
    image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=800&q=80",
    gallery: ["https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1200&q=80"],
    description: "Revered spiritual trek to Kedarnath Dham surrounded by majestic snow peaks. Includes Haridwar/Rishikesh pickup, Sonprayag transfer, trek guide, and stays.",
    highlights: ["Kedarnath Temple Darshan", "Bhairavnath Temple Walk", "Gaurikund Hot Springs", "Rudraprayag Sangam"],
    bestTimeToVisit: "May to June & September to November",
    popularActivities: ["Pilgrimage Trekking", "Morning Aarti", "Himalayan Photography"]
  },
  {
    id: "char-dham-yatra",
    name: "Char Dham Yatra",
    region: "Uttarakhand",
    islandGroup: "Luzon",
    badge: "10N / 11D",
    tagline: "Yamunotri, Gangotri, Kedarnath & Badrinath sacred yatra",
    rating: 4.9,
    reviewCount: 3500,
    startPriceINR: 19999,
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80",
    gallery: ["https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80"],
    description: "Complete sacred Char Dham pilgrimage tour covering Yamunotri, Gangotri, Kedarnath Dham, and Badrinath Dham with comfortable transport, hot meals, and VIP queue pass support.",
    highlights: ["Yamunotri & Gangotri holy dips", "Kedarnath Dham trek & darshan", "Badrinath Temple & Mana Village", "Rishikesh Ganga Aarti"],
    bestTimeToVisit: "May to June & September to October",
    popularActivities: ["Temple Worship", "Holy Dip in Sacred Rivers", "Mana Last Indian Village Tour"]
  },
  {
    id: "do-dham-yatra",
    name: "Do Dham Yatra",
    region: "Uttarakhand",
    islandGroup: "Luzon",
    badge: "6N / 7D",
    tagline: "Sacred Kedarnath & Badrinath yatra tour package",
    rating: 4.88,
    reviewCount: 2100,
    startPriceINR: 13999,
    image: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=800&q=80",
    gallery: ["https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=1200&q=80"],
    description: "Special spiritual itinerary for Kedarnath and Badrinath Dham. Includes transport, hotel accommodations, guide support, and visits to Panch Prayag sangams.",
    highlights: ["Kedarnath Temple Darshan", "Badrinath Temple & Tapt Kund", "Devprayag & Rudraprayag Sangam", "Mana Village"],
    bestTimeToVisit: "May to June & September to November",
    popularActivities: ["Temple Worship", "Spiritual Sangam Sightseeing"]
  },
  {
    id: "valley-of-flowers",
    name: "Valley of Flowers",
    region: "Uttarakhand",
    islandGroup: "Luzon",
    badge: "5N / 6D",
    tagline: "UNESCO World Heritage carpeted blooming alpine flowers",
    rating: 4.9,
    reviewCount: 1250,
    startPriceINR: 7999,
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80",
    gallery: ["https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80"],
    description: "Trek through a botanical paradise in Chamoli Uttarakhand. See hundreds of wild alpine flower species, glaciers, and visit sacred Hemkund Sahib Lake (Ex Rishikesh).",
    highlights: ["Valley of Flowers Alpine Meadows", "Hemkund Sahib Glacial Lake", "Ghangaria Base Camp", "Govindghat Riverside"],
    bestTimeToVisit: "July to September (Peak bloom July-Aug)",
    popularActivities: ["Botanical Trekking", "Himalayan Photography", "Holy Hemkund Visit"]
  },
  {
    id: "yulla-kanda",
    name: "Yulla Kanda",
    region: "Himachal Pradesh",
    islandGroup: "Luzon",
    badge: "3N / 4D",
    tagline: "High-altitude holy lake & Krishna temple in Kinnaur",
    rating: 4.8,
    reviewCount: 640,
    startPriceINR: 5999,
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    gallery: ["https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80"],
    description: "An offbeat sacred trek in Kinnaur valley to Yulla Kanda lake, home to the world's highest Lord Krishna temple located inside the pristine lake.",
    highlights: ["Yulla Kanda Lake Trek", "World's Highest Krishna Temple", "Kinnauri Cultural Villages", "Campfire under stars"],
    bestTimeToVisit: "May to October",
    popularActivities: ["Offbeat Trekking", "Lake Camping", "Culture Interaction"]
  },
  {
    id: "nainital-kanchi-dham-mukteshwar",
    name: "Nainital Kanchi Dham Mukteshwar",
    region: "Uttarakhand",
    islandGroup: "Luzon",
    badge: "4N / 5D",
    tagline: "Naini Lake, Neem Karoli Baba Ashram & Mukteshwar peak",
    rating: 4.85,
    reviewCount: 2200,
    startPriceINR: 5999,
    image: "https://images.unsplash.com/photo-1588714477688-cf28a50e94f7?auto=format&fit=crop&w=800&q=80",
    gallery: ["https://images.unsplash.com/photo-1588714477688-cf28a50e94f7?auto=format&fit=crop&w=1200&q=80"],
    description: "Rejuvenating Kumaon getaway covering Naini Lake boating, Neem Karoli Baba Kanchi Dham Ashram darshan, and 180-degree snow peaks in Mukteshwar.",
    highlights: ["Nainital Lake Boating & Mall Road", "Kanchi Dham Ashram Visit", "Mukteshwar Dham & Chauli Ki Jali", "Bhimtal & Sattal Lake Tour"],
    bestTimeToVisit: "Throughout the year",
    popularActivities: ["Ashram Meditation", "Lake Boating", "Sunset Viewing"]
  },
  {
    id: "spiti-valley-full-circuit",
    name: "Spiti Valley Full Circuit",
    region: "Himachal Pradesh",
    islandGroup: "Luzon",
    badge: "8N / 9D",
    tagline: "The Cold Desert, Key Monastery, Hikkim & Chandratal Lake",
    rating: 4.95,
    reviewCount: 1850,
    startPriceINR: 17999,
    image: "https://images.unsplash.com/photo-1597074866923-dc0589150358?auto=format&fit=crop&w=800&q=80",
    gallery: ["https://images.unsplash.com/photo-1597074866923-dc0589150358?auto=format&fit=crop&w=1200&q=80"],
    description: "Ultimate Himalayan road trip through Shimla, Kalpa, Nako, Kaza, Key Monastery, Hikkim (world's highest post office), Langza, and Chandratal Moon Lake camping.",
    highlights: ["Key Monastery & Dhankar", "Hikkim Postcard Sending", "Langza Fossil Village", "Chandratal Lake Camping"],
    bestTimeToVisit: "May to October",
    popularActivities: ["Himalayan SUV Road Trip", "Postcard Sending", "Stargazing at 14,000 ft"]
  },
  {
    id: "madhyamaheshwar-trek",
    name: "Madhyamaheshwar Trek",
    region: "Uttarakhand",
    islandGroup: "Luzon",
    badge: "4N / 5D",
    tagline: "Sacred Panch Kedar shrine nestled in lush bugyals",
    rating: 4.82,
    reviewCount: 510,
    startPriceINR: 7999,
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80",
    gallery: ["https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80"],
    description: "Scenic trek in Kedarnath Wildlife Sanctuary to the 2nd Kedar Lord Shiva temple at Madhyamaheshwar with views of Chaukhamba peaks.",
    highlights: ["Madhyamaheshwar Temple", "Budha Madhyamaheshwar Peak View", "Uniana & Ransi River Villages", "Chaukhamba Reflection"],
    bestTimeToVisit: "May to June & September to November",
    popularActivities: ["Pilgrimage Trekking", "Himalayan Sunrise Watching"]
  },
  {
    id: "kashmir",
    name: "Kashmir",
    region: "Jammu & Kashmir",
    islandGroup: "Luzon",
    badge: "6N / 7D",
    tagline: "Paradise on Earth - Dal Lake Shikara, Gulmarg & Pahalgam",
    rating: 4.92,
    reviewCount: 3900,
    startPriceINR: 12999,
    image: "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=800&q=80",
    gallery: ["https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=1200&q=80"],
    description: "Experience Paradise on Earth. Stay in a luxury Dal Lake Houseboat, ride Gulmarg Gondola over snow fields, visit Betaab Valley in Pahalgam, and Sonamarg glaciers.",
    highlights: ["Srinagar Houseboat Stay", "Dal Lake Sunset Shikara", "Gulmarg Gondola Ride", "Pahalgam Betaab Valley"],
    bestTimeToVisit: "Throughout the year (Tulips in Apr, Green Jul-Sep, Snow Dec-Feb)",
    popularActivities: ["Shikara Ride", "Gondola Cable Car", "Saffron Shopping"]
  },
  {
    id: "kasol-kheerganga-trek",
    name: "Kasol Kheerganga Trek",
    region: "Himachal Pradesh",
    islandGroup: "Luzon",
    badge: "4N / 5D",
    tagline: "Parvati Valley, natural hot springs & hilltop camping",
    rating: 4.8,
    reviewCount: 2300,
    startPriceINR: 6499,
    image: "https://images.unsplash.com/photo-1597074866923-dc0589150358?auto=format&fit=crop&w=800&q=80",
    gallery: ["https://images.unsplash.com/photo-1597074866923-dc0589150358?auto=format&fit=crop&w=1200&q=80"],
    description: "Trek along roaring waterfalls through Parvati Valley to Kheerganga top. Take a soothing dip in the natural hot water spring (Parvati Kund) surrounded by snow mountains.",
    highlights: ["Barshaini to Kheerganga Trek", "Natural Hot Spring Bath", "Starlit Dome Camping", "Kasol Market Crawl"],
    bestTimeToVisit: "April to June & September to December",
    popularActivities: ["Waterfall Trekking", "Hot Spring Bathing", "Bonfire Music Nights"]
  },
  {
    id: "hampta-pass-trek",
    name: "Hampta Pass Trek",
    region: "Himachal Pradesh",
    islandGroup: "Luzon",
    badge: "4N / 5D",
    tagline: "Crossover trek from lush Kullu valley to Spiti desert (Ex Manali)",
    rating: 4.9,
    reviewCount: 1400,
    startPriceINR: 9999,
    image: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&w=800&q=80",
    gallery: ["https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&w=1200&q=80"],
    description: "One of India's most dramatic crossover treks. Start from green valley of Manali, cross 14,000 ft Hampta Pass snow line, and drop into cold desert Lahaul & Chandratal Lake.",
    highlights: ["Hampta Pass Summit (14,010 ft)", "Shea Goru Snow Campsite", "Chandratal Moon Lake Visit", "Jobra Pine Forest"],
    bestTimeToVisit: "June to October",
    popularActivities: ["Pass Crossover Trekking", "Snow Walking", "Glacial Lake Camping"]
  },
  {
    id: "mussoorie-dehradun",
    name: "Mussoorie Dehradun",
    region: "Uttarakhand",
    islandGroup: "Luzon",
    badge: "4N / 5D",
    tagline: "Queen of Hills Mussoorie & Robber's Cave Dehradun",
    rating: 4.7,
    reviewCount: 1800,
    startPriceINR: 5499,
    image: "https://images.unsplash.com/photo-1588714477688-cf28a50e94f7?auto=format&fit=crop&w=800&q=80",
    gallery: ["https://images.unsplash.com/photo-1588714477688-cf28a50e94f7?auto=format&fit=crop&w=1200&q=80"],
    description: "Charming hill station holiday covering Kempty Falls, Mall Road, Gun Hill cable car in Mussoorie, and Robber's Cave (Guchhupani) in Dehradun.",
    highlights: ["Kempty Falls & Lal Tibba", "Gun Hill Ropeway", "Robber's Cave Dehradun", "Sahastradhara Springs"],
    bestTimeToVisit: "Throughout the year",
    popularActivities: ["Ropeway Cable Car", "Bakery Tasting", "Nature Walk"]
  },
  {
    id: "goa-to-goa",
    name: "Goa to Goa",
    region: "Goa",
    islandGroup: "Mindanao",
    badge: "3N / 4D",
    tagline: "Sun, sand, water sports, Dudhsagar falls & party cruises",
    rating: 4.75,
    reviewCount: 2900,
    startPriceINR: 6499,
    image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=800&q=80",
    gallery: ["https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1200&q=80"],
    description: "Fun filled Goa trip with resort stay, North Goa beach hopping (Baga, Calangute, Anjuna), South Goa churches, Mandovi river sunset cruise, and water sports.",
    highlights: ["Baga & Calangute Beach", "Mandovi River Cruise", "Aguada Fort Sunset", "Water Sports Combo"],
    bestTimeToVisit: "October to May",
    popularActivities: ["Parasailing & Jet Skiing", "Beach Shack Dining", "Heritage Church Walk"]
  },
  {
    id: "delhi-to-goa",
    name: "Delhi to Goa",
    region: "Goa",
    islandGroup: "Mindanao",
    badge: "5N / 6D",
    tagline: "Complete Goa flight/train holiday package from Delhi",
    rating: 4.8,
    reviewCount: 2100,
    startPriceINR: 14999,
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
    gallery: ["https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80"],
    description: "Hassle-free package for travellers from Delhi/NCR. Includes transfers, 3-star beach hotel stay, daily breakfast, North & South Goa tours, and Dudhsagar waterfall jeep safari.",
    highlights: ["Dudhsagar Waterfall Jeep Safari", "Spice Plantation Lunch", "Anjuna & Vagator Sunset", "Water Sports"],
    bestTimeToVisit: "October to April",
    popularActivities: ["Jeep Safari", "Casino Night Cruise", "Beach Parties"]
  },
  {
    id: "rishikesh",
    name: "Rishikesh",
    region: "Uttarakhand",
    islandGroup: "Luzon",
    badge: "3N / 4D",
    tagline: "Yoga capital, white water rafting & Triveni Ghat Aarti",
    rating: 4.88,
    reviewCount: 3100,
    startPriceINR: 4499,
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80",
    gallery: ["https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80"],
    description: "Adventure and spiritual weekend in Rishikesh. Experience 16 KM Ganga River rafting, cliff jumping, Laxman Jhula, Beatles Ashram, and evening Triveni Ghat Aarti.",
    highlights: ["16 KM Ganga River Rafting", "Triveni Ghat Evening Aarti", "Beatles Ashram Visit", "Riverside Camping & Bonfire"],
    bestTimeToVisit: "September to June",
    popularActivities: ["White Water Rafting", "Bungee Jumping", "Riverside Camping"]
  },
  {
    id: "kerala",
    name: "Kerala",
    region: "Kerala",
    islandGroup: "Mindanao",
    badge: "5N / 6D",
    tagline: "God's Own Country - Munnar Tea Hills & Alleppey Houseboat",
    rating: 4.9,
    reviewCount: 2600,
    startPriceINR: 18999,
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=800&q=80",
    gallery: ["https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1200&q=80"],
    description: "Discover God's Own Country. Explore mist-clad Munnar tea gardens, Periyar wildlife sanctuary in Thekkady, Alleppey backwater houseboat overnight stay, and Kovalam beach.",
    highlights: ["Munnar Tea Estate Tour", "Alleppey Houseboat Cruise with Meals", "Periyar Elephant Sanctuary", "Kovalam Beach Sunset"],
    bestTimeToVisit: "September to March",
    popularActivities: ["Backwater Houseboat Stay", "Ayurvedic Spa Massage", "Kathakali Cultural Show"]
  },
  {
    id: "meghalaya",
    name: "Meghalaya",
    region: "Meghalaya",
    islandGroup: "Mindanao",
    badge: "5N / 6D",
    tagline: "Abode of Clouds - Living Root Bridges & Dawki Crystal River",
    rating: 4.92,
    reviewCount: 1550,
    startPriceINR: 15999,
    image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=800&q=80",
    gallery: ["https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1200&q=80"],
    description: "Travel to the Abode of Clouds in Northeast India. Walk over double decker Living Root Bridges, boat on glass-like transparent Dawki River, and see Nohkalikai Waterfalls in Cherrapunji.",
    highlights: ["Dawki Umngot Transparent River", "Cherrapunji Waterfalls & Caves", "Double Decker Living Root Bridge", "Mawlynnong Cleanest Village"],
    bestTimeToVisit: "October to April (Monsoon waterfalls Jul-Sep)",
    popularActivities: ["Boating on Transparent River", "Root Bridge Trekking", "Caving"]
  },
  {
    id: "leh-ladakh",
    name: "Leh Ladakh",
    region: "Ladakh",
    islandGroup: "Luzon",
    badge: "12N / 13D",
    tagline: "The Land of High Passes, Pangong Lake & Khardung La",
    rating: 4.98,
    reviewCount: 3800,
    startPriceINR: 34999,
    image: "https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?auto=format&fit=crop&w=800&q=80",
    gallery: ["https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?auto=format&fit=crop&w=1200&q=80"],
    description: "The ultimate Leh Ladakh expedition. Cross world's highest motorable passes (Khardung La, Umling La), explore Nubra Valley camel dunes, blue Pangong Tso Lake, Tso Moriri, and Hanle dark sky observatory.",
    highlights: ["Pangong Tso Blue Lake", "Khardung La Pass (18,380 ft)", "Nubra Valley Hunder Sand Dunes", "Hanle Dark Sky Stargazing"],
    bestTimeToVisit: "May to September",
    popularActivities: ["High Altitude Bike & SUV Expedition", "Double Hump Camel Safari", "Milky Way Stargazing"]
  }
];

export const TOUR_PACKAGES: TourPackage[] = DESTINATIONS.map((dest) => ({
  id: `${dest.id}-package`,
  title: `${dest.name} Tour Package`,
  subtitle: dest.tagline,
  duration: dest.badge.includes('N') ? dest.badge : '4 Days / 3 Nights',
  durationDays: parseInt(dest.badge.split('N')[0]) || 4,
  destinationId: dest.id,
  destinationName: dest.name,
  region: dest.region,
  priceINR: dest.startPriceINR,
  originalPriceINR: Math.round(dest.startPriceINR * 1.2),
  image: dest.image,
  description: dest.description,
  itinerary: [
    { day: 1, title: `Arrival in ${dest.name} & Check-in`, detail: `Warm welcome upon arrival. Transfer to hotel/resort. Evening at leisure exploring local surroundings and market.` },
    { day: 2, title: `Sightseeing & Signature Highlights`, detail: `Full day guided tour covering top attractions including ${dest.highlights.slice(0, 2).join(' and ')}.` },
    { day: 3, title: `Adventure & Local Experiences`, detail: `Engage in popular activities like ${dest.popularActivities.slice(0, 2).join(' and ')}.` },
    { day: 4, title: `Departure & Cherished Memories`, detail: `Morning breakfast, souvenir shopping, and return transfer with unforgettable memories.` }
  ],
  inclusions: [
    "Comfortable hotel / resort accommodation",
    "Daily breakfast and dinner",
    "Private AC vehicle for all transfers & sightseeing",
    "Driver allowance, toll taxes, parking fees",
    "Local guide & itinerary assistance",
    "24/7 Go Safar Holidays trip support"
  ],
  exclusions: [
    "Airfare / Train tickets to starting point",
    "Personal expenses (laundry, shopping, tips)",
    "Entry tickets to monuments not mentioned in inclusions"
  ],
  featured: dest.featured || false
}));

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "himachal-first-timers-guide",
    title: "First-Timer's Guide to Himachal Pradesh: Manali vs Kasol vs Shimla",
    slug: "himachal-first-timers-guide",
    category: "Travel Guide",
    readTime: "5 min read",
    date: "Aug 10, 2026",
    author: {
      name: "Rohan Sharma",
      role: "Himalayan Travel Specialist",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80"
    },
    image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=800&q=80",
    summary: "Planning your first trip to Himachal? Here is a complete comparison of snow adventure in Manali, riverside chill in Kasol, and colonial charm in Shimla.",
    content: [
      "Himachal Pradesh is a wonderland of snow peaks, pine forests, and alpine rivers.",
      "If you are planning your first trip, choosing between Manali, Kasol, and Shimla depends on what experience you seek.",
      "Manali is perfect for snow sports in Solang Valley, cafe hopping in Old Manali, and driving through the famous Atal Tunnel into Lahaul valley.",
      "Kasol in Parvati Valley offers laid-back riverside cafes, trek base camps like Kheerganga, and peaceful nature walks.",
      "Shimla offers majestic colonial architecture, Mall Road shopping, and fun family visits to Kufri.",
      "Our Recommendation: Book our combined 6N/7D Manali-Kasol-Shimla package to enjoy all three without rushing!"
    ],
    tags: ["Himachal", "Manali", "Kasol", "Shimla", "Mountains"]
  },
  {
    id: "rajasthan-royal-food-guide",
    title: "Top 10 Authentic Rajasthani Dishes & Royal Dining Spots",
    slug: "rajasthan-royal-food-guide",
    category: "Culinary & Culture",
    readTime: "4 min read",
    date: "Jul 28, 2026",
    author: {
      name: "Priya Rathore",
      role: "Culture & Culinary Guide",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80"
    },
    image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=800&q=80",
    summary: "From crispy Dal Baati Churma in Jaipur to royal Laal Maas in Udaipur and Ghevar sweets, experience the legendary tastes of Rajasthan.",
    content: [
      "Rajasthani cuisine is rich with ghee, aromatic spices, and royal heritage.",
      "Don't miss authentic Dal Baati Churma with Panchkuta curry when visiting Jaipur.",
      "In Jodhpur, try Mirchi Vada and Pyaaz Kachori right outside the Mehrangarh Fort gate.",
      "For desert lovers, Ghevar and Mawa Kachori in Jaisalmer are an absolute treat."
    ],
    tags: ["Rajasthan", "Food Tour", "Culture", "Jaipur"]
  },
  {
    id: "budget-travel-kashmir",
    title: "How to Experience Kashmir Paradise on a Budget",
    slug: "budget-travel-kashmir",
    category: "Budget Tips",
    readTime: "5 min read",
    date: "Jul 15, 2026",
    author: {
      name: "Aamir Khan",
      role: "Kashmir Tour Manager",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80"
    },
    image: "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=800&q=80",
    summary: "Visiting Kashmir doesn't have to be expensive. Here are smart tips on booking shared Shikaras, houseboats, and Gulmarg Gondola tickets.",
    content: [
      "Kashmir offers unmatched beauty that fits every budget.",
      "1. Shared Cabs: Use pre-booked shared vehicles between Srinagar, Gulmarg, and Pahalgam to cut transport costs by 50%.",
      "2. Houseboat Stay: Book a night on Nigeen Lake or Dal Lake with breakfast included.",
      "3. Book Gondola Early: Always book Gulmarg Gondola Phase 1 & 2 tickets online ahead of time to avoid last minute agent markups."
    ],
    tags: ["Kashmir", "Srinagar", "Budget Travel", "Gulmarg"]
  }
];

export const REVIEWS: Review[] = [
  {
    id: "rev-1",
    author: "Rahul & Sneha Mehta",
    location: "Delhi, India",
    rating: 5,
    date: "July 2026",
    comment: "Go Safar Holidays planned our 6-day Manali Kasol trip brilliantly! Driver was very punctual, hotel views were breathtaking, and everything was hassle-free.",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80",
    tripTaken: "Manali Kasol Package"
  },
  {
    id: "rev-2",
    author: "Vikram Malhotra",
    location: "Mumbai, India",
    rating: 5,
    date: "June 2026",
    comment: "Kedarnath Yatra with Go Safar Holidays was a life-changing spiritual journey. Trek assistance, Sonprayag stay, and priority queue management were 10/10!",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
    tripTaken: "Kedarnath Yatra"
  },
  {
    id: "rev-3",
    author: "Ananya Mukherjee",
    location: "Kolkata, India",
    rating: 5,
    date: "May 2026",
    comment: "Our 10-day Rajasthan royal tour with Go Safar Holidays was unforgettable! Desert camping in Jaisalmer and Lake Pichola boat ride were surreal.",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80",
    tripTaken: "Rajasthan Tour"
  }
];

export const TEAM_MEMBERS = [
  {
    name: "Rajesh Kumar",
    role: "Founder & Chief Expedition Director",
    location: "New Delhi / Himachal",
    bio: "Passionate about mountain tourism and sustainable Himalayan travel with over 12 years leading tours across India.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80"
  },
  {
    name: "Pooja Sharma",
    role: "Head of Customized Tour Operations",
    location: "Uttarakhand / Rajasthan",
    bio: "Specialist in family holidays, honeymoon packages, and royal heritage circuits across North and South India.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80"
  },
  {
    name: "Amit Patel",
    role: "Senior Trekking & Adventure Manager",
    location: "Manali / Leh Ladakh",
    bio: "Veteran mountaineer who has crossed high altitude passes in Ladakh, Spiti Valley, and Uttarakhand.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80"
  }
];
