import { useEffect, useState, useMemo } from 'react';

export function usePokemonList() {
  const [allPokemon, setAllPokemon] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [search, setSearch] = useState('');
  const [typeFilter, setTypeFilter] = useState('');
  const [sortOption, setSortOption] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 20;

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=150');
        const data = await res.json();

        // Fetch details for each Pokémon
        const detailedPromises = data.results.map(async (poke) => {
          const resPoke = await fetch(poke.url);
          return await resPoke.json();
        });

        const detailedPokemon = await Promise.all(detailedPromises);
        setAllPokemon(detailedPokemon);
      } catch (err) {
        setError('Failed to fetch Pokémon');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Filtering + Sorting before Pagination
  const filteredPokemon = useMemo(() => {
    let filtered = allPokemon;

    // Search Filter
    if (search) {
      filtered = filtered.filter((poke) =>
        poke.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    // Type Filter
    if (typeFilter && typeFilter !== 'All') {
      filtered = filtered.filter((poke) =>
        poke.types.some((t) => t.type.name.toLowerCase() === typeFilter.toLowerCase())
      );
    }

    // Sorting
    if (sortOption === 'id-asc') {
      filtered = filtered.sort((a, b) => a.id - b.id);
    } else if (sortOption === 'name-asc') {
      filtered = filtered.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortOption === 'name-desc') {
      filtered = filtered.sort((a, b) => b.name.localeCompare(a.name));
    }

    return filtered;
  }, [allPokemon, search, typeFilter, sortOption]);

  // Pagination Logic
  const totalPages = Math.ceil(filteredPokemon.length / itemsPerPage);
  const paginatedPokemon = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return filteredPokemon.slice(start, start + itemsPerPage);
  }, [filteredPokemon, currentPage]);

  return {
    filteredPokemon: paginatedPokemon,
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
  };
}
