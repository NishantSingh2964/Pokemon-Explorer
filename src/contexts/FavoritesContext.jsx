import { createContext, useContext, useEffect, useState } from 'react';

// Create the context
export const FavoritesContext = createContext();  // export this explicitly

// Provider component
export function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState([]);

  // Load favorites from localStorage on component mount
  useEffect(() => {
    const stored = localStorage.getItem('favorites');
    if (stored) {
      setFavorites(JSON.parse(stored));
    }
  }, []);

  // Save favorites to localStorage whenever they change
  useEffect(() => {
    if (favorites.length > 0) {
      localStorage.setItem('favorites', JSON.stringify(favorites));
    }
  }, [favorites]);

  // Toggle the favorite status of a pokemon
  function toggleFavorite(pokemon) {
    setFavorites((prev) => {
      const exists = prev.some((p) => p.id === pokemon.id);
      if (exists) {
        // Remove from favorites
        return prev.filter((p) => p.id !== pokemon.id);
      } else {
        // Add to favorites
        return [...prev, pokemon];
      }
    });
  }

  // Check if a pokemon is in the favorites list
  function isFavorite(id) {
    return favorites.some((p) => p.id === id);
  }

  return (
    <FavoritesContext.Provider value={{ favorites, toggleFavorite, isFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
}

// Custom hook to access the favorites context
export function useFavoritesContext() {
  return useContext(FavoritesContext);
}
