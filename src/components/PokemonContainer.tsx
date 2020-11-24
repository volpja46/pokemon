import * as React from "react";
import { PokeApi } from "../model";
import { PokemonComponent } from "../Pokemon";

export type Pokemon = {
  id: number;
  name: string;
  type: string[];
  baseExperience: string;
  image: string;
};

function mapPokemonApitoPokemon(pokemonApi: PokeApi): Pokemon {
  return {
    id: pokemonApi.id,
    name: pokemonApi.name,
    type: pokemonApi.types.map((p) => p.type.name),
    baseExperience: String(pokemonApi.base_experience),
    image: pokemonApi.sprites.front_default
  };
}

export default function PokemonContainer({ id }: { id: number }) {
  const [pokemon, setPokemon] = React.useState<undefined | Pokemon>();
  React.useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/" + id)
      .then((res) => res.json())
      .then((p) => {
        setPokemon(mapPokemonApitoPokemon(p));
      });
  }, [id]);
  if (pokemon === undefined) {
    return <div>loading...</div>;
  }
  return <PokemonComponent pokemon={pokemon} />;
}
