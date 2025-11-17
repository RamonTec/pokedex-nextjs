import { usePokemonDetail } from "../hooks/usePokedex";
import Image from "next/image";
import Link from "next/link";
import CustomLoader from "./CustomLoader";
import { PokemonCardSkeleton } from "./PokemonCardSkeleton";
import { Spinner } from "./Spinner";
import { IPokemonType } from "../types/pokedex";

interface IPokemonCardProps {
  id: string;
  name: string;
}

const TYPE_COLORS: Record<string, string> = {
  normal: 'from-gray-400 to-gray-500',
  fire: 'from-red-500 to-orange-500',
  water: 'from-blue-500 to-cyan-500',
  electric: 'from-yellow-400 to-yellow-300',
  grass: 'from-green-500 to-emerald-500',
  ice: 'from-cyan-300 to-blue-300',
  fighting: 'from-red-700 to-red-800',
  poison: 'from-purple-500 to-fuchsia-600',
  ground: 'from-yellow-600 to-yellow-700',
  flying: 'from-indigo-400 to-sky-400',
  psychic: 'from-pink-500 to-rose-500',
  bug: 'from-lime-500 to-green-500',
  rock: 'from-yellow-700 to-amber-800',
  ghost: 'from-indigo-700 to-purple-800',
  dragon: 'from-violet-600 to-purple-700',
  dark: 'from-gray-800 to-gray-900',
  steel: 'from-gray-400 to-gray-500',
  fairy: 'from-pink-300 to-pink-400',
};

const PokemonCard = ({ id, name }: IPokemonCardProps) => {
  const {
    error: detailError,
    loading: detailLoading,
    pokemonDetailData,
  } = usePokemonDetail(id);

  if (detailLoading) return <PokemonCardSkeleton />;

  if (detailError) {
    return (
      <div className="pokemon-card-error rounded-xl border border-red-500/30 bg-red-500/10 p-4 text-center text-red-600 dark:text-red-400 animate-fadeIn">
        Error: {detailError}
      </div>
    );
  }

  if (!pokemonDetailData) {
    return (
      <div className="pokemon-card-warning rounded-xl border border-yellow-500/30 bg-yellow-500/10 p-4 text-center text-yellow-600 dark:text-yellow-400 animate-fadeIn">
        No se encontró información para {name}
      </div>
    );
  }

  const imgSrc = pokemonDetailData.sprites?.front_default ?? "/fallback-pokemon.png";
  const types = pokemonDetailData.types?.map((t: IPokemonType) => t.type.name) || [];
  const primaryType = types[0] || 'normal';
  const typeGradient = TYPE_COLORS[primaryType] || TYPE_COLORS.normal;

  return (
    <Link href={`/pokemon/${id}`} passHref>
      <div 
        className={`
          pokemon-card group relative overflow-hidden rounded-2xl shadow-lg
          transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl
          focus:outline-none focus:ring-2 focus:ring-indigo-500
          bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700
          animate-fadeIn cursor-pointer
        `}
      >
        <div className={`bg-gradient-to-r ${typeGradient} p-4`}>
          <div className="flex justify-between items-start">
            <div>
              <span className="text-white text-opacity-80 text-sm font-medium">
                #{id.padStart(3, '0')}
              </span>
              <h3 className="text-white text-xl font-bold capitalize mt-1">
                {name}
              </h3>
            </div>
            <div className="flex space-x-1">
              {types.map((type: string) => (
                <span 
                  key={type} 
                  className="type-badge px-2 py-1 rounded-full text-xs font-semibold text-white bg-black bg-opacity-20 capitalize"
                >
                  {type}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="p-4">
          <div className="pokemon-card-image-container flex justify-center py-2">
            {imgSrc ? (
              <div className="relative w-32 h-32">
                <Image
                  loader={({ src, width, quality }) =>
                    CustomLoader({ src, width, quality }).toString()
                  }
                  src={imgSrc}
                  alt={name}
                  className="pokemon-card-image object-contain transition-transform duration-300 group-hover:scale-110"
                  fill
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            ) : (
              <div className="flex h-32 w-32 items-center justify-center">
                <Spinner />
              </div>
            )}
          </div>

          <div className="grid grid-cols-2 gap-2 mt-4">
            <div className="bg-gray-100 dark:bg-gray-700 p-2 rounded-lg text-center">
              <div className="text-gray-500 dark:text-gray-400 text-xs">Height</div>
              <div className="font-semibold text-sm">
                {pokemonDetailData.height ? (pokemonDetailData.height / 10).toFixed(1) + 'm' : 'N/A'}
              </div>
            </div>
            <div className="bg-gray-100 dark:bg-gray-700 p-2 rounded-lg text-center">
              <div className="text-gray-500 dark:text-gray-400 text-xs">Weight</div>
              <div className="font-semibold text-sm">
                {pokemonDetailData.weight ? (pokemonDetailData.weight / 10).toFixed(1) + 'kg' : 'N/A'}
              </div>
            </div>
          </div>
        </div>

        
        <div className="absolute bottom-0 left-0 w-16 h-16 rounded-full bg-white bg-opacity-10 -ml-8 -mb-8"></div>
      </div>
    </Link>
  );
};

export default PokemonCard;
