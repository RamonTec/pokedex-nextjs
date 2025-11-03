

export const PokemonCardSkeleton = () => {
  return (
    <div className="rounded-lg shadow-md bg-white animate-pulse overflow-hidden">
      
      <div className="bg-gray-300 aspect-w-1 aspect-h-1" />
      
      <div className="p-4 space-y-2">
        <div className="h-4 w-3/4 bg-gray-300 rounded" />
        <div className="h-6 w-1/2 bg-gray-300 rounded" />
        <div className="h-8 w-2/3 bg-gray-300 rounded" />
      </div>
    </div>
  );
};
