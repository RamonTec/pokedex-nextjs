
import { useEffect, useState } from "react";
import { fetchPokemons, fetchPokemonDetail } from "../service/pokedex.service";
import { PokemonListResponseType, PokemonDetailResponseType } from "../types/pokedex";
import { IPagination } from "../types/commons";

export const usePokedexList = (initialOffset = 0) => {

  const [pokedexData, setPokedexData] = useState<IPagination<PokemonListResponseType>>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const handleFetchMorePokemons = async() => {
    const newOffset = pokedexData?.results.length || 0;
    const response = await fetchPokemons(newOffset);
    if (!response.ok) {
      setError(response.error);
    } else {
      setPokedexData((prevData) => ({
        ...response.data,
        results: [...(prevData?.results || []), ...response.data.results]
      }))
    }
    setLoading(false);
  }

  useEffect(() => {
    const fetchData = async () => {

      const response = await fetchPokemons(initialOffset);

      if (!response.ok) {
        setError(response.error);
        return;
      } else {
        setPokedexData(response.data);
      }

      setLoading(false);
    };
    fetchData();
  }, []);

  return { pokedexData, loading, error, handleFetchMorePokemons };
  
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