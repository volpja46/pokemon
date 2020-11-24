import * as React from "react";
import "./styles.css";
import PokemonContainer from "./components/PokemonContainer";
// default dont need to open the brackets

export default function App() {
  const [pokemonId, setCurrentPokemonId] = React.useState<number | undefined>(
    undefined
  );
  return (
    <div className="App">
      <div>Choose your Pokemon!!!</div>
      {["squirtle ", "charmanader ", "bulbasaur"].map((pokemonName) => {
        return (
          <button
            onClick={() => {
              setCurrentPokemonId(1);
            }}
          >
            {pokemonName}
          </button>
        );
      })}
      {pokemonId ? <PokemonContainer id={pokemonId} /> : null}
    </div>
  );
}
// pokemonId is value of input field
// homework show the correct pokemon

{
  /* <input
name="pokemonId"
type="number"
min="1"
max="500"
value={pokemonId}
onChange={(e) => setCurrentPokemonId(parseInt(e.target.value, 10))}
/> */
}
