import { Product } from './types';

export const MOCK_PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Airwalk Velocity Elite",
    category: "Running",
    price: 1890,
    image: "/images/111.jpg",
    description: "Designed for the marathon runner. Features ultra-lightweight foam and responsive energy return.",
    isNew: true,
    sizes: [7, 8, 8.5, 9, 9.5, 10, 11]
  },
  {
    id: 2,
    name: "Urban Drifter X",
    category: "Lifestyle",
    price: 1450,
    image: "/images/2.jpg",
    description: "Streetwear aesthetic meets all-day comfort. The perfect daily driver for the city explorer.",
    isNew: true,
    sizes: [6, 7, 8, 9, 10]
  },
  {
    id: 3,
    name: "Court Legacy Low",
    category: "Tennis",
    price: 1200,
    image: "/images/3.jpg",
    description: "Vintage vibes with modern durability. Leather upper with suede accents.",
    sizes: [8, 9, 10, 11, 12]
  },
  {
    id: 4,
    name: "Summit Hiker",
    category: "Outdoor",
    price: 2100,
    image: "/images/4.jpg",
    description: "Waterproof, rugged, and ready for any trail. Vibram soles ensure maximum grip.",
    sizes: [9, 9.5, 10, 10.5, 11]
  },
  {
    id: 5,
    name: "Sprint Racer",
    category: "Running",
    price: 1600,
    image: "/images/5.jpg",
    description: "Minimalist design for maximum speed. Breathable mesh upper keeps you cool.",
    sizes: [7, 8, 9, 10]
  },
  {
    id: 6,
    name: "Classic Loafer",
    category: "Formal",
    price: 2500,
    image: "/images/6.jpg",
    description: "Hand-stitched leather. The epitome of elegance for formal occasions.",
    sizes: [8, 9, 10, 11]
  },
  {
    id: 7,
    name: "Street Runner",
    category: "Lifestyle",
    price: 1750,
    image: "/images/7.jpg",
    description: "Bold design meets comfort. Perfect for urban adventures.",
    sizes: [7, 8, 9, 10, 11]
  },
  {
    id: 8,
    name: "Performance Pro",
    category: "Running",
    price: 1950,
    image: "/images/8.png",
    description: "Professional grade running shoe with advanced cushioning technology.",
    sizes: [8, 9, 10, 11]
  },
  {
    id: 9,
    name: "City Walker",
    category: "Lifestyle",
    price: 1350,
    image: "/images/9.jpg",
    description: "Comfortable all-day wear for the modern urbanite.",
    sizes: [7, 8, 9, 10]
  }
];

export const CATEGORIES = ["All", "Running", "Lifestyle", "Outdoor", "Formal"];