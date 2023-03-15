"use client";
import Link from "next/link";
import React, { useState } from "react";
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
  const [show, setShow] = useState(false);
  return (
    <>
      <div className="flex gap-4 justify-center items-center py-4">
        {lists.map((list) => (
          <Link href={`/type?type=${list.title.toLowerCase()}`} key={list.id}>
            <h1
              className={`text-lg font-semibold hidden lg:inline-block ${
                list.id === "grass"
                  ? "text-[#76cc54]"
                  : list.id === "fire"
                  ? "text-[#ff4422]"
                  : list.id === "water"
                  ? "text-[#3299fe]"
                  : list.id === "electric"
                  ? "text-[#ffcd32]"
                  : list.id === "normal"
                  ? "text-[#aaaa99]"
                  : list.id === "ice"
                  ? "text-[#67cdff]"
                  : list.id === "fighting"
                  ? "text-[#ba5545]"
                  : list.id === "poison"
                  ? "text-[#7f3f72]"
                  : list.id === "ground"
                  ? "text-[#ddba54]"
                  : list.id === "flying"
                  ? "text-[#8898fe]"
                  : list.id === "psychic"
                  ? "text-[#ff5599]"
                  : list.id === "bug"
                  ? "text-[#abba22]"
                  : list.id === "rock"
                  ? "text-[#baab66]"
                  : list.id === "ghost"
                  ? "text-[#6667ba]"
                  : list.id === "dragon"
                  ? "text-[#7766ec]"
                  : list.id === "dark"
                  ? "text-[#765545]"
                  : list.id === "steel"
                  ? "text-[#ababbb]"
                  : "text-[#ef99ef]"
              }`}
            >
              {list.title}
            </h1>
          </Link>
        ))}
      </div>
      <div className="lg:hidden flex">
        {show ? (
          <div className=" fixed z-50 top-[100px] right-2 w-fit rounded-xl bg-gradient-to-b from-white to-gray-300">
            <div className="flex justify-end ">
              <svg
                onClick={() => setShow(false)}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-10 h-10 cursor-pointer"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </div>

            <div className="flex flex-col">
              {lists.map((list) => (
                <Link
                  href={`/type?type=${list.title.toLowerCase()}`}
                  key={list.id}
                  className={`text-lg font-semibold px-5 py-1 ${
                    list.id === "grass"
                      ? "text-[#76cc54]"
                      : list.id === "fire"
                      ? "text-[#ff4422]"
                      : list.id === "water"
                      ? "text-[#3299fe]"
                      : list.id === "electric"
                      ? "text-[#ffcd32]"
                      : list.id === "normal"
                      ? "text-[#aaaa99]"
                      : list.id === "ice"
                      ? "text-[#67cdff]"
                      : list.id === "fighting"
                      ? "text-[#ba5545]"
                      : list.id === "poison"
                      ? "text-[#7f3f72]"
                      : list.id === "ground"
                      ? "text-[#ddba54]"
                      : list.id === "flying"
                      ? "text-[#8898fe]"
                      : list.id === "psychic"
                      ? "text-[#ff5599]"
                      : list.id === "bug"
                      ? "text-[#abba22]"
                      : list.id === "rock"
                      ? "text-[#baab66]"
                      : list.id === "ghost"
                      ? "text-[#6667ba]"
                      : list.id === "dragon"
                      ? "text-[#7766ec]"
                      : list.id === "dark"
                      ? "text-[#765545]"
                      : list.id === "steel"
                      ? "text-[#ababbb]"
                      : "text-[#ef99ef]"
                  }`}
                >
                  {list.title}
                </Link>
              ))}
            </div>
          </div>
        ) : (
          <div
            className="cursor-pointer fixed z-50 top-[100px] right-2 bg-black/50 rounded-full"
            onClick={() => setShow(true)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-10 h-10"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </div>
        )}
      </div>
    </>
  );
}

export default Lists;
