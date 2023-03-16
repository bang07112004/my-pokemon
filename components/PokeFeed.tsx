import Image from "next/image";
import React from "react";

type Props = {
  name: string;
  image: string;
  id: string;
  weight: number;
  type: string[];
};

function PokeFeed({ name, weight, id, image, type }: Props) {
  return (
    <div
      className={`flex px-3 py-6 flex-col items-center justify-center border max-w-md min-w-fit m-3 rounded-xl relative ${
        type[0] === "grass"
          ? "bg-[#76cc54]"
          : type[0] === "fire"
          ? "bg-[#ff4422]"
          : type[0] === "water"
          ? "bg-[#3299fe]"
          : type[0] === "electric"
          ? "bg-[#ffcd32]"
          : type[0] === "normal"
          ? "bg-[#aaaa99]"
          : type[0] === "ice"
          ? "bg-[#67cdff]"
          : type[0] === "fighting"
          ? "bg-[#ba5545]"
          : type[0] === "poison"
          ? "bg-[#7f3f72]"
          : type[0] === "ground"
          ? "bg-[#ddba54]"
          : type[0] === "flying"
          ? "bg-[#8898fe]"
          : type[0] === "psychic"
          ? "bg-[#ff5599]"
          : type[0] === "bug"
          ? "bg-[#abba22]"
          : type[0] === "rock"
          ? "bg-[#baab66]"
          : type[0] === "ghost"
          ? "bg-[#6667ba]"
          : type[0] === "dragon"
          ? "bg-[#7766ec]"
          : type[0] === "dark"
          ? "bg-[#765545]"
          : type[0] === "steel"
          ? "bg-[#ababbb]"
          : "bg-[#ef99ef]"
      }`}
    >
      <div className="absolute top-2 left-2">{id}</div>
      <Image src={image} alt={name} width={150} height={150} />
      <div className="flex flex-col items-center justify-center">
        <h1>{name}</h1>
        <p>Weight: {weight / 10} kg</p>
        <p>Type:{type.join("/")}</p>
      </div>
    </div>
  );
}

export default PokeFeed;
