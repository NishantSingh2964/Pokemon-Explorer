import { useState, useEffect } from 'react';
import { fetchPokemonDetail } from '../utils/api';

export default function CompareTool() {
  const [id1, setId1] = useState('');
  const [id2, setId2] = useState('');
  const [pokemon1, setPokemon1] = useState(null);
  const [pokemon2, setPokemon2] = useState(null);

  async function handleCompare() {
    if (id1 && id2) {
      const data1 = await fetchPokemonDetail(id1);
      const data2 = await fetchPokemonDetail(id2);
      setPokemon1(data1);
      setPokemon2(data2);
    }
  }

  useEffect(() => {
    // Auto-compare when both IDs entered
    if (id1 && id2) handleCompare();
  }, [id1, id2]);

  return (
    <div className="p-4 bg-white rounded shadow mt-6">
      <h2 className="text-xl font-bold mb-4">Compare Pokémon</h2>

      <div className="flex space-x-4">
        <input
          type="number"
          placeholder="Enter ID 1"
          value={id1}
          onChange={(e) => setId1(e.target.value)}
          className="border p-2 rounded w-1/2"
          min="1"
          max="150"
        />
        <input
          type="number"
          placeholder="Enter ID 2"
          value={id2}
          onChange={(e) => setId2(e.target.value)}
          className="border p-2 rounded w-1/2"
          min="1"
          max="150"
        />
      </div>

      {pokemon1 && pokemon2 && (
        <div className="mt-6 grid grid-cols-2 gap-4">
          {[pokemon1, pokemon2].map((poke, idx) => (
            <div key={idx} className="p-4 border rounded text-center">
              <h3 className="font-semibold capitalize">{poke.name} (#{poke.id})</h3>
              <img src={poke.image} alt={poke.name} className="mx-auto" />
              <p>Types: {poke.types.join(', ')}</p>

              <h4 className="mt-2 font-semibold">Stats:</h4>
              <ul className="text-left">
                {poke.stats.map((s) => (
                  <li key={s.name}>
                    {s.name}: {s.value}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
