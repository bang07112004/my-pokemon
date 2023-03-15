"use client";
import SearchBar from "../components/SearchBar";
import Link from "next/link";
export default function Home() {
  return (
    <div className="flex flex-col sticky max-w-full bg-gradient-to-r from-pink-500 to-purple-500 z-50 top-0 py-3 px-2 max-h-[120px]">
      <div className="flex justify-between items-center">
        <Link href={"/"}>Home</Link>
        <SearchBar />
      </div>
    </div>
  );
}
