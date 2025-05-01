import { useState } from 'react';

export const useRandomPokemon = () => {
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchRandomPokemon = async () => {
    setLoading(true);
    setError(null);
    const randomId = Math.floor(Math.random() * 898) + 1; // Random Pokémon ID between 1 and 898

    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomId}`);
      const data = await response.json();
      setPokemon(data); // Save Pokémon data to state
    } catch (error) {
      setError('Error fetching random Pokémon');
    } finally {
      setLoading(false);
    }
  };

  return {
    pokemon,    // The fetched Pokémon object
    loading,    // Loading state
    error,      // Error state
    fetchRandomPokemon // The function to trigger random Pokémon fetch
  };
};
