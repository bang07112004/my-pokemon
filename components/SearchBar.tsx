import { useRouter } from "next/navigation";
import React, { useState } from "react";
// type Props = {
//   onSearch: (query: string) => void;
// };
export default function SearchBar({}) {
  const [query, setQuery] = useState("");
  const router = useRouter();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // onSearch(query);
    router.push(`/pokemon/${query}`);
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center">
      <label htmlFor="search" className="mx-4">
        Search for a Pokemon:
      </label>
      <input
        placeholder="Search Pokemon"
        type="text"
        id="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="py-2 px-5 rounded-xl shadow-md shadow-black focus:outline-none text-lg focus:shadow-lg focus:shadow-black transition-all duration-500 focus:scale-105"
      />
      <button
        disabled={!query}
        type="submit"
        className="mx-3 flex items-center px-4 py-2 rounded-xl border-2 text-white font-bold text-lg shadow-btn disabled:cursor-not-allowed disabled:hover:scale-100 disabled:active:scale-100 disabled:hover:shadow-md disabled:hover:shadow-black disabled:grayscale"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>
        Search
      </button>
    </form>
  );
}
