
export interface IPokedexQueryParams {
  limit: number;
  offset: number;
}

export interface IPokemon {
  name: string;
  url: string;
  id: number;
  sprites: ISprites;
}

export interface ISprites {
  front_default: string;
}

export type PokemonListResponseType = Pick<IPokemon, 'name' | 'url' >
export type PokemonDetailResponseType = Pick<IPokemon, 'id' | 'sprites' >