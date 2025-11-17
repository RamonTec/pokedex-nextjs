
import InfiniteScroll from "react-infinite-scroll-component";
import { usePokedexList } from "../hooks/usePokedex";
import PokemonCard from "./PokemonCard";

const PokemonList = () => {
  const { pokedexData: pokemons, loading, error, handleFetchMorePokemons } = usePokedexList();

  if (loading) {
    return (
      <div className="flex min-h-[200px] items-center justify-center">
        <p className="text-lg font-medium text-gray-600">Cargando…</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex min-h-[200px] items-center justify-center">
        <p className="text-lg font-medium text-red-500">
          Error: {error}
        </p>
      </div>
    );
  }

  return (
    <section className="mx-auto max-w-7xl py-8">
      <InfiniteScroll
        dataLength={pokemons?.results.length || 0}
        next={handleFetchMorePokemons}
        hasMore={pokemons?.next !== null}
        loader={<h4>Loading...</h4>}
        scrollThreshold={1}
        endMessage={
          <p style={{ textAlign: 'center' }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
      >
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
          {pokemons?.results.map((pokemon) => {
            const id = pokemon.url.split("/").slice(-2, -1)[0];
            return (
              <PokemonCard
                key={pokemon.name}
                id={id}
                name={pokemon.name}
              />
            );
          })}
        </div>
      </InfiniteScroll>
    </section>
  );
};

export default PokemonList;
