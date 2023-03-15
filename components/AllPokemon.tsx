"use client";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import Pagination from "./Pagination";
import PokeFeed from "./PokeFeed";

type Props = {};
type Pokemon = {
  id: string;
  name: string;
  weight: number;
  sprites: {
    back_default: string;
  };
  types: {
    type: {
      name: string;
    };
  }[];
};
async function getData() {
  const pokemonList = [];
  for (let i = 1; i <= 600; i++) {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
    // Recommendation: handle errors
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error("Failed to fetch data");
    }
    const data = await res.json();
    pokemonList.push(data);
  }
  return pokemonList;
}
function AllPokemon({}: Props) {
  const [data, setData] = useState<Pokemon[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [pokemonsPerPage] = useState<number>(100);
  const isFirstRender = useRef<boolean>(true);
  useEffect(() => {
    if (isFirstRender.current) {
      const cachedPage = localStorage.getItem("currentPage");
      if (cachedPage) {
        setCurrentPage(Number(cachedPage));
      }
      isFirstRender.current = false;
    } else {
      localStorage.setItem("currentPage", currentPage.toString());
    }
  }, [currentPage]);
  useEffect(() => {
    async function fetchData() {
      const pokemonList = await getData();
      setData(pokemonList);
    }
    fetchData();
  }, []);
  const onPageChange = (page: number) => {
    setCurrentPage(page);
  };
  console.log(data);
  const indexOfLastPokemon = currentPage * pokemonsPerPage;
  const indexOfFirstPokemon = indexOfLastPokemon - pokemonsPerPage;
  const currentPokemons = data.slice(indexOfFirstPokemon, indexOfLastPokemon);
  return (
    <div>
      <>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
          {currentPokemons.map((pokemon) => (
            <Link
              href={`/pokemon/${pokemon.name}`}
              key={pokemon.id}
              className="cursor-pointer w-fit"
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
          ))}
        </div>
        <Pagination
          currentPage={currentPage}
          totalPokemonCount={data.length}
          onPageChange={onPageChange}
          pokemonsPerPage={pokemonsPerPage}
        />
      </>
    </div>
  );
}

export default AllPokemon;
