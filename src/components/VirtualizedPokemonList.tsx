import { List } from 'react-window';
import PokemonCard from './PokemonCard';

interface VirtualizedPokemonListProps {
  pokemonList: { id: string; name: string }[];
}

const VirtualizedPokemonList = ({ pokemonList }: VirtualizedPokemonListProps) => {
  const Row = ({ index, style }: { index: number; style: React.CSSProperties }) => (
    <div style={style} className="p-2">
      <PokemonCard 
        id={pokemonList[index].id} 
        name={pokemonList[index].name} 
      />
    </div>
  );

  return (
    <List
      height={800}
      itemCount={pokemonList.length}
      itemSize={300}
      width="100%"
    > 
      {Row} 
    </List>
  );
};

export default VirtualizedPokemonList;
