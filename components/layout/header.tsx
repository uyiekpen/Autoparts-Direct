"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Search, X } from "lucide-react";
import { HeaderSearchBar } from "./sticky-search-bar"; // <-- Use the non-sticky version we built earlier

interface HeaderProps {
  // scrollToSection: (sectionId: string) => void;
  onJoinWaitlist: () => void;
}

export default function Header({ onJoinWaitlist }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#E3E7EA] backdrop-blur-xl border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img
              src="/logo.png"
              alt="Auto Parts Direct Logo"
              className="h-10 w-[100px] object-cover"
            />
          </div>

          {/* Centered Search Bar (Desktop) */}
          <div className="hidden md:block flex-1 px-8">
            <HeaderSearchBar onSearch={(q) => console.log("Search:", q)} />
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <Button
              onClick={onJoinWaitlist}
              className="px-4 py-2 text-sm font-bold rounded-lg bg-secondary hover:bg-secondary/90 text-black border-0 transition-all duration-300 hover:shadow-lg"
            >
              Get Early Access{" "}
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#3C464D] hover:text-secondary transition-colors"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Search className="w-5 h-5" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-gray-300 py-4">
            <HeaderSearchBar onSearch={(q) => console.log("Search:", q)} />
            <Button
              onClick={onJoinWaitlist}
              className="mt-4 w-full text-sm font-bold rounded-lg bg-secondary hover:bg-secondary/90 text-black border-0"
            >
              Get Early Access
            </Button>
          </div>
        )}
      </div>
    </header>
  );
}
