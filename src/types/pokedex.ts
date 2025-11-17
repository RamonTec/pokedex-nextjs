
export interface IPokedexQueryParams {
  limit: number;
  offset: number;
}

export interface IPokemon {
  name: string;
  url: string;
  id: number;
  sprites: ISprites;
  height: number;
  weight: number;
  types: IPokemonType[];
}

export interface IPokemonType {
  slot: number;
  type: {
    name: string;
    url: string;
  }
}

export interface ISprites {
  front_default: string;
}

export type PokemonListResponseType = Pick<IPokemon, 'name' | 'url' >
export type PokemonDetailResponseType = Pick<IPokemon, 'id' | 'sprites' | 'height' | 'weight' | 'types'>