"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Search } from "lucide-react";
import Link from "next/link";
import Header from "@/components/layout/header";
import { useAuth } from "@/hooks/use-auth";

const products = [
  {
    id: 1,
    name: "Brake Pads",
    description: "Front & rear brake pads for all car models",
    price: "₦8,000 - ₦25,000",
    image: "/brake-pads-automotive.png",
    popular: true,
    category: "Braking System",
    inStock: true,
  },
  {
    id: 2,
    name: "Engine Oil",
    description: "Premium motor oil for all engine types",
    price: "₦3,500 - ₦12,000",
    image: "/engine-oil-bottle.png",
    category: "Engine",
    inStock: true,
  },
  {
    id: 3,
    name: "Air Filter",
    description: "Engine air filters for better performance",
    price: "₦2,000 - ₦8,000",
    image: "/car-air-filter.png",
    category: "Engine",
    inStock: false,
  },
  {
    id: 4,
    name: "Spark Plugs",
    description: "High-quality ignition spark plugs",
    price: "₦1,500 - ₦5,000",
    image: "/spark-plugs-automotive.png",
    category: "Ignition",
    inStock: true,
  },
  {
    id: 5,
    name: "Car Battery",
    description: "12V automotive batteries, all sizes",
    price: "₦15,000 - ₦45,000",
    image: "/car-battery-12v.png",
    essential: true,
    category: "Electrical",
    inStock: true,
  },
  {
    id: 6,
    name: "Car Tires",
    description: "Premium tires for all vehicle types",
    price: "₦25,000 - ₦80,000",
    image: "/car-tire-wheel.png",
    category: "Wheels & Tires",
    inStock: true,
  },
  {
    id: 7,
    name: "Alternator",
    description: "Electrical charging system components",
    price: "₦20,000 - ₦60,000",
    image: "/car-alternator.png",
    category: "Electrical",
    inStock: true,
  },
  {
    id: 8,
    name: "Radiator",
    description: "Engine cooling system radiators",
    price: "₦18,000 - ₦55,000",
    image: "/car-radiator-cooling.png",
    category: "Cooling System",
    inStock: false,
  },
];

const SearchResults = () => {
  const params = useParams();
  const query = params.query as string;
  const decodedQuery = decodeURIComponent(query || "");

  const [results, setResults] = useState<typeof products>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const { user, loading, login, isAuthenticated } = useAuth();

  const handleJoinWaitlist = () => {
    setShowAuthModal(true);
  };

  useEffect(() => {
    if (decodedQuery) {
      setIsLoading(true);

      setTimeout(() => {
        const filteredProducts = products.filter(
          (product) =>
            product.name.toLowerCase().includes(decodedQuery.toLowerCase()) ||
            product.category
              .toLowerCase()
              .includes(decodedQuery.toLowerCase()) ||
            product.description
              .toLowerCase()
              .includes(decodedQuery.toLowerCase())
        );
        setResults(filteredProducts);
        setIsLoading(false);
      }, 500);
    }
  }, [decodedQuery]);

  useEffect(() => {
    if (decodedQuery) {
      document.title = `Search Results for ${decodedQuery} | AutoParts Direct`;
    }
  }, [decodedQuery]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header
        // scrollToSection={scrollToSection}
        onJoinWaitlist={handleJoinWaitlist}
      />{" "}
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Search Results for: "{decodedQuery}"
          </h2>
          {!isLoading && (
            <p className="text-gray-600">
              {results.length} {results.length === 1 ? "product" : "products"}{" "}
              found
            </p>
          )}
        </div>

        {isLoading ? (
          <div className="flex items-center justify-center py-12">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-secondary mx-auto mb-4"></div>
              <p className="text-gray-600">Searching products...</p>
            </div>
          </div>
        ) : results.length === 0 ? (
          <div className="text-center py-12">
            <div className="max-w-md mx-auto">
              <Search className="h-16 w-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                No products found
              </h3>
              <p className="text-gray-600 mb-6">
                No results found for "{decodedQuery}". Try searching with
                different keywords or browse our categories.
              </p>
              <Link href="/products">
                <Button className="bg-secondary hover:bg-blue-700">
                  Browse All Products
                </Button>
              </Link>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {results.map((product) => (
              <Card
                key={product.id}
                className="overflow-hidden hover:shadow-lg transition-all duration-300 group"
              >
                <Link href={`/products/${product.id}`}>
                  <div className="aspect-square relative overflow-hidden">
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-2 left-2 flex flex-col gap-1">
                      {product.popular && (
                        <Badge className="bg-blue-500 text-white text-xs">
                          Popular
                        </Badge>
                      )}
                      {product.essential && (
                        <Badge className="bg-red-500 text-white text-xs">
                          Essential
                        </Badge>
                      )}
                      {!product.inStock && (
                        <Badge variant="secondary" className="text-xs">
                          Out of Stock
                        </Badge>
                      )}
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <Badge variant="outline" className="mb-2 text-xs">
                      {product.category}
                    </Badge>
                    <h3 className="font-semibold text-lg text-gray-900 mb-2 line-clamp-1">
                      {product.name}
                    </h3>
                    <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                      {product.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-secondary font-bold text-lg">
                        {product.price}
                      </span>
                      <Button
                        size="sm"
                        disabled={!product.inStock}
                        className="bg-secondary hover:bg-blue-700"
                      >
                        {product.inStock ? "View Details" : "Out of Stock"}
                      </Button>
                    </div>
                  </CardContent>
                </Link>
              </Card>
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default SearchResults;
