// components/SearchBar.js
"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import clsx from "clsx";

const SearchBar = ({ className }: { className?: string }) => {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/search?query=${query}`);
    }
  };

  return (
    <form
      onSubmit={handleSearch}
      className={clsx(
        "flex items-center space-x-2 p-2 rounded-md shadow-md",
        className
      )}
    >
      <Input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search..."
        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <Button
        type="submit"
        variant="ghost"
        className="p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
      >
        <Search size={16} />
      </Button>
    </form>
  );
};

export default SearchBar;
