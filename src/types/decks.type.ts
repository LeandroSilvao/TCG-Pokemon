import { Pokemon } from "./pokemon.type";

export interface Deck {
    id:string,
    name:string,
    pokemons: Pokemon[]
}