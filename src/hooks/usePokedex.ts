
import { useEffect, useState } from "react";
import { fetchPokemons, fetchPokemonDetail } from "../service/pokedex.service";
import { PokemonListResponseType, PokemonDetailResponseType } from "../types/pokedex";

export const usePokedexList = () => {

  const [pokedexData, setPokedexData] = useState<PokemonListResponseType[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {

      const response = await fetchPokemons();

      if (!response.ok) {
        setError(response.error);
        return;
      } else {
        setPokedexData(response.data.results);
      }

      setLoading(false);
    };
    fetchData();
  }, []);

  return { pokedexData, loading, error };
  
}


export const usePokemonDetail = (id: string) => {

  const [pokemonDetailData, setPokemonDetailData] = useState<PokemonDetailResponseType>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetchPokemonDetail(id);
      if (response.ok) {
        setPokemonDetailData(response.data);
      } else {
        setError(response.error);
      }

      setLoading(false);
    };
    fetchData();
  }, [id]);

  return { pokemonDetailData, loading, error };
  
}