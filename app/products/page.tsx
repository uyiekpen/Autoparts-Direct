"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search, ArrowLeft } from "lucide-react";
import Link from "next/link";
import Header from "@/components/layout/header";

export default function ProductsPage() {
  const [searchTerm, setSearchTerm] = useState("");

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

  const filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const [emailWaitlistOpen, setEmailWaitlistOpen] = useState(false);
  const [selectedPartName, setSelectedPartName] = useState("");

  const handleJoinWaitlist = () => {
    setSelectedPartName("General Waitlist");
    setEmailWaitlistOpen(true);
  };

  return (
    <div className="min-h-screen ">
      <Header
        // scrollToSection={scrollToSection}
        onJoinWaitlist={handleJoinWaitlist}
      />{" "}
      <main className="container mx-auto  p-8 mt-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            All Auto Parts
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Browse our complete catalog of automotive parts and accessories
          </p>

          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <Input
              type="text"
              placeholder="Search for parts or categories..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 py-3 text-lg"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <Card
              key={product.id}
              className="bg-gray-900/80 border-2 border-gray-700 hover:border-secondary/50 transition-all duration-300 hover:shadow-lg group overflow-hidden h-[500px]"
            >
              <Link href={`/products/${product.id}`}>
                <div className="aspect-square relative overflow-hidden">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-1 right-1 flex flex-col gap-1">
                    {product.popular && (
                      <Badge className="absolute top-1 right-1 bg-secondary text-white text-xs font-bold px-1.5 py-0.5 rounded text-[10px]">
                        Popular
                      </Badge>
                    )}
                    {product.essential && (
                      <Badge className="absolute top-1 right-1 bg-secondary text-black text-xs font-bold px-1.5 py-0.5 rounded text-[10px]">
                        Essential
                      </Badge>
                    )}
                    {!product.inStock && (
                      <Badge
                        variant="secondary"
                        className="absolute top-1 right-1 bg-secondary text-black text-xs font-bold px-1.5 py-0.5 rounded text-[10px]"
                      >
                        Out of Stock
                      </Badge>
                    )}
                  </div>
                </div>
                <CardContent className="p-4">
                  <Badge variant="outline" className="mb-2 text-xs">
                    {product.category}
                  </Badge>
                  <h3 className="font-semibold text-lg text-white mb-2 line-clamp-1">
                    {product.name}
                  </h3>
                  <p className="text-white text-sm mb-3 line-clamp-2">
                    {product.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-secondary font-bold text-xs">
                      {product.price}
                    </span>
                    <Button
                      size="sm"
                      disabled={!product.inStock}
                      className="bg-secondary hover:bg-secondary/90 text-black text-xs h-7 px-2"
                    >
                      {product.inStock ? "View Details" : "Out of Stock"}
                    </Button>
                  </div>
                </CardContent>
              </Link>
            </Card>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              No products found matching your search.
            </p>
          </div>
        )}
      </main>
    </div>
  );
}
