"use client";

import type React from "react";
import { useState, useEffect, useRef } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

interface HeaderSearchBarProps {
  onSearch?: (query: string) => void;
}

export function HeaderSearchBar({ onSearch }: HeaderSearchBarProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [isSuggestionsOpen, setIsSuggestionsOpen] = useState(false);
  const router = useRouter();
  const searchRef = useRef<HTMLDivElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      onSearch?.(searchQuery.trim());
      router.push(`/search/${encodeURIComponent(searchQuery.trim())}`);
      setIsSuggestionsOpen(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && searchQuery.trim()) {
      router.push(`/search/${encodeURIComponent(searchQuery.trim())}`);
      setIsSuggestionsOpen(false);
    } else if (e.key === "Escape") {
      setIsSuggestionsOpen(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  useEffect(() => {
    if (searchQuery.trim().length > 2) {
      // Simulating an API call to get related search suggestions
      setSuggestions([
        `${searchQuery}`,
        `${searchQuery} `,
        `${searchQuery} `,
      ]);
      setIsSuggestionsOpen(true);
    } else {
      setSuggestions([]);
      setIsSuggestionsOpen(false);
    }
  }, [searchQuery]);

  // Close suggestions when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target as Node)
      ) {
        setIsSuggestionsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="w-full p-4">
      <div className="max-w-4xl mx-auto flex items-center justify-center">
        <form
          onSubmit={handleSubmit}
          className="flex items-center gap-2 w-full max-w-lg"
          role="search"
        >
          <div className="relative flex-1" ref={searchRef}>
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search auto parts..."
              value={searchQuery}
              onChange={handleChange}
              onKeyDown={handleKeyPress}
              onFocus={() =>
                suggestions.length > 0 && setIsSuggestionsOpen(true)
              }
              aria-label="Search for auto parts"
              aria-expanded={isSuggestionsOpen}
              aria-haspopup="listbox"
              aria-controls="search-suggestions"
              className="w-full pl-10 pr-4 py-2 bg-background border-border text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/30 rounded-lg"
            />
            {isSuggestionsOpen && suggestions.length > 0 && (
              <div
                id="search-suggestions"
                role="listbox"
                aria-label="Search suggestions"
                className="absolute top-full left-0 w-full bg-popover border border-border rounded-b-lg mt-1 max-h-60 overflow-y-auto z-10 shadow-lg"
              >
                {suggestions.map((suggestion, index) => (
                  <div
                    key={index}
                    role="option"
                    aria-selected={searchQuery === suggestion}
                    className="px-4 py-2 text-muted-foreground hover:bg-accent hover:text-accent-foreground cursor-pointer transition-colors"
                    onClick={() => {
                      setSearchQuery(suggestion);
                      router.push(`/search/${encodeURIComponent(suggestion)}`);
                      setIsSuggestionsOpen(false);
                    }}
                  >
                    {suggestion}
                  </div>
                ))}
              </div>
            )}
          </div>
          <Button
            type="submit"
            size="sm"
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-4 py-2 rounded-lg"
          >
            <Search className="w-4 h-4" />
            <span className="sr-only">Search</span>
          </Button>
        </form>
      </div>
    </header>
  );
}
