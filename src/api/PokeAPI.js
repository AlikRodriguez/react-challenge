
import { mockPokemonData } from '../mock/pokeData';

export const getData = () => {
    return Promise.resolve( mockPokemonData );
}
