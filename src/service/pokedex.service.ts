import { BASE_URL } from "../const/constans";
import { IPagination, ResultType } from "../types/commons";
import { PokemonDetailResponseType, PokemonListResponseType } from "../types/pokedex";

export async function fetchPokemons(): Promise<ResultType<IPagination<PokemonListResponseType>>> {
  const url = `${BASE_URL}pokemon?limit=10&offset=0`;

  try {

    const response = await fetch(url);
    const data: IPagination<PokemonListResponseType> = await response.json();

    if (response.ok) {
      return { ok: true, data };
    }

    const errorMsg = `Error ${response.status}: ${response.statusText}`;
    return { ok: false, error: errorMsg };
    
  } catch (e) {
   const msg = e instanceof Error ? e.message : String(e);
  console.error(`--- Error fetching data: ${msg}`);
  return { ok: false, error: "Error consultando listado de pokemones." };
  }
}

export async function fetchPokemonDetail(id: string): Promise<ResultType<PokemonDetailResponseType>> {
  const url = `${BASE_URL}pokemon/${id}`;

  try {

    const response = await fetch(url);
    const data: PokemonDetailResponseType = await response.json();

    if (response.ok) {
      return { ok: true, data };
    }

    const errorMsg = `Error ${response.status}: ${response.statusText}`;
    return { ok: false, error: errorMsg };
    
  } catch (e) {
    const msg = e instanceof Error ? e.message : String(e);
    console.error(`--- Error fetching data: ${msg}`);
    return { ok: false, error: "Error consultando este pokemon." };
  }
}