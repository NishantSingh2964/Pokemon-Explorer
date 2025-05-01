import './SortingFiltering.css';

export default function SortingFiltering({ search, setSearch, typeFilter, setTypeFilter, sortOption, setSortOption }) {
    return (
      <div className="flex flex-col md:flex-row items-center gap-4 mb-10">
        {/* Search */}
        <input 
          type="text"
          placeholder="Search Pokémon"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border rounded p-2 flex-1 min-w-[200px]" // fixed min width
        />
  
        {/* Type Filter */}
        <select
          value={typeFilter}
          onChange={(e) => setTypeFilter(e.target.value)}
          className="border rounded p-2 min-w-[150px]"  // fixed width
        >
          <option value="">All Types</option>
          <option value="fire">Fire</option>
          <option value="water">Water</option>
          <option value="grass">Grass</option>
          <option value="electric">Electric</option>
          <option value="psychic">Psychic</option>
          <option value="rock">Rock</option>
          <option value="ground">Ground</option>
          <option value="fairy">Fairy</option>
          <option value="poison">Poison</option>
          <option value="fighting">Fighting</option>
          <option value="bug">Bug</option>
          <option value="ghost">Ghost</option>
          <option value="normal">Normal</option>
        </select>
  
        {/* Sorting */}
        <select
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
          className="border rounded p-2 min-w-[150px]"  // fixed width
        >
          <option value="">Sort</option>
          <option value="id-asc">ID (Asc)</option>
          <option value="name-asc">Name (A-Z)</option>
          <option value="name-desc">Name (Z-A)</option>
        </select>
      </div>
    );
  }
  