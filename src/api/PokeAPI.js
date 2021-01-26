
import { mockPokemonData } from '../mock/pokeData';

export const getPokemon = () => {
    return Promise.resolve( mockPokemonData );
}
