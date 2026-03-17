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
    name: "Rolex Daytona",
    category: "Men",
    price: 8499,
    originalPrice: 10000,
    discount: 17,
    description: "Elegant timepiece with genuine Oyster strap. Features precision quartz movement and water resistance up to 38m.",
    mainImage: "/images/watches/data:image/jpeg;base64,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.jpg",
    variants: [
      {
        color: "Blue Sea",
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
