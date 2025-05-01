import React from 'react';
import PokemonCard from '../components/PokemonCard';  // ✅ Fixed Import
import SortingFiltering from '../components/SortingFiltering';
import { usePokemonList } from '../hooks/usePokemonList';
import Pagination from '../components/Pagination';
import RandomButton from '../components/RandomButton';

export default function HomePage() {
  const {
    filteredPokemon,
    loading,
    error,
    search,
    setSearch,
    typeFilter,
    setTypeFilter,
    sortOption,
    setSortOption,
    currentPage,
    setCurrentPage,
    totalPages
  } = usePokemonList();

  return (
    <div className="container mx-auto p-4">
      {/* Sorting and Filtering Component */}
      <SortingFiltering
        search={search}
        setSearch={setSearch}
        typeFilter={typeFilter}
        setTypeFilter={setTypeFilter}
        sortOption={sortOption}
        setSortOption={setSortOption}
      />

      {/* Random Button for Mobile Screens */}
      <div className="block sm:hidden ml-4 fixed bottom-4 left-1/2 transform -translate-x-1/2 w-32 h-12 rounded-full bg-yellow-500 text-white shadow-lg transition-all hover:bg-yellow-400 flex justify-center items-center z-10">
        <RandomButton /> {/* Visible only on mobile screens */}
      </div>

      {loading && (
        <p className="text-blue-500 text-xl font-semibold text-center my-6 animate-pulse">
          Loading Pokémon...
        </p>
      )}
      {error && (
        <p className="text-red-500 text-lg font-medium text-center my-6">
          Error fetching Pokémon data. Please try again!
        </p>
      )}
      {!loading && filteredPokemon.length === 0 && (
        <p className="text-gray-700 text-lg font-medium text-center my-6">
          No Pokémon found. Try a different search!
        </p>
      )}

      {/* Pokémon Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredPokemon.map((poke) => (
          <PokemonCard key={poke.id} pokemon={poke} />
        ))}
      </div>

      {/* Pagination */}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
}
