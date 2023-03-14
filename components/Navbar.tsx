"use client";
import { useState } from "react";
import axios from "axios";
import SearchBar from "../components/SearchBar";
import Link from "next/link";
import PokeFeed from "./PokeFeed";

export default function Home() {
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);
  const [show, setShow] = useState(false);

  const handleSearch = async (query) => {
    try {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${query.toLowerCase()}`
      );
      setPokemon(response.data);
      setShow(true);
    } catch (error) {
      console.log(error);
      if (error.response.status === 404) {
        setPokemon(null);
        setShow(true);
      }
    }
  };

  return (
    <div className="flex flex-col sticky bg-gradient-to-r from-pink-500 to-purple-500 z-50 top-0">
      <div className="flex justify-between items-center">
        <Link href={"/"}>Home</Link>
        <SearchBar onSearch={handleSearch} />
      </div>
      <div className="flex justify-end">
        {pokemon && show && (
          <div className="flex gap-3 items-center">
            <button
              onClick={() => setShow(false)}
              className="cursor-pointer border-2 px-5 py-2 max-h-fit"
            >
              Close
            </button>
            <div>
              <Link
                onClick={() => {
                  setShow(false);
                  setPokemon(null);
                }}
                href={`/pokemon/${pokemon.name}`}
                key={pokemon.id}
                className="w-fit"
              >
                <PokeFeed
                  name={pokemon.name}
                  weight={pokemon.weight}
                  id={pokemon.id}
                  image={pokemon.sprites.back_default}
                  type={pokemon.types.map(
                    (t: { type: { name: string } }) => t.type.name
                  )}
                />
              </Link>
            </div>
          </div>
        )}
        {pokemon === null && show && (
          <div className="flex items-center gap-4 my-2">
            <button
              onClick={() => setShow(false)}
              className="cursor-pointer border-2 px-5 py-2 max-h-fit"
            >
              Close
            </button>
            <h1>Not Found</h1>
          </div>
        )}
      </div>
    </div>
  );
}
