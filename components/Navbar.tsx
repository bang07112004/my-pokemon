"use client";
import SearchBar from "../components/SearchBar";
import Link from "next/link";
export default function Home() {
  return (
    <div className="flex flex-col sticky bg-gradient-to-r from-pink-500 to-purple-500 z-50 top-0 py-3 px-2">
      <div className="flex justify-between items-center">
        <Link
          href={{
            pathname: "/",
            query: { page: 1 },
          }}
          as="/"
        >
          Home
        </Link>
        <SearchBar />
      </div>
    </div>
  );
}
