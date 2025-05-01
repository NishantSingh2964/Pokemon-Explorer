import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const typeColors = {
  grass: 'bg-green-200 text-green-800',
  fire: 'bg-red-200 text-red-800',
  water: 'bg-blue-200 text-blue-800',
  poison: 'bg-purple-200 text-purple-800',
  bug: 'bg-lime-200 text-lime-800',
  normal: 'bg-gray-200 text-gray-800',
  electric: 'bg-yellow-200 text-yellow-800',
  ground: 'bg-yellow-300 text-yellow-900',
  fairy: 'bg-pink-200 text-pink-800',
  fighting: 'bg-orange-200 text-orange-800',
  psychic: 'bg-pink-300 text-pink-900',
  rock: 'bg-yellow-600 text-yellow-100',
  ghost: 'bg-indigo-200 text-indigo-800',
  ice: 'bg-blue-100 text-blue-800',
  dragon: 'bg-purple-400 text-white',
  dark: 'bg-gray-800 text-white',
  steel: 'bg-gray-400 text-gray-900',
  flying: 'bg-indigo-100 text-indigo-800',
};

export default function DetailPage() {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPokemon = async () => {
      setLoading(true);
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const data = await response.json();
        setPokemon(data);
      } catch (error) {
        setError('Error fetching Pokémon details');
      } finally {
        setLoading(false);
      }
    };

    fetchPokemon();
  }, [id]);

  if (loading) return <p>Loading Pokémon details...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="container mx-auto p-6 bg-white rounded-lg shadow-md max-w-xl">
      <h2 className="text-3xl font-bold text-center capitalize mb-4">{pokemon.name}</h2>
      <img 
        src={pokemon.sprites.other['official-artwork'].front_default || pokemon.sprites.front_default} 
        alt={pokemon.name} 
        className="w-64 h-64 mx-auto"
      />

      {/* Type badges */}
      <div className="mt-4 text-center">
        <h3 className="text-xl font-semibold mb-2">Type(s):</h3>
        <div className="flex justify-center gap-2 flex-wrap">
          {pokemon.types.map((t) => (
            <span
              key={t.type.name}
              className={`px-3 py-1 rounded text-sm font-semibold ${typeColors[t.type.name] || 'bg-gray-200 text-gray-800'}`}
            >
              {t.type.name.charAt(0).toUpperCase() + t.type.name.slice(1)}
            </span>
          ))}
        </div>
      </div>

      {/* Stats */}
      <div className="mt-6">
        <h3 className="text-xl font-semibold mb-2">Stats</h3>
        <ul className="space-y-2">
          {pokemon.stats.map((stat) => (
            <li key={stat.stat.name} className="flex justify-between">
              <span className="capitalize">{stat.stat.name}</span>
              <span className="font-bold">{stat.base_stat}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
