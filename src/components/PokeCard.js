import "./PokeCard.css";
import React, { useState } from "react";
import { mockPokemonData } from "../mock/pokeData";

function getData() {
  return Promise.resolve(mockPokemonData);
}

const initialPokemonState = {
  name: "",
  sprites: {
    front_default: "",
    front_shiny: ""
  },
  video: ""
};

function PokeCard() {
  const [pokemon, setPokemon] = useState(initialPokemonState);

  getData().then((pokemon) => {
    setPokemon(pokemon);
  });

  return (
    <div className="poke-card">
      <div className="pokemon-header">
        <h1 className="pokemon-name">{pokemon.name}</h1>
      </div>

      <div className="pokemon-images">
        <img src={pokemon.sprites.front_default} alt="default" />
        <img src={pokemon.sprites.front_shiny} alt="shiny" />
      </div>

      <div className="pokemon-footer">
        <a
          className="pokemon-video"
          href={pokemon.video}
          target="_blank"
          rel="noopener noreferrer"
        >
          {pokemon.name} video
        </a>
      </div>
    </div>
  );
}

export default PokeCard;
