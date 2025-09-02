"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Truck, Shield, Wrench, MessageCircle } from "lucide-react";
import { Button } from "../ui/button";

interface CTASectionProps {
  onJoinWaitlist: () => void;
}

export default function FeaturesSection({ onJoinWaitlist }: CTASectionProps) {
  return (
    <section id="features" className="px-4 py-12 bg-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-serif font-black text-2xl sm:text-3xl text-white mb-4">
            Why Car Owners <span className="text-secondary">Choose Us</span>
          </h2>
          <p className="text-base text-gray-300 max-w-2xl mx-auto">
            Your trusted source for quality automotive parts and expert service
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="bg-gray-900/80 border-2 border-gray-700 hover:border-secondary/50 transition-all duration-300 hover:shadow-lg group">
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
                Quick shipping nationwide with tracking. Get your parts when you
                need them, with reliable delivery service.
              </CardDescription>
            </CardContent>
          </Card>

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
                Authentic OEM and high-quality aftermarket parts. Every product
                backed by our quality guarantee and warranty.
              </CardDescription>
            </CardContent>
          </Card>

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
                Our automotive experts help you find the right parts for your
                vehicle. Professional guidance and technical support included.
              </CardDescription>
            </CardContent>
          </Card>
        </div>

        {/* <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
          <Button
            onClick={onJoinWaitlist}
            size="lg"
            className="bg-white text-gray-800 hover:bg-gray-100 px-8 py-4 text-lg font-semibold"
          >
            <MessageCircle className="mr-2 h-5 w-5" />
            Get Started Today
          </Button>
        </div> */}
      </div>
    </section>
  );
}
