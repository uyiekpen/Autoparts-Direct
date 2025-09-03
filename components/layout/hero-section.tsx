"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";

interface HeroSectionProps {
  onGetAccess: () => void;
}

export default function HeroSection({ onGetAccess }: HeroSectionProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = [
    {
      src: "/3.png",
      alt: "Nigerian mechanic working on car engine",
    },
    {
      src: "/2.jpg",
      alt: "Modern auto parts warehouse with organized inventory",
    },
    {
      src: "/5.png",
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
      <div className="absolute inset-0 bg-black/70 md:bg-black/60"></div>

      <div className="absolute inset-y-0 left-0 w-full md:w-1/2 bg-gradient-to-r from-black/90 via-black/70 md:via-black/60 to-transparent md:to-transparent"></div>

      <div className="relative z-10 px-4 sm:px-6 md:px-8 max-w-4xl ml-4 sm:ml-6 md:ml-16 lg:ml-16">
        <div className="space-y-3 sm:space-y-4">
          <h1 className="font-serif font-black text-lg sm:text-xl md:text-2xl lg:text-3xl text-white">
            The easiest way to get the right car parts and trusted service
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-gray-200 max-w-2xl leading-relaxed">
            No more guessing, no more wasted money. Whether you’re fixing your
            own car, running a workshop, or selling parts we connect you with
            the people and
            <span className="text-secondary font-semibold">
              {" "}
              parts you can actually trust{" "}
            </span>
          </p>

          <div className="pt-3 sm:pt-4">
            <Button
              size="lg"
              className="px-5 sm:px-6 md:px-8 py-3 sm:py-4 text-base sm:text-lg font-bold rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 flex items-center gap-2 sm:gap-3 bg-secondary hover:bg-secondary/90 text-black border-0 h-[38px] sm:h-[46px] md:h-[52px] w-full sm:w-auto justify-center"
              onClick={onGetAccess}
            >
              Get Access <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 flex justify-center gap-2 sm:gap-3 z-20">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full transition-all duration-200 ${
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
