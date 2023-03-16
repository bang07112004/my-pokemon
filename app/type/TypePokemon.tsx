import React from "react";
import { useSearchParams } from "next/navigation";

type Props = {};

function TypePokemon({}: Props) {
  const TypeParams = useSearchParams();

  const search = TypeParams.get("type");
  return search || "";
}

export default TypePokemon;
