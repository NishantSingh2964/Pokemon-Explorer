import React from 'react';
import PokemonCard from './PokemonCard';

export default function PokemonList({ pokemon }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {/* Render the Pokémon cards dynamically */}
      {pokemon.map((p) => (
        <PokemonCard key={p.id} pokemon={p} />
      ))}
    </div>
  );
}
