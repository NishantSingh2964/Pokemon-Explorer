import { useFavorites } from '../hooks/useFavorites';
import PokemonList from '../components/PokemonList';

export default function FavoritesPage() {
  const { favorites } = useFavorites();

  return (
    <div className="container mx-auto p-4">
      {/* Enhanced Heading */}
      <h2 className="text-4xl font-extrabold text-center text-gradient bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-yellow-400 to-blue-500 mb-6">
        🌟 Your Favorite Pokémon 🌟
      </h2>

      {/* Conditional Message */}
      {favorites.length === 0 ? (
        <p className="text-lg text-center text-gray-600">
          You haven't added any Pokémon to your favorites yet! 😕
        </p>
      ) : (
        <PokemonList pokemon={favorites} />
      )}
    </div>
  );
}
