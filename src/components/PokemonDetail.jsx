import { useEffect, useState } from 'react';
import { fetchPokemonDetail } from '../utils/api';

export default function PokemonDetail({ id }) {
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPokemonDetail(id).then((data) => {
      setPokemon(data);
      setLoading(false);
    });
  }, [id]);

  if (loading) return <p>Loading details...</p>;
  if (!pokemon) return <p>Error loading details.</p>;

  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded-lg shadow">
      <h2 className="text-2xl font-bold capitalize">{pokemon.name} (#{pokemon.id})</h2>
      <img src={pokemon.image} alt={pokemon.name} className="mx-auto" />
      
      <p className="mt-2">Types: {pokemon.types.join(', ')}</p>

      <h3 className="mt-4 font-semibold">Stats:</h3>
      <ul>
        {pokemon.stats.map((s) => (
          <li key={s.name}>
            {s.name}: {s.value}
          </li>
        ))}
      </ul>

      <h3 className="mt-4 font-semibold">Abilities:</h3>
      <ul>
        {pokemon.abilities.map((a) => (
          <li key={a}>{a}</li>
        ))}
      </ul>

      <h3 className="mt-4 font-semibold">Moves:</h3>
      <ul className="h-32 overflow-y-scroll border p-2 rounded">
        {pokemon.moves.map((m) => (
          <li key={m}>{m}</li>
        ))}
      </ul>

      {/* Evolution chain (bonus future feature) */}
      {/* You can add evolution chain here later */}
    </div>
  );
}
