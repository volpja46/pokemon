import * as React from "react";
import "./styles.css";

import { Pokemon } from "./App";

const style1 = {
  color: "white",
  backgroundColor: "lightblue",
  padding: "7px",
  fontFamily: "Arial",
  margin: 10
};

export function PokemonComponent({ pokemon }: { pokemon: Pokemon }) {
  return (
    <div>
      <img alt={pokemon.name} src={pokemon.image} width="220px" />
      <h2 style={style1}>{pokemon.name}</h2>
      <h2 style={style1}>id: {pokemon.id}</h2>
      <h2 style={style1}>
        type:{" "}
        {pokemon.type.map((t, i, arr) => (
          <span key={`${t}-${i}`}>{`${t}${
            i === arr.length - 1 ? "" : ", "
          } `}</span>
        ))}
      </h2>
      <h2 style={style1}>base experience: {pokemon.baseExperience}</h2>
    </div>
  );
}

export default PokemonComponent;
// use default for components & named export for everything else
