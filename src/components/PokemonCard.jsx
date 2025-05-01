import React from 'react';
import { Link } from 'react-router-dom';
import { useFavoritesContext } from '../contexts/FavoritesContext'; // ✅ import favorites hook
import { FaHeart } from 'react-icons/fa'; // ✅ import heart icon

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

export default function PokemonCard({ pokemon }) {
  const { toggleFavorite, isFavorite } = useFavoritesContext(); // ✅ favorites context
  const favorite = isFavorite(pokemon.id); // Check if this Pokemon is already in favorites

  return (
    <div className="relative bg-white rounded-lg shadow-md p-4 hover:shadow-xl transition">
      {/* Heart button */}
      <button
        onClick={() => toggleFavorite(pokemon)} // Toggle favorite when clicked
        className="absolute top-2 right-2"
      >
        <FaHeart className={`text-2xl ${favorite ? 'text-red-500' : 'text-gray-300'}`} />
      </button>

      {/* Link to detail page */}
      <Link to={`/pokemon/${pokemon.id}`} className="block">
        <img
          src={pokemon.sprites.front_default}
          alt={pokemon.name}
          className="mx-auto w-32 h-32"
        />
        <h3 className="text-lg font-bold text-center capitalize mt-2">{pokemon.name}</h3>
        <p className="text-center text-gray-500">ID: {pokemon.id}</p>

        {/* Type badges */}
        <div className="mt-2 flex justify-center flex-wrap gap-2">
          <span className={`px-2 py-1 rounded text-xs font-semibold  bg-gray-200 text-gray-800`}>Details</span>
          {pokemon.types.map((t) => (
            <span
              key={t.type.name}
              className={`px-2 py-1 rounded text-xs font-semibold ${typeColors[t.type.name] || 'bg-gray-200 text-gray-800'}`}
            >
              {t.type.name.charAt(0).toUpperCase() + t.type.name.slice(1)}
            </span>
          ))}
        </div>
      </Link>
    </div>
  );
}
