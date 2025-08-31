"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";

interface ProductsSectionProps {
  onJoinWaitlist: () => void;
}

export function ProductsSection({ onJoinWaitlist }: ProductsSectionProps) {
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

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Popular Auto Parts
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Find the parts you need from our extensive catalog
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <Card
              key={product.id}
              className="bg-gray-900/80 border-2 border-gray-700 hover:border-secondary/50 transition-all duration-300 hover:shadow-lg group overflow-hidden"
            >
              <Link href={`/products/${product.id}`}>
                <div className="aspect-square relative overflow-hidden">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />

                  {/* Labels */}
                  <div className="absolute top-1 right-1 flex flex-col gap-1">
                    {product.popular && (
                      <span className="bg-secondary text-black text-[10px] font-bold px-1.5 py-0.5 rounded">
                        Popular
                      </span>
                    )}
                    {product.essential && (
                      <span className="bg-secondary text-black text-[10px] font-bold px-1.5 py-0.5 rounded">
                        Essential
                      </span>
                    )}
                  </div>
                </div>

                <CardContent className="p-3">
                  <h3 className="font-serif font-bold text-sm text-white mb-1 line-clamp-2">
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
                      aria-label={`Find ${product.name} now`}
                      onClick={(e) => {
                        e.preventDefault();
                        onJoinWaitlist();
                      }}
                    >
                      Find Now
                    </Button>
                  </div>
                </CardContent>
              </Link>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link href="/products">
            <Button className="bg-secondary hover:bg-secondary/90 text-black px-8 py-3 text-lg">
              View All Products
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
