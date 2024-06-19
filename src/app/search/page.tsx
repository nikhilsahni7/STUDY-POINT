// app/search/page.tsx
"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import axios from "axios";

const SearchPage = () => {
  const [results, setResults] = useState([]);
  const searchParams = useSearchParams();
  const query = searchParams.get("query");

  useEffect(() => {
    const fetchResults = async () => {
      if (query) {
        try {
          const response = await axios.get(`/api/search?query=${query}`);
          setResults(response.data);
        } catch (error) {
          console.error("Error fetching search results:", error);
        }
      }
    };

    fetchResults();
  }, [query]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Search Results for: {query}</h1>
      {results.length > 0 ? (
        <ul className="space-y-4">
          {results.map((result: any) => (
            <li
              key={result.id}
              className="p-4 border border-gray-300 rounded-md shadow-md"
            >
              <h2 className="text-xl font-semibold mb-2">
                {result.name +
                  " - " +
                  result.category +
                  "(" +
                  result.type +
                  ")"}
              </h2>
              <p>{result.description}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500">No results found</p>
      )}
    </div>
  );
};

export default SearchPage;
