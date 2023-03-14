"use client";
import React, { useEffect, useRef, useState } from "react";
import PokeFeed from "./PokeFeed";
import Pagination from "./Pagination";
import Link from "next/link";

type Props = {};

function AllFeed({}: Props) {
  const [pokemons, setPokemons] = useState<Array<any>>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [pokemonsPerPage] = useState<number>(30);
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
    const fetchData = async () => {
      const pokemonList = [];
      for (let i = 1; i <= 150; i++) {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
        const data = await response.json();
        pokemonList.push(data);
      }
      setPokemons(pokemonList);
    };
    fetchData();
  }, []);

  const onPageChange = (page: number) => {
    setCurrentPage(page);
  };
  const indexOfLastPokemon = currentPage * pokemonsPerPage;
  const indexOfFirstPokemon = indexOfLastPokemon - pokemonsPerPage;
  const currentPokemons = pokemons.slice(
    indexOfFirstPokemon,
    indexOfLastPokemon
  );

  return (
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
        totalPokemonCount={pokemons.length}
        onPageChange={onPageChange}
        pokemonsPerPage={pokemonsPerPage}
      />
    </>
  );
}

export default AllFeed;
