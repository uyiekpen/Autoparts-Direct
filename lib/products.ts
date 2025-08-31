export interface Product {
  id: number
  name: string
  description: string
  fullDescription: string
  price: string
  basePrice: number
  maxPrice: number
  images: string[]
  category: string
  inStock: boolean
  rating: number
  reviews: number
  popular?: boolean
  essential?: boolean
  specifications: Record<string, string>
  features: string[]
  compatibility: string[]
  tags: string[]
}

export const products: Product[] = [
  {
    id: 1,
    name: "Premium Brake Pads",
    description: "High-performance ceramic brake pads for superior stopping power",
    fullDescription:
      "Premium quality ceramic brake pads engineered for optimal stopping power and durability. Compatible with most car models including Toyota, Honda, Nissan, and more. These brake pads feature advanced friction material that provides consistent performance in all weather conditions, reduced brake dust, and quiet operation.",
    price: "₦8,000 - ₦25,000",
    basePrice: 8000,
    maxPrice: 25000,
    images: ["/brake-pads-automotive.png", "/brake-pads-automotive.png", "/brake-pads-automotive.png"],
    category: "Braking System",
    inStock: true,
    rating: 4.8,
    reviews: 156,
    popular: true,
    specifications: {
      Material: "Ceramic composite",
      Compatibility: "Most car models",
      Warranty: "18 months",
      Installation: "Professional recommended",
      "Temperature Range": "-40°C to 400°C",
    },
    features: [
      "Superior stopping power",
      "Low dust ceramic formula",
      "Quiet operation",
      "Extended lifespan",
      "All-weather performance",
    ],
    compatibility: ["Toyota", "Honda", "Nissan", "Hyundai", "Kia"],
    tags: ["brake", "safety", "ceramic", "premium"],
  },
  {
    id: 2,
    name: "Synthetic Engine Oil",
    description: "Full synthetic motor oil for maximum engine protection",
    fullDescription:
      "Advanced full synthetic motor oil engineered with premium base oils and cutting-edge additives. Provides superior engine protection, improved fuel economy, and extended drain intervals. Meets or exceeds all major industry specifications.",
    price: "₦3,500 - ₦12,000",
    basePrice: 3500,
    maxPrice: 12000,
    images: ["/engine-oil-bottle.png", "/engine-oil-bottle.png", "/engine-oil-bottle.png"],
    category: "Engine",
    inStock: true,
    rating: 4.7,
    reviews: 203,
    specifications: {
      Viscosity: "5W-30, 10W-40",
      Type: "Full Synthetic",
      Volume: "4L, 5L",
      "API Rating": "SN/CF",
      "Temperature Range": "-35°C to 150°C",
    },
    features: [
      "Enhanced engine protection",
      "Improved fuel economy",
      "Extended drain intervals",
      "All-weather performance",
      "Reduced engine wear",
    ],
    compatibility: ["All gasoline engines", "Turbocharged engines", "High-mileage vehicles"],
    tags: ["oil", "synthetic", "engine", "protection"],
  },
  {
    id: 3,
    name: "High-Flow Air Filter",
    description: "Performance air filter for improved engine breathing",
    fullDescription:
      "High-flow performance air filter designed to increase airflow while providing superior filtration. Washable and reusable design offers long-term value and environmental benefits.",
    price: "₦2,000 - ₦8,000",
    basePrice: 2000,
    maxPrice: 8000,
    images: ["/car-air-filter.png", "/car-air-filter.png", "/car-air-filter.png"],
    category: "Engine",
    inStock: true,
    rating: 4.5,
    reviews: 89,
    specifications: {
      Material: "Cotton gauze",
      Filtration: "99.2% efficiency",
      Airflow: "+15% over stock",
      Washable: "Yes",
      Warranty: "Lifetime",
    },
    features: [
      "Increased horsepower",
      "Better acceleration",
      "Washable & reusable",
      "Superior filtration",
      "Easy installation",
    ],
    compatibility: ["Most car models", "Trucks", "SUVs"],
    tags: ["filter", "performance", "reusable", "airflow"],
  },
  {
    id: 4,
    name: "Iridium Spark Plugs",
    description: "Long-lasting iridium spark plugs for optimal ignition",
    fullDescription:
      "Premium iridium spark plugs engineered for maximum performance and longevity. Features ultra-fine iridium center electrode for improved ignitability and longer service life.",
    price: "₦1,500 - ₦5,000",
    basePrice: 1500,
    maxPrice: 5000,
    images: ["/spark-plugs-automotive.png", "/spark-plugs-automotive.png", "/spark-plugs-automotive.png"],
    category: "Ignition",
    inStock: true,
    rating: 4.9,
    reviews: 312,
    essential: true,
    specifications: {
      Electrode: "Iridium",
      Gap: "0.8-1.1mm",
      Thread: "14mm",
      "Service Life": "100,000 km",
      "Heat Range": "6-8",
    },
    features: [
      "Extended service life",
      "Improved fuel efficiency",
      "Better cold starts",
      "Reduced emissions",
      "Consistent performance",
    ],
    compatibility: ["Most gasoline engines", "High-performance vehicles"],
    tags: ["spark plug", "iridium", "ignition", "performance"],
  },
  {
    id: 5,
    name: "AGM Car Battery",
    description: "Maintenance-free AGM battery with superior performance",
    fullDescription:
      "Advanced AGM (Absorbed Glass Mat) battery technology provides superior performance, longer life, and maintenance-free operation. Perfect for modern vehicles with high electrical demands.",
    price: "₦15,000 - ₦45,000",
    basePrice: 15000,
    maxPrice: 45000,
    images: ["/car-battery-12v.png", "/car-battery-12v.png", "/car-battery-12v.png"],
    category: "Electrical",
    inStock: true,
    rating: 4.6,
    reviews: 178,
    essential: true,
    specifications: {
      Voltage: "12V",
      Capacity: "45-100Ah",
      Type: "AGM",
      Warranty: "3 years",
      CCA: "400-800A",
    },
    features: [
      "Maintenance-free",
      "Vibration resistant",
      "Deep cycle capability",
      "Fast charging",
      "Long service life",
    ],
    compatibility: ["All 12V vehicles", "Start-stop systems", "High-end audio systems"],
    tags: ["battery", "AGM", "maintenance-free", "reliable"],
  },
  {
    id: 6,
    name: "All-Season Tires",
    description: "Premium all-season tires for year-round performance",
    fullDescription:
      "High-quality all-season tires engineered for optimal performance in all weather conditions. Advanced tread compound and design provide excellent grip, handling, and durability.",
    price: "₦25,000 - ₦80,000",
    basePrice: 25000,
    maxPrice: 80000,
    images: ["/car-tire-wheel.png", "/car-tire-wheel.png", "/car-tire-wheel.png"],
    category: "Wheels & Tires",
    inStock: true,
    rating: 4.4,
    reviews: 267,
    specifications: {
      "Size Range": '14"-20"',
      "Load Index": "91-110",
      "Speed Rating": "H-V",
      "Tread Life": "80,000 km",
      Warranty: "5 years",
    },
    features: [
      "All-season performance",
      "Enhanced wet traction",
      "Quiet ride comfort",
      "Long tread life",
      "Fuel efficient",
    ],
    compatibility: ["Sedans", "SUVs", "Crossovers", "Light trucks"],
    tags: ["tires", "all-season", "performance", "durable"],
  },
]

export function getProductById(id: number): Product | undefined {
  return products.find((product) => product.id === id)
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter((product) => product.category.toLowerCase().includes(category.toLowerCase()))
}

export function searchProducts(query: string): Product[] {
  const searchTerm = query.toLowerCase()
  return products.filter(
    (product) =>
      product.name.toLowerCase().includes(searchTerm) ||
      product.description.toLowerCase().includes(searchTerm) ||
      product.category.toLowerCase().includes(searchTerm) ||
      product.tags.some((tag) => tag.toLowerCase().includes(searchTerm)),
  )
}
