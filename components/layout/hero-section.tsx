"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = [
    {
      src: "/3.jpg",
      alt: "Nigerian mechanic working on car engine",
    },
    {
      src: "/2.jpg",
      alt: "Modern auto parts warehouse with organized inventory",
    },
    {
      src: "/5.jpg",
      alt: "Professional display of various car parts and components",
    },
  ];

  // Auto-rotate carousel every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [images.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        backgroundImage: `url(${
          images[currentSlide].src || "/placeholder.svg"
        })`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-black/80 via-black/60 to-transparent"></div>

      <div className="relative z-10 px-4 max-w-4xl ml-8 md:ml-16 lg:ml-24">
        <div className="space-y-6">
          <h1 className="font-serif font-black text-4xl sm:text-5xl md:text-6xl text-white leading-tight">
            Your Car Needs It. We Find It.
            <span className="text-secondary">Instantly </span>
          </h1>

          <p className="text-xl sm:text-2xl text-gray-200 max-w-2xl leading-relaxed">
            Get the right parts fast so you can fix it and get back on the road
            <span className="text-secondary font-semibold">
              {" "}
              – no delays, no stress.
            </span>
          </p>

          <div className="pt-6">
            <Button
              size="lg"
              className="px-10 py-5 text-xl font-bold rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 flex items-center gap-3 bg-secondary hover:bg-secondary/90 text-black border-0 h-[80px]"
            >
              Get Early Access <ArrowRight className="w-6 h-6" />
            </Button>
          </div>
        </div>
      </div>

      {/* <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-200 z-20"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-200 z-20"
      >
        <ChevronRight className="w-6 h-6" />
      </button> */}

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex justify-center gap-3 z-20">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-4 h-4 rounded-full transition-all duration-200 ${
              index === currentSlide
                ? "bg-secondary"
                : "bg-white/50 hover:bg-white/70"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
