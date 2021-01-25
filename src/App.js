import React, {useState} from "react";
import PokeCard from "./components/PokeCard";
import "./styles.css";
import { getData } from "./api/PokeAPI";


export default function App() {

    let [pokemon, setPokemon] = useState({name: '', video: '', sprites: {}})

    getData()
        .then((pokemon) => {
            setPokemon(pokemon)
    })

    return (
        <div className="App">
           <PokeCard pokemon={pokemon}/>
        </div>
  );
}
