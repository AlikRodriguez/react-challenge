import "./styles.css";
import React, {useState} from "react";
import PokeCard from "./components/PokeCard";
import { getPokemon } from "./api/PokeAPI";

const initialState = {
    name: '',
    video: '',
    sprites: { front_default: '', front_shiny: '' }
}

export default function App() {

    let [pokemon, setPokemon] = useState(initialState)
    getPokemon().then(setPokemon)

    return <div className="App"> <PokeCard pokemon={pokemon}/> </div>
}
