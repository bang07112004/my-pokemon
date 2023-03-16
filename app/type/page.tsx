import TypePokemon from "@/app/type/TypePokemon";

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
async function Page({}) {
  const data = await getData();
  const filteredData = data.filter((pokemon: Pokemon) =>
    pokemon.types.some((type) => type.type.name === "fire")
  );
  return <div></div>;
}

export default Page;
