// Momentum Watches - Product Data
// Easy to manage - Add, Edit, or Remove products here

export interface WatchVariant {
  color: string;
  colorCode: string;
  image: string;
}

export interface Watch {
  id: number;
  name: string;
  category: string;
  price: number;
  originalPrice: number;
  discount: number;
  description: string;
  mainImage: string;
  variants: WatchVariant[];
  features: string[];
  bestseller: boolean;
}

export interface BrandInfo {
  name: string;
  tagline: string;
  description: string;
  phone: string;
  whatsappNumber: string;
  email: string;
  address: string;
  social: {
    instagram: string;
    tiktok: string;
    whatsapp: string;
  };
}

export interface Category {
  id: string;
  name: string;
}

export const brandInfo: BrandInfo = {
  name: "Momentum Watches",
  tagline: "Since 1987",
  description: "Premium timepieces crafted with precision and elegance",
  phone: "+92 300 1234567",
  whatsappNumber: "434OWJND2YZSAM1",
  email: "info@momentumwatches.com",
  address: "Lahore, Pakistan",
  social: {
    instagram: "https://www.instagram.com/reel/DP4eWw2DYLp/?igsh=dzV4bjNjMDJ6Nndr",
    tiktok: "https://www.tiktok.com/@momentumwatches26?_r=1&_t=ZS-94WEKGcBIRw",
    whatsapp: "https://wa.me/message/43OWJND2YZSAM1"
  }
};

export const categories: Category[] = [
  { id: "all", name: "All Watches" },
  { id: "men", name: "Men" },
  { id: "women", name: "Women" },
  { id: "smart", name: "Smart Watches" },
  { id: "couple", name: "Couple Sets" },
  { id: "bestseller", name: "Best Sellers" }
];

export const watches: Watch[] = [
  {
    id: 1,
    name: "As a example",
    category: "hijran",
    price: 12500,
    originalPrice: 15000,
    discount: 17,
    description: "Elegant gold-plated timepiece with genuine leather strap. Features precision quartz movement and water resistance up to 30m.",
    mainImage: "/images/watches/royal-gold-classic-gold.jpg",
    variants: [
      {
        color: "Gold",
        colorCode: "#D4AF37",
        image: "/images/watches/royal-gold-classic-gold.jpg"
      },
      {
        color: "Silver",
        colorCode: "#C0C0C0",
        image: "/images/watches/royal-gold-classic-silver.jpg"
      },
      {
        color: "Black",
        colorCode: "#1a1a1a",
        image: "/images/watches/royal-gold-classic-black.jpg"
      }
    ],
    features: ["Quartz Movement", "Water Resistant 30m", "Genuine Leather", "2 Year Warranty","Zain Mughal"],
    bestseller: true
  },
  {
    id: 2,
    name: "Sport Pro Chronograph",
    category: "men",
    price: 18900,
    originalPrice: 24900,
    discount: 24,
    description: "High-performance sports watch with chronograph functionality. Stainless steel case with silicone strap for active lifestyle.",
    mainImage: "/images/watches/sport-pro-chrono-black.jpg",
    variants: [
      {
        color: "Black",
        colorCode: "#1a1a1a",
        image: "/images/watches/sport-pro-chrono-black.jpg"
      },
      {
        color: "Blue",
        colorCode: "#1e3a5f",
        image: "/images/watches/sport-pro-chrono-blue.jpg"
      },
      {
        color: "Red",
        colorCode: "#8B0000",
        image: "/images/watches/sport-pro-chrono-red.jpg"
      }
    ],
    features: ["Chronograph", "Stopwatch", "Water Resistant 100m", "Stainless Steel"],
    bestseller: true
  },
  {
    id: 3,
    name: "Elegant Rose Gold",
    category: "women",
    price: 9800,
    originalPrice: 12500,
    discount: 22,
    description: "Delicate rose gold watch with crystal embellishments. Perfect for formal occasions and everyday elegance.",
    mainImage: "/images/watches/elegant-rose-rose.jpg",
    variants: [
      {
        color: "Rose Gold",
        colorCode: "#B76E79",
        image: "/images/watches/elegant-rose-rose.jpg"
      },
      {
        color: "Silver",
        colorCode: "#C0C0C0",
        image: "/images/watches/elegant-rose-silver.jpg"
      },
      {
        color: "Gold",
        colorCode: "#D4AF37",
        image: "/images/watches/elegant-rose-gold.jpg"
      }
    ],
    features: ["Crystal Dial", "Stainless Steel", "Water Resistant 30m", "Jewelry Clasp"],
    bestseller: false
  },
  {
    id: 4,
    name: "Diamond Luxe",
    category: "women",
    price: 15900,
    originalPrice: 19900,
    discount: 20,
    description: "Luxurious diamond-studded watch with mother of pearl dial. The ultimate statement piece for sophisticated women.",
    mainImage: "/images/watches/diamond-luxe-silver.jpg",
    variants: [
      {
        color: "Silver",
        colorCode: "#C0C0C0",
        image: "/images/watches/diamond-luxe-silver.jpg"
      },
      {
        color: "Gold",
        colorCode: "#D4AF37",
        image: "/images/watches/diamond-luxe-gold.jpg"
      }
    ],
    features: ["Genuine Diamonds", "Mother of Pearl", "Sapphire Crystal", "Premium Box"],
    bestseller: true
  },
  {
    id: 5,
    name: "Smart Fit Pro",
    category: "smart",
    price: 8500,
    originalPrice: 12000,
    discount: 29,
    description: "Advanced fitness tracking smartwatch with heart rate monitor, GPS, and 7-day battery life. Compatible with iOS and Android.",
    mainImage: "/images/watches/smart-fit-pro-black.jpg",
    variants: [
      {
        color: "Black",
        colorCode: "#1a1a1a",
        image: "/images/watches/smart-fit-pro-black.jpg"
      },
      {
        color: "Blue",
        colorCode: "#1e3a5f",
        image: "/images/watches/smart-fit-pro-blue.jpg"
      },
      {
        color: "Green",
        colorCode: "#0a4d2e",
        image: "/images/watches/smart-fit-pro-green.jpg"
      }
    ],
    features: ["Heart Rate Monitor", "GPS Tracking", "7-Day Battery", "Water Resistant 50m"],
    bestseller: true
  },
  {
    id: 6,
    name: "Classic Couple Set",
    category: "couple",
    price: 22000,
    originalPrice: 28000,
    discount: 21,
    description: "Matching his and hers timepieces in elegant gift box. Symbolize your timeless love with these coordinated watches.",
    mainImage: "/images/watches/couple-set-gold.jpg",
    variants: [
      {
        color: "Gold",
        colorCode: "#D4AF37",
        image: "/images/watches/couple-set-gold.jpg"
      },
      {
        color: "Silver",
        colorCode: "#C0C0C0",
        image: "/images/watches/couple-set-silver.jpg"
      },
      {
        color: "Rose Gold",
        colorCode: "#B76E79",
        image: "/images/watches/couple-set-rose.jpg"
      }
    ],
    features: ["Matching Pair", "Gift Box Included", "His & Hers Sizes", "5 Year Warranty"],
    bestseller: true
  },
  {
    id: 7,
    name: "Aviator Pilot",
    category: "men",
    price: 14500,
    originalPrice: 17500,
    discount: 17,
    description: "Inspired by aviation heritage, this pilot watch features large numerals, date function, and genuine leather strap.",
    mainImage: "/images/watches/aviator-pilot-brown.jpg",
    variants: [
      {
        color: "Brown",
        colorCode: "#8B4513",
        image: "/images/watches/aviator-pilot-brown.jpg"
      },
      {
        color: "Black",
        colorCode: "#1a1a1a",
        image: "/images/watches/aviator-pilot-black.jpg"
      }
    ],
    features: ["Date Function", "Large Numerals", "Genuine Leather", "Aviation Style"],
    bestseller: false
  },
  {
    id: 8,
    name: "Pearl Elegance",
    category: "women",
    price: 11200,
    originalPrice: 14000,
    discount: 20,
    description: "Delicate pearl-accented watch with slim profile. Perfect for both office wear and evening events.",
    mainImage: "/images/watches/pearl-elegance-white.jpg",
    variants: [
      {
        color: "White",
        colorCode: "#F5F5DC",
        image: "/images/watches/pearl-elegance-white.jpg"
      },
      {
        color: "Pink",
        colorCode: "#FFB6C1",
        image: "/images/watches/pearl-elegance-pink.jpg"
      }
    ],
    features: ["Genuine Pearls", "Slim Profile", "Stainless Steel", "Elegant Design"],
    bestseller: false
  },
  {
    id: 9,
    name: "Ultra Smart Watch",
    category: "smart",
    price: 15900,
    originalPrice: 22000,
    discount: 28,
    description: "Premium smartwatch with AMOLED display, blood oxygen monitoring, and 100+ sport modes. The ultimate fitness companion.",
    mainImage: "/images/watches/ultra-smart-black.jpg",
    variants: [
      {
        color: "Black",
        colorCode: "#1a1a1a",
        image: "/images/watches/ultra-smart-black.jpg"
      },
      {
        color: "Orange",
        colorCode: "#FF6600",
        image: "/images/watches/ultra-smart-orange.jpg"
      }
    ],
    features: ["AMOLED Display", "Blood Oxygen", "100+ Sports", "14-Day Battery"],
    bestseller: true
  },
  {
    id: 10,
    name: "Minimalist Slim",
    category: "men",
    price: 7500,
    originalPrice: 9500,
    discount: 21,
    description: "Ultra-slim minimalist design for the modern gentleman. Clean dial with no-nonsense functionality.",
    mainImage: "/images/watches/minimalist-slim-silver.jpg",
    variants: [
      {
        color: "Silver",
        colorCode: "#C0C0C0",
        image: "/images/watches/minimalist-slim-silver.jpg"
      },
      {
        color: "Black",
        colorCode: "#1a1a1a",
        image: "/images/watches/minimalist-slim-black.jpg"
      },
      {
        color: "Gold",
        colorCode: "#D4AF37",
        image: "/images/watches/minimalist-slim-gold.jpg"
      }
    ],
    features: ["Ultra Slim 6mm", "Minimal Design", "Mesh Band", "Japanese Movement"],
    bestseller: false
  },
  {
    id: 11,
    name: "Floral Charm",
    category: "women",
    price: 8900,
    originalPrice: 11000,
    discount: 19,
    description: "Beautiful floral-patterned dial with crystal accents. A feminine timepiece that captures nature's beauty.",
    mainImage: "/images/watches/floral-charm-rose.jpg",
    variants: [
      {
        color: "Rose Gold",
        colorCode: "#B76E79",
        image: "/images/watches/floral-charm-rose.jpg"
      },
      {
        color: "Silver",
        colorCode: "#C0C0C0",
        image: "/images/watches/floral-charm-silver.jpg"
      }
    ],
    features: ["Floral Dial", "Crystal Accents", "Leather Strap", "Gift Ready"],
    bestseller: false
  },
  {
    id: 12,
    name: "Royal Couple Edition",
    category: "couple",
    price: 28500,
    originalPrice: 35000,
    discount: 19,
    description: "Premium couple watch set with genuine leather straps and gold-plated cases. The perfect anniversary gift.",
    mainImage: "/images/watches/royal-couple-gold.jpg",
    variants: [
      {
        color: "Gold",
        colorCode: "#D4AF37",
        image: "/images/watches/royal-couple-gold.jpg"
      },
      {
        color: "Silver",
        colorCode: "#C0C0C0",
        image: "/images/watches/royal-couple-silver.jpg"
      }
    ],
    features: ["Gold Plated", "Genuine Leather", "Anniversary Box", "Engraving Available"],
    bestseller: true
  }
];

// Helper function to get WhatsApp link
export const getWhatsAppLink = (productName: string, price: number): string => {
  const message = `Hello Momentum Watches! I'm interested in purchasing:\n\n*Product:* ${productName}\n*Price:* PKR ${price.toLocaleString()}\n\nPlease provide more details.`;
  return `https://wa.me/message/43OWJND2YZSAM1?text=${encodeURIComponent(message)}`;
};

// Helper function to get filtered watches
export const getWatchesByCategory = (categoryId: string): Watch[] => {
  if (categoryId === "all") return watches;
  if (categoryId === "bestseller") return watches.filter(w => w.bestseller);
  return watches.filter(w => w.category === categoryId);
};

// Helper function to get watch by ID
export const getWatchById = (id: number): Watch | undefined => {
  return watches.find(w => w.id === id);
};
