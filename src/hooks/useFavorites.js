import { useContext } from 'react';
import { FavoritesContext } from '../contexts/FavoritesContext';

export function useFavorites() {
  return useContext(FavoritesContext);
}
