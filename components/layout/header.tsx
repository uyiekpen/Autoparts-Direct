"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, Search, X } from "lucide-react";
import { HeaderSearchBar } from "./sticky-search-bar";
import { useAuth } from "@/hooks/use-auth";

interface HeaderProps {
  onJoinWaitlist: () => void;
}

export function Header({ onJoinWaitlist }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { user, logout, isAuthenticated } = useAuth();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#E3E7EA] backdrop-blur-xl border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <a href="/">
              <img
                src="/logo.png"
                alt="Auto Parts Direct Logo"
                className="h-10 w-[100px] object-cover"
              />
            </a>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <a
              href="#services"
              className="text-foreground hover:text-primary transition-colors"
            >
              Services
            </a>
            <a
              href="#mechanics"
              className="text-foreground hover:text-primary transition-colors"
            >
              Mechanics
            </a>
            <a
              href="/products"
              className="text-foreground hover:text-primary transition-colors"
            >
              Parts
            </a>
            <a
              href="#about"
              className="text-foreground hover:text-primary transition-colors"
            >
              About
            </a>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            {isAuthenticated ? (
              <div className="flex items-center gap-3">
                <span className="text-sm text-gray-600">
                  Welcome, {user?.name}
                </span>
                <Button
                  onClick={logout}
                  variant="outline"
                  className="px-4 py-2 text-sm font-medium rounded-lg bg-transparent"
                >
                  Sign Out
                </Button>
              </div>
            ) : (
              <Button
                onClick={onJoinWaitlist}
                className="px-4 py-2 text-sm font-bold rounded-lg bg-secondary hover:bg-secondary/90 text-black border-0 transition-all duration-300 hover:shadow-lg"
              >
                Get Access
              </Button>
            )}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#3C464D] hover:text-secondary transition-colors"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-gray-300 py-4">
            <div className="flex flex-col space-y-3">
              <a
                href="#services"
                className="text-foreground hover:text-primary transition-colors"
              >
                Services
              </a>
              <a
                href="#mechanics"
                className="text-foreground hover:text-primary transition-colors"
              >
                Mechanics
              </a>
              <a
                href="/products"
                className="text-foreground hover:text-primary transition-colors"
              >
                Parts
              </a>
              <a
                href="#about"
                className="text-foreground hover:text-primary transition-colors"
              >
                About
              </a>
            </div>
            {isAuthenticated ? (
              <div className="mt-4 space-y-2">
                <p className="text-sm text-gray-600">Welcome, {user?.name}</p>
                <Button
                  onClick={logout}
                  variant="outline"
                  className="w-full text-sm font-medium rounded-lg bg-transparent"
                >
                  Sign Out
                </Button>
              </div>
            ) : (
              <Button
                onClick={onJoinWaitlist}
                className="mt-4 w-full text-sm font-bold rounded-lg bg-secondary hover:bg-secondary/90 text-black border-0"
              >
                Get Access
              </Button>
            )}
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
