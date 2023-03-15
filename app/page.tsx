"use client";
import AllFeed from "@/components/AllFeed";
import AllPokemon from "@/components/AllPokemon";

import React from "react";

type Props = {};

function page({}: Props) {
  return (
    <div>
      {/* <AllFeed /> */}
      <AllPokemon />
    </div>
  );
}

export default page;
