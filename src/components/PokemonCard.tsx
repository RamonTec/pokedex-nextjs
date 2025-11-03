
import { usePokemonDetail } from "../hooks/usePokedex";
import Image from "next/image";
import Link from "next/link";
import CustomLoader from "./CustomLoader";
import { PokemonCardSkeleton } from "./PokemonCardSkeleton";
import { Spinner } from "./Spinner";

interface IPokemonCardProps {
  id: string;
  name: string;
}

const PokemonCard = ({ id, name }: IPokemonCardProps) => {
  const {
    error: detailError,
    loading: detailLoading,
    pokemonDetailData,
  } = usePokemonDetail(id);

  if (detailLoading) {
    return <PokemonCardSkeleton />;
  }

  if (detailError) {
    return (
      <div className="rounded-lg border border-red-200 bg-red-50 p-4 text-center text-red-600">
        Error: {detailError}
      </div>
    );
  }

  if (!pokemonDetailData) {
    return (
      <div className="rounded-lg border border-yellow-200 bg-yellow-50 p-4 text-center text-yellow-600">
        No se encontró información para {name}
      </div>
    );
  }

  const imgSrc = pokemonDetailData.sprites?.front_default ?? "/fallback-pokemon.png";

  return (
    <Link href={`/pokemon/${id}`}>
      <span className="group block rounded-lg bg-white shadow hover:shadow-xl transition-shadow focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500">
       
        <div className="relative aspect-w-1 aspect-h-1 bg-gray-50 overflow-hidden rounded-t-lg">
          {imgSrc ? (
            <Image
              loader={({ src, width, quality }) =>
                CustomLoader({ src, width, quality }).toString()
              }
              src={imgSrc}
              alt={name}
              className="object-contain p-2 transition-transform duration-200 group-hover:scale-105"
              width={100}
              height={100}
            />
          ) : (
            <div className="flex h-full items-center justify-center">
              <Spinner />
            </div>
          )}
        </div>

        <div className="p-4">
          <h3 className="text-lg font-semibold capitalize text-gray-800 transition-colors group-hover:text-indigo-600">
            {name}
          </h3>
        </div>

      </span>
    </Link>
  );
};

export default PokemonCard;
