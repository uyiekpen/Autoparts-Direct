"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search } from "lucide-react";

interface ProductsSectionProps {
  onFindNowClick: () => void;
}

export function ProductsSection({ onFindNowClick }: ProductsSectionProps) {
  const [searchTerm, setSearchTerm] = useState("");

  const products = [
    {
      id: 1,
      name: "Brake Pads",
      description: "Front & rear brake pads for all car models",
      price: "₦8,000 - ₦25,000",
      image: "/brake.jpeg",
      popular: true,
    },
    {
      id: 2,
      name: "Engine Oil",
      description: "Premium motor oil for all engine types",
      price: "₦3,500 - ₦12,000",
      image: "/engine-oil.jpeg",
    },
    {
      id: 3,
      name: "Air Filter",
      description: "Engine air filters for better performance",
      price: "₦2,000 - ₦8,000",
      image: "/airfilter.jpeg",
    },
    {
      id: 4,
      name: "Spark Plugs",
      description: "High-quality ignition spark plugs",
      price: "₦1,500 - ₦5,000",
      image: "/spark-plug-5EXKX88-600.jpg",
    },
    {
      id: 5,
      name: "Car Battery",
      description: "12V automotive batteries, all sizes",
      price: "₦15,000 - ₦45,000",
      image: "/car-battery-power (1).png",
      essential: true,
    },
    {
      id: 6,
      name: "Car Tires",
      description: "Premium tires for all vehicle types",
      price: "₦25,000 - ₦80,000",
      image: "/car-tires-wheels-rubber (1).png",
    },
    {
      id: 7,
      name: "Alternator",
      description: "Electrical charging system components",
      price: "₦20,000 - ₦60,000",
      image: "/car-alternator (1).png",
    },
    {
      id: 8,
      name: "Radiator",
      description: "Engine cooling system radiators",
      price: "₦18,000 - ₦55,000",
      image: "/car-radiator-cooling-system (1).png",
    },
  ];

  const filteredProducts = products.filter(
    (product) => product.name.toLowerCase().includes(searchTerm.toLowerCase())
    // product.category.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Popular Auto Parts
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Find the parts you need from our extensive catalog
          </p>

          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <Input
              type="text"
              placeholder="Search for parts..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 py-3 text-lg"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredProducts.map((product, index) => (
            <Card
              key={product.id}
              className="bg-gray-900/80 border-2 border-gray-700 hover:border-secondary/50 transition-all duration-300 hover:shadow-lg group overflow-hidden h-[400px]"
            >
              <div className="aspect-square relative overflow-hidden">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {product.popular && (
                  <div className="absolute top-1 right-1 bg-secondary text-black text-xs font-bold px-1.5 py-0.5 rounded text-[10px]">
                    Popular
                  </div>
                )}
                {product.essential && (
                  <div className="absolute top-1 right-1 bg-secondary text-black text-xs font-bold px-1.5 py-0.5 rounded text-[10px]">
                    Essential
                  </div>
                )}
              </div>
              <CardContent className="p-3">
                <h3 className="font-serif font-bold text-sm text-white mb-1 line-clamp-1">
                  {product.name}
                </h3>
                <p className="text-gray-400 text-xs mb-2 line-clamp-2">
                  {product.description}
                </p>
                <div className="flex flex-col gap-2">
                  <span className="text-secondary font-bold text-xs">
                    {product.price}
                  </span>
                  <Button
                    size="sm"
                    className="bg-secondary hover:bg-secondary/90 text-black text-xs h-7 px-2"
                    onClick={onFindNowClick}
                  >
                    Find Now
                  </Button>
                </div>
              </CardContent>
            </Card>
            // <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow h-[400px]">
            //   <div className="aspect-square relative">
            //     <img
            //       src={product.image || "/placeholder.svg"}
            //       alt={product.name}
            //       className="w-full h-full object-cover"
            //     />
            //   </div>
            //   <CardContent className="p-6">
            //     <Badge variant="secondary" className="mb-2">
            //       {/* {product.category} */}
            //     </Badge>
            //     <h3 className="text-xl font-semibold text-gray-900 mb-2">{product.name}</h3>
            //     <p className="text-lg font-bold text-blue-600 mb-4">{product.price}</p>
            //     <Button onClick={onFindNowClick} className="w-full bg-blue-600 hover:bg-blue-700">
            //       Find Now
            //     </Button>
            //   </CardContent>
            // </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
