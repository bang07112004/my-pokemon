"use client";
import Link from "next/link";
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
  for (let i = 1; i <= 651; i++) {
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
async function AllPokemon({}: Props) {
  const pokemons = await getData();
  return (
    <div>
      <>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
          {pokemons.map((pokemon) => (
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
      </>
    </div>
  );
}

export default AllPokemon;
