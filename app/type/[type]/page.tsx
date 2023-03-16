import PokeFeed from "@/components/PokeFeed";
import Link from "next/link";
import React from "react";

type PageProps = {
  params: {
    type: string;
  };
};
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
  let pokemonLists = [];
  for (let i = 1; i <= 651; i++) {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    const data = await res.json();
    pokemonLists.push(data);
  }
  return pokemonLists;
}
async function TypePokemon({ params: { type } }: PageProps) {
  const data = await getData();
  const filteredData = data.filter((pokemon: Pokemon) =>
    pokemon.types.some((t) => t.type.name === type)
  );
  return (
    <div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
        {filteredData.map((pokemon: Pokemon) => (
          <Link
            href={`/pokemon/${pokemon.name}`}
            className="w-fit"
            key={pokemon.id}
          >
            <PokeFeed
              id={pokemon.id}
              name={pokemon.name}
              weight={pokemon.weight}
              image={pokemon.sprites.back_default}
              type={pokemon.types.map((type) => type.type.name)}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
export default TypePokemon;
