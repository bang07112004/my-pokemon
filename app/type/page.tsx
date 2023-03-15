"use client";
import Pagination from "@/components/Pagination";
import PokeFeed from "@/components/PokeFeed";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";
type Props = {};

function TypePage({}: Props) {
  const TypeParams = useSearchParams();
  const type = TypeParams.get("type");
  const [pokemons, setPokemons] = useState<Array<any>>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [pokemonsPerPage] = useState<number>(30);
  const isFirstRender = useRef<boolean>(true);

  useEffect(() => {
    setCurrentPage(1); // Reset current page to 1 whenever type parameter changes
  }, [type]);

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
      for (let i = 1; i <= 300; i++) {
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

  const filteredPokemons = pokemons.filter((pokemon) =>
    pokemon.types.some(
      (t: { type: { name: string | null } }) => t.type.name === type
    )
  );
  const indexOfLastPokemon = currentPage * pokemonsPerPage;
  const indexOfFirstPokemon = indexOfLastPokemon - pokemonsPerPage;
  const currentPokemons = filteredPokemons.slice(
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
        totalPokemonCount={filteredPokemons.length}
        onPageChange={onPageChange}
        pokemonsPerPage={pokemonsPerPage}
      />
    </>
  );
}

export default TypePage;
