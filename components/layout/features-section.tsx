"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Truck, Shield, Wrench, Users } from "lucide-react";
import RequestFormModal from "./requestform";

interface CTASectionProps {
  onJoinWaitlist: () => void;
}

export default function FeaturesSection({ onJoinWaitlist }: CTASectionProps) {
  return (
    <section id="features" className="px-4 py-12 bg-gray-800">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="font-serif font-black text-2xl sm:text-3xl text-white mb-4">
            Why{" "}
            <span className="text-secondary">Users, Vendors & Mechanics</span>{" "}
            Choose Us
          </h2>
          <p className="text-base text-gray-300 max-w-2xl mx-auto">
            A trusted platform connecting car owners, mechanics, and vendors
            with the right parts, services, and opportunities.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Fast Delivery */}
          {/* <Card className="bg-gray-900/80 border-2 border-gray-700 hover:border-secondary/50 transition-all duration-300 hover:shadow-lg group">
            <CardHeader className="text-center pb-3">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                <Truck className="w-6 h-6 text-white" />
              </div>
              <CardTitle className="font-serif font-bold text-lg text-white">
                Fast & Reliable Delivery
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-center text-gray-300 leading-relaxed text-sm">
                Quick nationwide shipping with real-time tracking. Whether
                you’re a car owner, mechanic, or vendor — your order gets to you
                on time.
              </CardDescription>
            </CardContent>
          </Card> */}

          {/* Quality Guaranteed */}
          <Card className="bg-gray-900/80 border-2 border-gray-700 hover:border-secondary/50 transition-all duration-300 hover:shadow-lg group">
            <CardHeader className="text-center pb-3">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <CardTitle className="font-serif font-bold text-lg text-white">
                Quality Guaranteed Parts
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-center text-gray-300 leading-relaxed text-sm">
                Only authentic OEM and trusted aftermarket products. Every part
                is backed by our warranty and quality checks.
              </CardDescription>
            </CardContent>
          </Card>

          {/* Expert Support */}
          <Card className="bg-gray-900/80 border-2 border-gray-700 hover:border-secondary/50 transition-all duration-300 hover:shadow-lg group sm:col-span-2 lg:col-span-1">
            <CardHeader className="text-center pb-3">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                <Wrench className="w-6 h-6 text-white" />
              </div>
              <CardTitle className="font-serif font-bold text-lg text-white">
                Expert Compatibility Support
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-center text-gray-300 leading-relaxed text-sm">
                Mechanics get guidance, vendors get stocking advice, and car
                owners get the right fit. Professional support for every role in
                the ecosystem.
              </CardDescription>
            </CardContent>
          </Card>

          {/* Community / Network */}
          <Card className="bg-gray-900/80 border-2 border-gray-700 hover:border-secondary/50 transition-all duration-300 hover:shadow-lg group sm:col-span-2 lg:col-span-1">
            <CardHeader className="text-center pb-3">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                <Users className="w-6 h-6 text-white" />
              </div>
              <CardTitle className="font-serif font-bold text-lg text-white">
                Connected Community
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-center text-gray-300 leading-relaxed text-sm">
                A growing network where car owners, vendors, and mechanics
                connect, collaborate, and grow their businesses together.
              </CardDescription>
            </CardContent>
          </Card>
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
          <RequestFormModal />
        </div>
      </div>
    </section>
  );
}
