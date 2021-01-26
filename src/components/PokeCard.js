import './PokeCard.css';
import React from 'react';


function PokeCard(props) {

    const {
        name,
        sprites: { front_default: frontDefault, front_shiny: frontShiny }, 
        video
    } = props.pokemon;

    return (
        <div className="poke-card"> 
            <div className="pokemon-header">
                <h1 className="pokemon-name">{ name }</h1>
            </div>
            <div className="pokemon-images">
                <img src={ frontDefault } alt="default" />
                <img src={ frontShiny } alt="shiny" />
            </div>
            <div className="pokemon-footer">
                <a className="pokemon-video" href={ video } target="_blank" rel="noopener noreferrer">{ name } video</a>
            </div>
        </div>
    );
    
}

export default PokeCard;

