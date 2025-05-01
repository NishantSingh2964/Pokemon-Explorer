import { useNavigate } from 'react-router-dom';

export default function RandomButton() {
  const navigate = useNavigate();

  const handleRandom = () => {
    const randomId = Math.floor(Math.random() * 150) + 1;
    navigate(`/pokemon/${randomId}`);
  };

  return (
    <button
      onClick={handleRandom}
      className="bg-yellow-400 hover:bg-yellow-500 text-white font-semibold py-2 px-5 rounded-full transition duration-300"
      style={{ minWidth: '180px' }}  // Fixed width to prevent shifting
    >
      🎲 Random Pokémon
    </button>
  );
}
