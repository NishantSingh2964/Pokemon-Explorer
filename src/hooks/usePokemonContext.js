import { useContext } from 'react';
import { PokemonContext } from '../contexts/PokemonContext';

export function usePokemonContext() {
  return useContext(PokemonContext);
}