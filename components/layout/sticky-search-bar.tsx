"use client";

import type React from "react";
import { useState } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface HeaderSearchBarProps {
  onSearch: (query: string) => void;
}

export function HeaderSearchBar({ onSearch }: HeaderSearchBarProps) {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      onSearch(searchQuery.trim());
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && searchQuery.trim()) {
      onSearch(searchQuery.trim());
    }
  };

  return (
    <header className="w-full  p-4">
      <div className="max-w-4xl mx-auto flex items-center justify-center">
        <form
          onSubmit={handleSubmit}
          className="flex items-center gap-2 w-full max-w-lg"
        >
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            <Input
              type="text"
              placeholder="Search auto parts..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyPress={handleKeyPress}
              className="w-full pl-10 pr-4 py-2 bg-gray-800 border-gray-600 text-white placeholder:text-gray-400 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/30 rounded-lg"
            />
          </div>
          <Button
            type="submit"
            size="sm"
            className="bg-gradient-to-r from-red-500 to-yellow-500 hover:from-red-600 hover:to-yellow-600 text-white border-0 px-4 py-2 rounded-lg"
          >
            <Search className="w-4 h-4" />
          </Button>
        </form>
      </div>
    </header>
  );
}
