// Fetch list of 150 Pokémon
export async function fetchPokemonList() {
    const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=150');
    const data = await res.json();
  
    const pokemonData = await Promise.all(
      data.results.map(async (p) => {
        const res = await fetch(p.url);
        const poke = await res.json();
  
        return {
          id: poke.id,
          name: poke.name,
          image: poke.sprites.front_default,
          types: poke.types.map((t) => t.type.name)
        };
      })
    );
  
    return pokemonData;
  }
  
  // Fetch full details for detail page
  export async function fetchPokemonDetail(id) {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const data = await res.json();
  
    return {
      id: data.id,
      name: data.name,
      image: data.sprites.front_default,
      types: data.types.map((t) => t.type.name),
      stats: data.stats.map((s) => ({
        name: s.stat.name,
        value: s.base_stat
      })),
      abilities: data.abilities.map((a) => a.ability.name),
      moves: data.moves.map((m) => m.move.name)
    };
  }
  