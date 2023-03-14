import Image from "next/image";
import React from "react";

type Props = {
  name: string;
  image: string;
  id: string;
  weight: string;
  type: string[];
};

function PokeFeed({ name, weight, id, image, type }: Props) {
  return (
    <div
      className={`flex px-3 py-6 flex-col items-center justify-center border w-fit m-3 rounded-xl ${
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
      <div
        className={`border-4 ${
          type[0] === "grass"
            ? "border-[#76cc54]"
            : type[0] === "fire"
            ? "border-[#ff4422]"
            : type[0] === "water"
            ? "border-[#3299fe]"
            : type[0] === "electric"
            ? "border-[#ffcd32]"
            : type[0] === "normal"
            ? "border-[#aaaa99]"
            : type[0] === "ice"
            ? "border-[#67cdff]"
            : type[0] === "fighting"
            ? "border-[#ba5545]"
            : type[0] === "poison"
            ? "border-[#7f3f72]"
            : type[0] === "ground"
            ? "border-[#ddba54]"
            : type[0] === "flying"
            ? "border-[#8898fe]"
            : type[0] === "psychic"
            ? "border-[#ff5599]"
            : type[0] === "bug"
            ? "border-[#abba22]"
            : type[0] === "rock"
            ? "border-[#baab66]"
            : type[0] === "ghost"
            ? "border-[#6667ba]"
            : type[0] === "dragon"
            ? "border-[#7766ec]"
            : type[0] === "dark"
            ? "border-[#765545]"
            : type[0] === "steel"
            ? "border-[#ababbb]"
            : "border-[#ef99ef]"
        } `}
      >
        <Image src={image} alt={name} width={150} height={150} />
      </div>
      <div className="flex flex-col items-center justify-center">
        <h1>{name}</h1>
        <p>Weight: {weight}</p>
        <p>Type:{type.join("/")}</p>
      </div>
    </div>
  );
}

export default PokeFeed;
