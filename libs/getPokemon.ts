async function getPokemon(pokemonId: string) {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
  if (!res.ok) throw new Error("Failed to fetch data");
  return res.json();
}

export default getPokemon;
