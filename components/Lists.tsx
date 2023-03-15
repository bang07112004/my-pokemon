import getPokemon from "@/libs/getPokemon";
import Link from "next/link";
import React from "react";
type Props = {};

function Lists({}: Props) {
  const lists = [
    { title: "Normal", id: "normal" },
    { title: "Fire", id: "fire" },
    { title: "Electric", id: "electric" },
    { title: "Ice", id: "ice" },
    { title: "Fighting", id: "fighting" },
    { title: "Poison", id: "poison" },
    { title: "Ground", id: "ground" },
    { title: "Flying", id: "flying" },
    { title: "Psychic", id: "psychic" },
    { title: "Bug", id: "bug" },
    { title: "Rock", id: "rock" },
    { title: "Ghost", id: "ghost" },
    { title: "Dragon", id: "dragon" },
    { title: "Dark", id: "dark" },
    { title: "Steel", id: "steel" },
    { title: "Fairy", id: "fairy" },
  ];
  return (
    <div className="flex gap-5 px-5 py-3">
      {lists.map((list) => (
        <Link href={`/type?type=${list.title.toLowerCase()}`} key={list.id}>
          {list.title}
        </Link>
      ))}
    </div>
  );
}

export default Lists;
