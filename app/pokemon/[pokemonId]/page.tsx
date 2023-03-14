import React from "react";
import getPokemon from "@/libs/getPokemon";
import PokeFeed from "@/components/PokeFeed";

type Props = {
  params: {
    pokemonId: string;
  };
};

async function page({ params: { pokemonId } }: Props) {
  const pokemonData: Promise<Pokemon> = getPokemon(pokemonId);
  const pokemon = await pokemonData;
  const abilityNames = pokemon.abilities.map(
    (ability: { ability: { name: string } }) => ability.ability.name
  );
  const moveNames = pokemon.moves.map((move) => move.move.name);
  return (
    <div>
      {pokemon && pokemon.name.length === 0 && <h1>No Results</h1>}
      {pokemon && (
        <div className="flex flex-col justify-center items-center">
          <PokeFeed
            name={pokemon.name}
            weight={pokemon.weight}
            id={pokemon.id}
            image={pokemon.sprites.back_default}
            type={pokemon.types.map(
              (t: { type: { name: string } }) => t.type.name
            )}
          />
          <h1>Abilities: {abilityNames.join(", ")}</h1>
          <h1>Base Experience: {pokemon.base_experience}</h1>
          <h1>Moves: {moveNames.join("/ ")}</h1>
        </div>
      )}
    </div>
  );
}

export default page;
