"use client";

import React, { useEffect, useState } from "react";
import getPokemon from "@/libs/getPokemon";
import PokeFeed from "@/components/PokeFeed";

type Props = {
  params: {
    pokemonId: string;
  };
};

interface IPokemon {
  id: string;
  name: string;
  weight: string;
  abilities: { ability: { name: string } }[];
  moves: { move: { name: string } }[];
  base_experience: number;
  sprites: { back_default: string };
  types: { type: { name: string } }[];
}

function Page({ params: { pokemonId } }: Props) {
  const [pokemon, setPokemon] = useState<IPokemon | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const pokemonData = await getPokemon(pokemonId);
        setPokemon(pokemonData);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, [pokemonId]);

  if (!pokemon) {
    return <h1>No Results</h1>;
  }

  const abilityNames = pokemon.abilities.map(({ ability }) => ability.name);
  const moveNames = pokemon.moves.map(({ move }) => move.name);

  return (
    <div className="flex flex-col justify-center items-center">
      <PokeFeed
        name={pokemon.name}
        weight={pokemon.weight}
        id={pokemon.id}
        image={pokemon.sprites.back_default}
        type={pokemon.types.map(({ type }) => type.name)}
      />
      <h1>Abilities: {abilityNames.join(", ")}</h1>
      <h1>Base Experience: {pokemon.base_experience}</h1>
      <h1>Moves: {moveNames.join("/ ")}</h1>
    </div>
  );
}

export default Page;
