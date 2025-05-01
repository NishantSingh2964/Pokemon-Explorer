import { createContext, useState, useEffect } from 'react';

export const PokemonContext = createContext();

export function PokemonProvider({ children }) {
  const [pokemonList, setPokemonList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchPokemonList() {
      setLoading(true);
      try {
        const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151');
        const data = await res.json();
        const detailedPokemon = await Promise.all(
          data.results.map(async (p) => {
            const res = await fetch(p.url);
            return res.json();
          })
        );
        setPokemonList(detailedPokemon);
      } catch (err) {
        setError('Failed to fetch Pokémon');
      } finally {
        setLoading(false);
      }
    }

    fetchPokemonList();
  }, []);

  return (
    <PokemonContext.Provider value={{ pokemonList, loading, error }}>
      {children}
    </PokemonContext.Provider>
  );
}
